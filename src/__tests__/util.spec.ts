import { getNetworkDataByChainId } from '../util'

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
