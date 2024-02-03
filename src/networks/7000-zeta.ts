import { NetworkData } from '../types'

const network: NetworkData = {
	chainId: 7000,
	name: 'ZetaChain',
	shortName: 'Zeta',
	urlName: 'zeta',
	nativeCurrency: {
		address: '0x5F0b1a82749cb4E2278EC87F8BF6B618dC71a8bf',
		name: 'Zeta',
		symbol: 'ZETA',
		decimals: 18,
	},
	explorerURL: 'https://zetachain.blockscout.com',
	rpcURL: 'https://zetachain-evm.blockpi.network/v1/rpc/public',
}

export default network