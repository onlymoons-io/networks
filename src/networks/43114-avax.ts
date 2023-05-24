import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 43114,
  name: 'Avalanche',
  shortName: 'AVAX',
  urlName: 'avax',
  nativeCurrency: {
    address: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
    name: 'Avalanche',
    symbol: 'AVAX',
    decimals: 18,
  },
  explorerURL: 'https://snowtrace.io/',
  rpcURL: 'https://api.avax.network/ext/bc/C/rpc',
  liquidityPairUniV2: {
    // pair w/ USDC.e on https://traderjoexyz.com/home#/
    stablePairAddress: '0xA389f9430876455C36478DeEa9769B7Ca4E3DDB1',
  },
}

export default network
