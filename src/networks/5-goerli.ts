import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 5,
  name: 'Goerli',
  shortName: 'goerli',
  urlName: 'goerli',
  nativeCurrency: {
    address: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  explorerURL: 'https://goerli.etherscan.io/',
  rpcURL: 'https://rpc.ankr.com/eth_goerli/',
}

export default network
