import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 420666,
  name: 'KeKchain Testnet (testnet)',
  shortName: 'KeKchain',
  urlName: 'kektest',
  nativeCurrency: {
    address: '0xA888a7A2dc73efdb5705106a216f068e939A2693',
    name: 'Kek',
    symbol: 'KEK',
    decimals: 18,
  },
  explorerURL: 'https://testnet-explorer.kekchain.com/',
  rpcURL: 'https://testnet.kekchain.com',
  isTestNet: true,
}

export default network
