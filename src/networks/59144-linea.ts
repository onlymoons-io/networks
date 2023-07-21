import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 59144,
  name: 'Linea',
  shortName: 'linea',
  urlName: 'linea',
  nativeCurrency: {
    address: '0xe5D7C2a44FfDDf6b295A15c148167daaAf5Cf34f',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  explorerURL: 'https://lineascan.build/',
  rpcURL: 'https://rpc.linea.build/',
  liquidityPairUniV2: {
    // pair w/ BUSD on Horizon Dex
    stablePairAddress: '0x7d43AABC515C356145049227CeE54B608342c0ad',
  },
}

export default network
