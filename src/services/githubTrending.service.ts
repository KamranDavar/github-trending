import ghtClient from './githubTrending.client'

type langType = string | undefined | null

interface developersQueryParamsType {
  since?: langType
  language?: langType
}

interface repositoriesQueryParamsType {
  since?: langType
  spoken_language_code?: langType
  language?: langType
}

export const GithubTrendingService = {
  getDevelopers(lang: langType, queryParams: developersQueryParamsType) {
    const url = lang ? '/developers/' + lang : '/developers/'
    return ghtClient.get(url, { params: queryParams })
  },
  getRepositories(lang: langType, queryParams: repositoriesQueryParamsType) {
    const url = lang ? '/repositories/' + lang : '/repositories/'
    return ghtClient.get(url, { params: queryParams })
  },
  // getLanguages() {
  //   return ghtClient.get('/languages')
  // },
  // getSpokenLanguages() {
  //   return ghtClient.get('/spoken_languages')
  // },
}
