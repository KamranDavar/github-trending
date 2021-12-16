import huchenGhtClient from './huchenGithubTrending.client'

type langType = string | undefined
interface developersQueryParamsType {
  since?: string
  language?: langType
}

interface repositoriesQueryParamsType {
  since?: string
  spoken_language_code?: langType
  language?: langType
}

export const GithubTrendingService = {
  getDevelopers(queryParams: developersQueryParamsType) {
    return huchenGhtClient.get('/developers', { params: queryParams })
  },
  getRepositories(queryParams: repositoriesQueryParamsType) {
    return huchenGhtClient.get('/repositories', { params: queryParams })
  },
  getLanguages() {
    return huchenGhtClient.get('/languages')
  },
  getSpokenLanguages() {
    return huchenGhtClient.get('/spoken_languages')
  },
}
