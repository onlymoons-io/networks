import { NetworkData } from '../types'

const network: NetworkData = {
	chainId: 42161,
	name: 'Arbitrum',
	shortName: 'Arbitrum',
	urlName: 'arbitrum',
	nativeCurrency: {
		address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
		name: 'Eth',
		symbol: 'ETH',
		decimals: 18,
	},
	explorerURL: 'https://arbiscan.io/',
	rpcURL: 'https://arb1.arbitrum.io/rpc',
	liquidityPairUniV2: {
			// pair w/ USDC on https://uniswap.org/
			stablePairAddress: '0xC31E54c7a869B9FcBEcc14363CF510d1c41fa443',
		},
}

export default network