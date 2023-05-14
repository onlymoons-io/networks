import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 1,
  name: 'Ethereum',
  shortName: 'Ethereum',
  urlName: 'eth',
  nativeCurrency: {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    name: 'Eth',
    symbol: 'ETH',
    decimals: 18,
  },
  explorerURL: 'https://etherscan.io/',
  rpcURL: 'https://rpc.ankr.com/eth',
  liquidityPairsUniV2: [
    {
      tokenAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      // pair w/ USDC on uniswap v2
      stablePairAddress: '0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc',
    },
  ],
}

export default network
