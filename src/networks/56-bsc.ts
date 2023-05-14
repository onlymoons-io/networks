import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 56,
  name: 'Binance Smart Chain',
  shortName: 'BSC',
  urlName: 'bsc',
  nativeCurrency: {
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  explorerURL: 'https://bscscan.com/',
  rpcURL: 'https://bsc-dataseed.binance.org/',
  liquidityPairsUniV2: [
    {
      tokenAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      // pair w/ USDT on pancakeswap
      stablePairAddress: '0x16b9a82891338f9bA80E2D6970FddA79D1eb0daE',
    },
  ],
}

export default network
