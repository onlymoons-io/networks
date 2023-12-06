import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 2000,
  name: 'Dogechain',
  shortName: 'Dogechain',
  urlName: 'dogechain',
  nativeCurrency: {
    address: '0xB7ddC6414bf4F5515b52D8BdD69973Ae205ff101',
    name: 'Doge',
    symbol: 'DOGE',
    decimals: 18,
  },
  explorerURL: 'https://explorer.dogechain.dog/',
  rpcURL: 'https://rpc03-sg.dogechain.dog',
  liquidityPairUniV2: {
    // pair w/ USDC on https://dogeswap.org/
    stablePairAddress: '0xa8E4040B7085A937b278e7aa95C36e9044CC6D9c',
  },
}

export default network
