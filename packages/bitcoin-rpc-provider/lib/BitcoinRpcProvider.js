import { isArray, flatten } from 'lodash'
import BigNumber from 'bignumber.js'

import JsonRpcProvider from '@liquality/jsonrpc-provider'
import { Address, addressToString } from '@liquality/utils'

import { version } from '../package.json'

export default class BitcoinRpcProvider extends JsonRpcProvider {
  constructor (uri, username, password, numberOfBlockConfirmation = 1, defaultFeePerByte = 3) {
    super(uri, username, password)
    this._numberOfBlockConfirmation = numberOfBlockConfirmation
    this._defaultFeePerByte = defaultFeePerByte
  }

  async decodeRawTransaction (rawTransaction) {
    const data = await this.jsonrpc('decoderawtransaction', rawTransaction)
    const { txid: hash, vout } = data
    const value = vout.reduce((p, n) => p + parseInt(n.value), 0)
    const output = { hash, value, _raw: { hex: rawTransaction, data } }
    return output
  }

  async getFeePerByte (numberOfBlocks = this._numberOfBlockConfirmation) {
    try {
      const { feerate } = await this.jsonrpc('estimatesmartfee', numberOfBlocks)

      if (feerate && feerate > 0) {
        return Math.ceil((feerate * 1e8) / 1024)
      }

      throw new Error('Invalid estimated fee')
    } catch (e) {
      return this._defaultFeePerByte
    }
  }

  async signMessage (message, from) {
    from = addressToString(from)
    return this.jsonrpc('signmessage', from, message).then(result => Buffer.from(result, 'base64').toString('hex'))
  }

  async sendTransaction (to, value) {
    to = addressToString(to)
    value = BigNumber(value).dividedBy(1e8).toNumber()
    return this.jsonrpc('sendtoaddress', to, value)
  }

  async dumpPrivKey (address) {
    address = addressToString(address)
    return this.jsonrpc('dumpprivkey', address)
  }

  async signRawTransaction (hexstring, prevtxs, privatekeys, sighashtype) {
    return this.jsonrpc('signrawtransaction', hexstring, prevtxs, privatekeys)
  }

  async createRawTransaction (transactions, outputs) {
    return this.jsonrpc('createrawtransaction', transactions, outputs)
  }

  async isAddressUsed (address) {
    const amountReceived = await this.getReceivedByAddress(address)

    return amountReceived > 0
  }

  async getBalance (addresses) {
    if (!isArray(addresses)) {
      addresses = [ addresses ]
    }

    const _utxos = await this.getUnspentTransactionsForAddresses(addresses)
    const utxos = flatten(_utxos)

    return utxos
      .reduce((acc, utxo) => acc.plus(utxo.satoshis), new BigNumber(0))
  }

  async getListUnspent (addresses) {
    addresses = addresses.map(addressToString)
    const utxos = await this.jsonrpc('listunspent', 0, 9999999, addresses)
    return utxos.map(utxo => ({ ...utxo, satoshis: BigNumber(utxo.amount).times(1e8).toNumber() }))
  }

  async getUnspentTransactionsForAddresses (addresses) {
    return this.getListUnspent(addresses)
  }

  async getUnspentTransactions (address) {
    return this.getListUnspent([address])
  }

  async getReceivedByAddress (address) {
    address = addressToString(address)
    return this.jsonrpc('getreceivedbyaddress', address)
  }

  async getTransactionHex (transactionHash) {
    return this.jsonrpc('getrawtransaction', transactionHash)
  }

  async generateBlock (numberOfBlocks) {
    return this.jsonrpc('generate', numberOfBlocks)
  }

  async getBlockByHash (blockHash, includeTx) {
    const data = await this.jsonrpc('getblock', blockHash)
    const {
      hash,
      height: number,
      time: timestamp,
      difficulty,
      size,
      previousblockhash: parentHash,
      nonce,
      confirmations
    } = data
    let { tx: transactions } = data

    if (includeTx) {
      const txs = transactions.map(this.getMethod('getTransactionByHash'))
      transactions = await Promise.all(txs)
    }

    return {
      hash,
      number,
      timestamp,
      difficulty,
      size,
      parentHash,
      nonce,
      transactions,
      confirmations
    }
  }

  async getBlockByNumber (blockNumber, includeTx) {
    return this.getBlockByHash(await this.jsonrpc('getblockhash', blockNumber), includeTx)
  }

  async getBlockHeight () {
    return this.jsonrpc('getblockcount')
  }

  async getNewAddress (type = 'legacy') {
    const params = type ? ['', type] : []
    const newAddress = await this.jsonrpc('getnewaddress', ...params)

    if (!newAddress) return null

    return new Address({
      address: newAddress
    })
  }

  async getAddresses (startingIndex = 0, numAddresses = 1) {
    const addresses = []
    const lastIndex = startingIndex + numAddresses

    for (let currentIndex = startingIndex; currentIndex < lastIndex; currentIndex++) {
      const address = await this.getNewAddress()
      addresses.push(address)
    }

    return addresses
  }

  async getUnusedAddress () {
    return this.getNewAddress()
  }

  async getUsedAddresses () {
    const addresses = await this.jsonrpc('listaddressgroupings')
    const ret = []

    for (const group of addresses) {
      for (const address of group) {
        ret.push(new Address({ address: address[0] }))
      }
    }

    const emptyaddresses = await this.jsonrpc('listreceivedbyaddress', 0, true)

    for (const address of emptyaddresses) {
      ret.push(new Address({ address: address.address }))
    }

    return ret
  }

  async isWalletAvailable () {
    const newAddress = await this.getNewAddress()
    return !!newAddress
  }

  // async getAddressTransactions (address, start, end) {
  //   const transactionIds = []
  //   for (const blockNumber of _.range(start, end + 1)) {
  //     const block = await this.getMethod('getBlockByNumber')(blockNumber, true)
  //     const matchingTransactions = block.transactions.filter(tx =>
  //       tx._raw.vout.find(v => v.scriptPubKey.addresses.includes(address) ||
  //       tx._raw.vin.find(v => v.address === address)))
  //     if (matchingTransactions) {
  //       transactionIds.push(...matchingTransactions.map(tx => tx.hash))
  //     }
  //   }
  //   return transactionIds
  // }

  async getTransactionByHash (transactionHash) {
    const tx = await this.getRawTransactionByHash(transactionHash, true)
    const value = tx.vout.reduce((p, n) => p.plus(BigNumber(n.value).times(1e8)), BigNumber(0))
    const result = {
      hash: tx.txid,
      value,
      _raw: tx,
      confirmations: 0
    }

    if (tx.confirmations > 0) {
      const block = await this.getBlockByHash(tx.blockhash)
      Object.assign(result, {
        blockHash: block.hash,
        blockNumber: block.number,
        confirmations: tx.confirmations
      })
    }

    return result
  }

  async getRawTransactionByHash (transactionHash, decode = false) {
    return this.jsonrpc('getrawtransaction', transactionHash, decode ? 1 : 0)
  }

  async sendRawTransaction (rawTransaction) {
    return this.jsonrpc('sendrawtransaction', rawTransaction)
  }
}

BitcoinRpcProvider.version = version
