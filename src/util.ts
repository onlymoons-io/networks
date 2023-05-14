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

/**
 *
 * @param targetUrlName url name of the network to look for
 * @return {@link NetworkData} matching `targetUrlName` or `undefined` if not found
 */
export const getNetworkDataByUrlName = (
  targetUrlName: string,
): NetworkData | undefined => {
  return networksArray.find(({ urlName }) => urlName === targetUrlName)
}

/**
 * Helper function to convert network url name into chain id
 *
 * @param targetUrlName url name of the network to look for
 * @return `chainId` for the network with matching `urlName` or `undefined` if not found
 */
export const getChainIdByUrlName = (
  targetUrlName: string,
): number | undefined => {
  const network = getNetworkDataByUrlName(targetUrlName)
  return network?.chainId
}
