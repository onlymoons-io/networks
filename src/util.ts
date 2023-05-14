import { networks } from './'
import { NetworkData } from './types'

const networksArray = Object.values(networks)

/**
 *
 * @param targetChainId chain id of the network to look for
 * @return {@link NetworkData} matching `targetChainId` or `undefined` if not found
 */
export const getNetworkDataByChainId = (
  targetChainId: number,
): NetworkData | undefined => {
  return networksArray.find(({ chainId }) => chainId === targetChainId)
}
