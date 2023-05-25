import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 7700,
  name: 'Canto',
  shortName: 'Canto',
  urlName: 'canto',
  nativeCurrency: {
    address: '0x826551890Dc65655a0Aceca109aB11AbDbD7a07B',
    name: 'CANTO',
    symbol: 'CANTO',
    decimals: 18,
  },
  explorerURL: 'https://evm.explorer.canto.io/',
  rpcURL: 'https://canto.evm.chandrastation.com/ ',
  liquidityPairUniV2: {
    // pair w/ USDC on Slingshot
    stablePairAddress: '0x628851EF2aAd2ACC4c4dD2E13fdceEBA0e5106bA',
  },
}

export default network
