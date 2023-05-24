import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 592,
  name: 'Astar',
  shortName: 'Astar',
  urlName: 'astar',
  nativeCurrency: {
    address: '0xEcC867DE9F5090F55908Aaa1352950b9eed390cD',
    name: 'Astar',
    symbol: 'ASTR',
    decimals: 18,
  },
  explorerURL: 'https://blockscout.com/astar/',
  rpcURL: 'https://rpc.astar.network:8545',
  liquidityPairUniV2: {
    // pair w/ USDC on https://www.arthswap.org/
    stablePairAddress: '0xBB1290c1829007F440C771b37718FAbf309cd527',
  },
}

export default network
