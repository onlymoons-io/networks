import { NetworkData } from '../types'

const network: NetworkData = {
  chainId: 97,
  name: 'Binance Smart Chain (testnet)',
  shortName: 'BSC (testnet)',
  urlName: 'bsctest',
  nativeCurrency: {
    address: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  explorerURL: 'https://testnet.bscscan.com/',
  rpcURL: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
  isTestNet: true,
  liquidityPairsUniV2: [
    {
      tokenAddress: '0xae13d989dac2f0debff460ac112a837c89baa7cd',
      // pair w/ USDT on https://pancake.kiemtienonline360.com/
      stablePairAddress: '0xf855e52ecc8b3b795ac289f85f6fd7a99883492b',
    },
  ],
}

export default network
