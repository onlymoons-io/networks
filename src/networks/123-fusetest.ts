import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 123,
  name: 'Fuse Spark (testnet)',
  shortName: 'Fuse (testnet)',
  urlName: 'fusetest',
  nativeCurrency: {
    address: '-',
    name: 'Spark',
    symbol: 'SPARK',
    decimals: 18,
  },
  explorerURL: 'https://explorer.fusespark.io/',
  rpcURL: 'https://rpc.fusespark.io/',
  isTestNet: true,
}

export default network
