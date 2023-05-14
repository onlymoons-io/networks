export interface TokenData {
  readonly address: string
  readonly name: string
  readonly symbol: string
  readonly decimals: number
}

export interface LiquidityPairUniV2 {
  readonly tokenAddress: string
  readonly stablePairAddress: string
}

export interface LiquidityPairUniV3 extends LiquidityPairUniV2 {
  readonly stablePairTokenId: number
}

export interface NetworkData {
  readonly chainId: number
  readonly name: string
  readonly shortName: string
  readonly urlName: string
  readonly nativeCurrency: TokenData
  readonly rpcURL: string
  readonly explorerURL: string
  readonly isTestNet?: boolean
  readonly liquidityPairsUniV2?: LiquidityPairUniV2[]
  readonly liquidityPairsUniV3?: LiquidityPairUniV3[]
}
