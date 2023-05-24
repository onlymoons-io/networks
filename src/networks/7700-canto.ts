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
    stablePairAddress: '0xb00626F6237e065a57f2AFAD20cB4Ec927030759',
  },
}

export default network
