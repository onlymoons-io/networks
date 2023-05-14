import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 4,
  name: 'Ethereum Rinkeby (testnet)',
  shortName: 'Rinkeby',
  urlName: 'rinkeby',
  nativeCurrency: {
    address: '',
    name: 'Ethereum',
    symbol: 'ETH',
    decimals: 18,
  },
  explorerURL: 'https://rinkeby.etherscan.io/',
  rpcURL: 'https://rinkeby.infura.io/v3/cfeb072b8469447e889da944481d5874',
  isTestNet: true,
}

export default network
