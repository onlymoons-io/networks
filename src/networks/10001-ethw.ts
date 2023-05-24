import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 10001,
  name: 'EthereumPoW',
  shortName: 'EthW',
  urlName: 'ethw',
  nativeCurrency: {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    name: 'ETHW-mainnet',
    symbol: 'ETHW',
    decimals: 18,
  },
  explorerURL: 'https://www.oklink.com/en/ethw/',
  rpcURL: 'https://mainnet.ethereumpow.org',
}

export default network
