import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 122,
  name: 'Fuse',
  shortName: 'Fuse',
  urlName: 'fuse',
  nativeCurrency: {
    address: '0x0BE9e53fd7EDaC9F859882AfdDa116645287C629',
    name: 'Fuse',
    symbol: 'FUSE',
    decimals: 18,
  },
  explorerURL: 'https://explorer.fuse.io/',
  rpcURL: 'https://rpc.fuse.io/',
  liquidityPairUniV2: {
    // WFUSE / USDT lp on app.fuse.fi
    stablePairAddress: '0x8a81984D2DF356B49d182910bbB935897450d7e8',
  },
}

export default network
