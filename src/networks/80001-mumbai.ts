import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 43114,
  name: 'Polygon Mumbai (testnet)',
  shortName: 'Mumbai',
  urlName: 'mumbai',
  nativeCurrency: {
    address: '0x9c3c9283d3e44854697cd22d3faa240cfb032889',
    name: 'Matic',
    symbol: 'MATIC',
    decimals: 18,
  },
  explorerURL: 'https://mumbai.polygonscan.com/',
  rpcURL: 'https://rpc-mumbai.maticvigil.com/',
  isTestNet: true,
  liquidityPairUniV2: {
    // pair w/ DAI on https://legacy.quickswap.exchange/
    stablePairAddress: '0xc0ec4271d306f0ea4a70298c0243ea59a58bfd7f',
  },
}

export default network
