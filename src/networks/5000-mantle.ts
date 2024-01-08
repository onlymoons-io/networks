import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 5000,
  name: 'Mantle',
  shortName: 'mantle',
  urlName: 'mantle',
  nativeCurrency: {
    address: '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8',
    name: 'Mantle',
    symbol: 'MTL',
    decimals: 18,
  },
  explorerURL: 'https://explorer.mantle.xyz/',
  rpcURL: 'https://rpc.mantle.xyz/',
  liquidityPairUniV2: {
    // pair w/ USDT on 0
    stablePairAddress: '0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE',
  },
}

export default network
