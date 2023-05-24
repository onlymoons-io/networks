import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 1088,
  name: 'Metis Andromeda',
  shortName: 'Metis',
  urlName: 'metis',
  nativeCurrency: {
    address: '0xDeadDeAddeAddEAddeadDEaDDEAdDeaDDeAD0000',
    name: 'Metis',
    symbol: 'METIS',
    decimals: 18,
  },
  explorerURL: 'https://andromeda-explorer.metis.io/',
  rpcURL: 'https://andromeda.metis.io/?owner=1088',
  liquidityPairUniV2: {
    // pair w/ m.USDT on tethys
    stablePairAddress: '0x8121113eB9952086deC3113690Af0538BB5506fd',
  },
}

export default network
