import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 245022934,
  name: 'Neon',
  shortName: 'Neon',
  urlName: 'neon',
  nativeCurrency: {
    address: '0x202c35e517fa803b537565c40f0a6965d7204609',
    name: 'Neon',
    symbol: 'NEON',
    decimals: 18,
  },
  explorerURL: 'https://neonscan.org/',
  rpcURL: 'https://neon-proxy-mainnet.solana.p2p.org',
  liquidityPairUniV2: {
    // pair w/ USDC on MoraSwap
    stablePairAddress: '0xea6b04272f9f62f997f666f07d3a974134f7ffb9',
  },
}

export default network
