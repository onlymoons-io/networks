import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 12009,
  name: 'SatoshiChain',
  shortName: 'satoshichain',
  urlName: 'sats',
  nativeCurrency: {
    address: '0xf340aC507F8E9DD94f26a33B0Ecd8dF9fA85AAf4',
    name: 'Satoshi',
    symbol: 'SATS',
    decimals: 18,
  },
  explorerURL: 'https://satoshiscan.io',
  rpcURL: 'https://mainnet-rpc.satoshichain.io/',
}

export default network