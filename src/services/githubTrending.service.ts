import ghtClient from './githubTrending.client'

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
    return ghtClient.get('/developers', { params: queryParams })
  },
  getRepositories(queryParams: repositoriesQueryParamsType) {
    return ghtClient.get('/repositories', { params: queryParams })
  },
  // getLanguages() {
  //   return ghtClient.get('/languages')
  // },
  // getSpokenLanguages() {
  //   return ghtClient.get('/spoken_languages')
  // },
}
