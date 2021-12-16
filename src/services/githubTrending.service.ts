import ghtClient from './githubTrending.client'
import huchenmeGhtClient from './huchenmeGithubTrending.client'

interface developersQueryParamsType {
  since?: string
}

interface repositoriesQueryParamsType {
  since?: string
  spoken_language_code?: string | undefined
}

type langType = string | undefined

export const GithubTrendingService = {
  getDevelopers(lang: langType, queryParams: developersQueryParamsType) {
    const url = lang ? `/developers/${lang}` : '/developers'

    return ghtClient.get(url, { params: queryParams })
  },
  getRepositories(lang: langType, queryParams: repositoriesQueryParamsType) {
    const url = lang ? `/repositories/${lang}` : '/repositories'
    return ghtClient.get(url, { params: queryParams })
  },
  getLang() {
    return huchenmeGhtClient.get('/languages')
  },
  getSpokenLang() {
    return huchenmeGhtClient.get('/spoken_languages')
  },
}
