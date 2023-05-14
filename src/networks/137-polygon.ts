import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 137,
  name: 'Polygon',
  shortName: 'Polygon',
  urlName: 'polygon',
  nativeCurrency: {
    address: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
  },
  explorerURL: 'https://polygonscan.com/',
  rpcURL: 'https://polygon-rpc.com/',
  liquidityPairsUniV2: [
    // WMATIC
    {
      tokenAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      // pair w/ USDC on quickswap
      stablePairAddress: '0x6e7a5FAFcec6BB1e78bAE2A1F0B612012BF14827',
    },
  ],
}

export default network
