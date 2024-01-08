import { NetworkData } from '../types'

const network: NetworkData = {
	chainId: 169,
	name: 'Manta',
	shortName: 'Manta',
	urlName: 'manta',
	nativeCurrency: {
		address: '0x0Dc808adcE2099A9F62AA87D9670745AbA741746',
		name: 'Ethereum',
		symbol: 'ETH',
		decimals: 18,
	},
	explorerURL: 'https://pacific-explorer.manta.network/',
	rpcURL: 'https://pacific-rpc.manta.network/http',
	liquidityPairUniV2: {
			// pair w/ USDC on Quickswap
			stablePairAddress: '0xb73603C5d87fA094B7314C74ACE2e64D165016fb',
		},
}

export default network
