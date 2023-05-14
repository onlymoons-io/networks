import {
  getChainIdByUrlName,
  getNetworkDataByChainId,
  getNetworkDataByUrlName,
} from '../util'

describe('getNetworkDataByChainId()', () => {
  it('returns the requested network', () => {
    const { chainId } = getNetworkDataByChainId(1)
    expect(chainId).toStrictEqual(1)
  })

  it('returns undefined with invalid network', () => {
    const network = getNetworkDataByChainId(-42378473298432)
    expect(network).toBeUndefined()
  })
})

describe('getNetworkDataByUrlName()', () => {
  it('returns the requested network', () => {
    const { chainId } = getNetworkDataByUrlName('eth')
    expect(chainId).toStrictEqual(1)
  })

  it('returns undefined with invalid network', () => {
    const network = getNetworkDataByUrlName('definitely-invalid')
    expect(network).toBeUndefined()
  })
})

describe('getChainIdByUrlName()', () => {
  it('returns the correct chain id', () => {
    const chainId = getChainIdByUrlName('eth')
    expect(chainId).toStrictEqual(1)
  })

  it('returns undefined with invalid network url name', () => {
    const chainId = getChainIdByUrlName('definitely-invalid')
    expect(chainId).toBeUndefined()
  })
})
