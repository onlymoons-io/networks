import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 1030,
  name: 'Conflux',
  shortName: 'Conflux',
  urlName: 'conflux',
  nativeCurrency: {
    address: '0x14b2D3bC65e74DAE1030EAFd8ac30c533c976A9b',
    name: 'Conflux',
    symbol: 'CFX',
    decimals: 18,
  },
  explorerURL: 'https://www.confluxscan.io/',
  rpcURL: 'https://evm.confluxrpc.com',
  liquidityPairUniV2: {
    // pair w/ USDC on https://swappi.io/
    stablePairAddress: '0x6963EfED0aB40F6C3d7BdA44A05dcf1437C44372',
  },
}

export default network
