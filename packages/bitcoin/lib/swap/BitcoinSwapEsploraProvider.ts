import { HttpClient } from '@liquality/client';
import { SwapParams, Transaction } from '@liquality/types';
import { Transaction as BitcoinTransaction } from '../types';
import { BitcoinBaseWallet } from '../wallet/BitcoinBaseWallet';
import { BitcoinSwapBaseProvider } from './BitcoinSwapBaseProvider';
import { BitcoinSwapProviderOptions, PaymentVariants, TransactionMatchesFunction } from './types';

export class BitcoinSwapEsploraProvider extends BitcoinSwapBaseProvider {
    private _httpClient: HttpClient;

    constructor(options: BitcoinSwapProviderOptions, walletProvider: BitcoinBaseWallet) {
        super(options, walletProvider);
        this._httpClient = new HttpClient({ baseURL: options.scraperUrl });
    }

    async findAddressTransaction(address: string, currentHeight: number, predicate: TransactionMatchesFunction) {
        // TODO: This does not go through pages as swap addresses have at most 2 transactions
        // Investigate whether retrieving more transactions is required.
        const transactions = await this._httpClient.nodeGet(`/address/${address}/txs`);

        for (const transaction of transactions) {
            const formattedTransaction: Transaction<BitcoinTransaction> = await this.walletProvider
                .getChainProvider()
                .getProvider()
                .formatTransaction(transaction, currentHeight);
            if (predicate(formattedTransaction)) {
                return formattedTransaction;
            }
        }
    }

    async findSwapTransaction(swapParams: SwapParams, blockNumber: number, predicate: TransactionMatchesFunction) {
        const currentHeight: number = await this.walletProvider.getChainProvider().getBlockHeight();
        const swapOutput: Buffer = this.getSwapOutput(swapParams);
        const paymentVariants: PaymentVariants = this.getSwapPaymentVariants(swapOutput);
        for (const paymentVariant of Object.values(paymentVariants)) {
            const addressTransaction = this.findAddressTransaction(paymentVariant.address, currentHeight, predicate);
            if (addressTransaction) return addressTransaction;
        }
    }
}
