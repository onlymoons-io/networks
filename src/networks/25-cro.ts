import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 25,
  name: 'Cronos',
  shortName: 'CRO',
  urlName: 'cro',
  nativeCurrency: {
    address: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
    name: 'Cronos',
    symbol: 'CRO',
    decimals: 18,
  },
  explorerURL: 'https://cronoscan.com/',
  rpcURL: 'https://evm-cronos.crypto.org/',
  liquidityPairsUniV2: [
    {
      tokenAddress: '0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23',
      // pair w/ USDC on https://mm.finance/
      stablePairAddress: '0xa68466208F1A3Eb21650320D2520ee8eBA5ba623',
    },
  ],
}

export default network
