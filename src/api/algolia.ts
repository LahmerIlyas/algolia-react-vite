import algoliasearch from 'algoliasearch'
import { AlgoliaConstants } from '~/constants/algolia'

export const searchClient = algoliasearch(AlgoliaConstants.appId, AlgoliaConstants.appKey)
