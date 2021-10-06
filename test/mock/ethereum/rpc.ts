// seed phrase: crouch great grape leg maze swap urban motor have poet saddle pave

export default {
  eth_accounts: [
    {
      params: [],
      result: [
        '0x322d4959c911520645c0638204b42ce0689236e9',
        '0x635d7d148054b9471d79084b80b864a166956139',
        '0xa17fe13ab28477f17fc7f1ec99a4385c95a5356b',
        '0xd09f520de3fc24ee94fc4fb19f062c4d0cdec6c0',
        '0xfc0853855e11ccb2120434ed97e76f44b55b869e',
        '0xa1bc9766cf6b9f3d7d072430a9de2bdfa94af20b',
        '0x786a4faf6ccd016131c66b1cc74dfb8f5f71fa71',
        '0x99a2d52e6626998218801a0cf6ddbdf63b6865cd',
        '0x47125b17d8f12188d40797631413f9b58fbada80',
        '0xfd5becf2adec096ef511dbab5a48807ae5854116'
      ]
    }
  ],
  eth_gasPrice: [
    {
      params: [],
      result: '0x2540be400'
    }
  ],
  eth_estimateGas: [
    {
      params: [
        {
          from: '0x322d4959c911520645c0638204b42ce0689236e9',
          to: '0x635d7d148054b9471d79084b80b864a166956139',
          value: '0x3e8'
        }
      ],
      result: '0x5208'
    },
    {
      params: [
        {
          from: '0x322d4959c911520645c0638204b42ce0689236e9',
          to: '0x635d7d148054b9471d79084b80b864a166956139',
          value: '0x3e8',
          data: '0x1234'
        }
      ],
      result: '0x9c40'
    },
    {
      params: [
        {
          from: '0x635d7d148054b9471d79084b80b864a166956139',
          to: '0x635d7d148054b9471d79084b80b864a166956139',
          value: '0x1111',
          data: '0x5555'
        }
      ],
      result: '0x5228'
    },
    {
      params: [
        {
          from: '0x635d7d148054b9471d79084b80b864a166956139',
          to: '0x635d7d148054b9471d79084b80b864a166956139',
          value: '0x1111'
        }
      ],
      result: '0x5208'
    }
  ],
  eth_sendTransaction: [
    {
      params: [
        {
          from: '0x322d4959c911520645c0638204b42ce0689236e9',
          to: '0x635d7d148054b9471d79084b80b864a166956139',
          value: '0x3e8',
          gas: '0x5208'
        }
      ],
      result: '7968d7929845cf0b32e8c8e65f363ba764420bcfe70e4eeef63312e42218d6b2'
    },
    {
      params: [
        {
          from: '0x322d4959c911520645c0638204b42ce0689236e9',
          to: '0x635d7d148054b9471d79084b80b864a166956139',
          value: '0x3e8',
          data: '0x1234',
          gas: '0xea60'
        }
      ],
      result: '0xf5acc7ff066f33c9b6fb53105d24bb0e89940afaf1bddf47632d79cef2da617a'
    }
  ],
  eth_getBlockByNumber: [
    {
      params: ['0x1', true],
      result: {
        number: '0x1',
        hash: '0x868b4c97d842aa758dfc97834088aee0687410365140adc4bebbc4c02b0eddc3',
        parentHash: '0xf119e45bfae9893ce759772e11a427d67427ceacf2bc04d11d406e4d7ad511da',
        mixHash: '0x0000000000000000000000000000000000000000000000000000000000000000',
        nonce: '0x0000000000000000',
        sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
        logsBloom:
          '0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000',
        transactionsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
        stateRoot: '0xf9220de8a2b967110e042de4097ffb126ba09e7acc614c0f8cb963531ae301d7',
        receiptsRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
        miner: '0x0000000000000000000000000000000000000000',
        difficulty: '0x0',
        totalDifficulty: '0x0',
        extraData: '0x',
        size: '0x03e8',
        gas: '0x6691b7',
        gasUsed: '0x5208',
        timestamp: '0x5c3f0135',
        transactions: [
          {
            hash: '0xca218db60aaad1a3e4d7ea815750e8bf44a89d967266c3662746f796800412cd',
            nonce: '0x0',
            blockHash: '0x868b4c97d842aa758dfc97834088aee0687410365140adc4bebbc4c02b0eddc3',
            blockNumber: '0x01',
            transactionIndex: '0x00',
            from: '0x322d4959c911520645c0638204b42ce0689236e9',
            to: '0x635d7d148054b9471d79084b80b864a166956139',
            value: '0x2710',
            gas: '0x015f90',
            gasPrice: '0x04a817c800',
            input: '0x0'
          }
        ],
        uncles: []
      }
    },
    {
      params: ['latest', false],
      result: {
        baseFeePerGas: '0x17bc4f292a',
        difficulty: '0x223280cbcfcc87',
        extraData: '0x626565706f6f6c2e6f72675f3621cb',
        gasLimit: '0x1ca35ef',
        gasUsed: '0x1bfbf7',
        hash: '0xed814a3dbf7b4c7329f5675ed9edf71edeeadc4f016d22120fbed347f007e256',
        logsBloom:
          '0x80200000a0008119820000008000008000000000000000000011000000060000040810c008020180000002200400010300008020002004a000800000002000010000000008600580a800000c000048200000010000a00100004009000000001002880000030080200000000008001a0202400031100002000000099000004040020410012000000080400002000000020004002001a0000800000040001000000389120400402004040000b050080000110200000000002010201200000000010401000200000800200800000200000002000008000000144030000000002020021000002c0000400000000820402084042000000049000000c0000000000000',
        miner: '0x99c85bb64564d9ef9a99621301f22c9993cb89e3',
        mixHash: '0x2fbc6beef8ed1de87c2f4d5fa8b789a5fb7e24029d512b973d2f81f832786e41',
        nonce: '0xdaedd74f7e3753dc',
        number: '0xcbd60a',
        parentHash: '0xfefd36c686e637f13425b97fbbeda2cb78921e2e12065a6643022c0be4209da0',
        receiptsRoot: '0x008249c6ccf5e5ca9d60af5d83ac423d2ff6436898903dd96eecae6fd736890a',
        sha3Uncles: '0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347',
        size: '0x142d',
        stateRoot: '0x685b6b71082fea785bcb4b23d621291a4dab78baa622c5d3ce326b6ce40f49af',
        timestamp: '0x615c2c43',
        totalDifficulty: '0x6be60cd0e69b5e29964',
        transactions: [
          '0x489191bf8670342d9829a90f637574c95ead31d534f6662ff31a520be4442eea',
          '0x79730fba2c10cb99e03bc6753115d4be742effe54ccfa8a7dc350632a96f308f',
          '0x4ddd117f4f1762fc1d3aa9991287984a9840191a19abf2fe927eb7087725619b',
          '0xeb05df18b1d58f6093af1bb9a84d4032a011d463629a3c4e01074a48e18a3902',
          '0xb5112db239b8307748af556080cf56d116556131bd780603ac8c78a56dce523d',
          '0xaf28ab0e86da8a8703e82c73f3d37044c7da8eceef0923caf914afc03469ee53',
          '0x6d16c735693b9a711bca735d203945d7f5d3fd7c9158c73ad0efbad5437d59f2',
          '0xbbdbde9aeee84b17646de68af6b6c69eea765315e25617334ed4b0d0aaf2c0ce',
          '0x366df8e51b8f5a6be47d951bbf65a38881d01392b361a9c40fd94b3c6ffe5225',
          '0x76a6882ee60867ac6e70cec08dd3759e3ac30abd3ef079c79e47f17e423e2cf0',
          '0x5b42598390ba33e0a919b02e5bc2854f5f1e7fdd387712ae59955231296ae2f8',
          '0x9030d1def39140f64aa0fc73c62451b689945bc089e7fc4b23f24c1506e5dfaa',
          '0x832a610162e5f91acc229020465fc4c6867b1f88138df8f3164ba822662a598b',
          '0x4cf776edf4d2297e58b6853e935413a2142ea3b6b824fde782055a337e74f009',
          '0x2d7280749bafd87a0ca852da403d508d283a44cf3ec2ccf42e0b02bc7c500d2a',
          '0x18a841c5b9feb1a4cb3914ec478baee4604072fe3b28eb2d283518ab7b422a73',
          '0xfcade293ecff285e2b72338aca627315cbf000e67db06ecb65c6b89c5fded5fa',
          '0x53580464f75900c9ae7e9da180b7a4b59d3dbdb5790732b07004b05aaedc5d77'
        ],
        transactionsRoot: '0xb8e0eac8e715ccdbb5c23e97172ace8222c8400db66be09d57323f68bbdb90e1',
        uncles: []
      }
    }
  ],
  eth_blockNumber: [
    {
      params: [],
      result: '0x0b'
    }
  ],
  eth_getTransactionByHash: [
    {
      params: ['0xca218db60aaad1a3e4d7ea815750e8bf44a89d967266c3662746f796800412cd'],
      result: {
        hash: '0xca218db60aaad1a3e4d7ea815750e8bf44a89d967266c3662746f796800412cd',
        nonce: '0x0',
        blockHash: '0x868b4c97d842aa758dfc97834088aee0687410365140adc4bebbc4c02b0eddc3',
        blockNumber: '0x01',
        transactionIndex: '0x00',
        from: '0x322d4959c911520645c0638204b42ce0689236e9',
        to: '0x635d7d148054b9471d79084b80b864a166956139',
        value: '0x2710',
        gas: '0x015f90',
        gasPrice: '0x04a817c800',
        input: '0x0'
      }
    }
  ],
  eth_getBalance: [
    {
      params: ['0x322d4959c911520645c0638204b42ce0689236e9', 'latest'],
      result: '0x56bb6f44fd0319250'
    }
  ],
  eth_getTransactionCount: [
    {
      params: ['0x322d4959c911520645c0638204b42ce0689236e9', 'latest'],
      result: '0xb'
    }
  ],
  eth_getTransactionReceipt: [
    {
      params: ['0x836a5e038d599454d576493f55c8000d4cce30460437b9e23718154e8f0e4298'],
      result: {
        transactionHash: '836a5e038d599454d576493f55c8000d4cce30460437b9e23718154e8f0e4298',
        transactionIndex: '0',
        blockHash: 'bd920a2956a550501eb71e5eb634dc0219eb0830580c45136160b917c948f981',
        blockNumber: 9,
        gasUsed: '5208',
        cumulativeGasUsed: '5208',
        contractAddress: null,
        logs: [],
        status: '1',
        logsBloom:
          '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'
      }
    }
  ],
  eth_sign: [
    {
      params: ['0x322d4959c911520645c0638204b42ce0689236e9', '0x6c697175616c697479'],
      result:
        '0x0f1f169ed203e0a8e053e060e0ba1a7da87cc37f4aa84c9329ba2a63974d0f5b5414b024d80e805418a6f315fd8185e74daaca63fc871c5568e9b18d2f899e4701'
    }
  ],
  eth_feeHistory: [
    {
      params: ['0xa', '0xcbd60a', [5]],
      result: {
        baseFeePerGas: [
          '0x133904493c',
          '0x15a00f6527',
          '0x1853f27899',
          '0x1a9d23d491',
          '0x1887294f56',
          '0x16596dfb37',
          '0x191b45a146',
          '0x1b01f56608',
          '0x17cfb36beb',
          '0x17bc4f292a',
          '0x15218b833f'
        ],
        gasUsedRatio: [
          0.9999319335330951,
          0.9999129332520711,
          0.8758495666666667,
          0.18650073333333334,
          0.1447094,
          0.9934727333333333,
          0.8028884127982359,
          0.026605366666666668,
          0.4872752,
          0.06107286234991531
        ],
        oldestBlock: '0xcbd601',
        reward: [
          ['0x59682f00'],
          ['0x59682f00'],
          ['0x3b9aca00'],
          ['0x47324e6f'],
          ['0x59682f00'],
          ['0x0'],
          ['0x540ae480'],
          ['0x59682f00'],
          ['0x59682f00'],
          ['0x3b9aca01']
        ]
      }
    }
  ]
}
