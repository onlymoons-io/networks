import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 2001,
  name: 'Milkomeda',
  shortName: 'Milkomeda',
  urlName: 'milkomeda',
  nativeCurrency: {
    address: '0xAE83571000aF4499798d1e3b0fA0070EB3A3E3F9',
    name: 'Wrapped ADA',
    symbol: 'WADA',
    decimals: 18,
  },
  explorerURL: 'https://explorer-mainnet-cardano-evm.c1.milkomeda.com/',
  rpcURL: 'https://rpc-mainnet-cardano-evm.c1.milkomeda.com',
  liquidityPairUniV2: {
    stablePairAddress: '0x0B46AD9e9B749c9D500C81a4975B1599a872Ebe8',
  },
}

export default network
