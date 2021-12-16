import http from './githubTrending.client'

interface developersQueryParamsType {
  since?: string
}

interface repositoriesQueryParamsType {
  since?: string
  spoken_language_code?: string
}

type langType = string | undefined

export const GithubTrendingService = {
  getDevelopers(lang: langType, queryParams: developersQueryParamsType) {
    const url = lang ? `/developers/${lang}` : '/developers'

    return http.get(url, { params: queryParams })
  },
  getRepositories(lang: langType, queryParams: repositoriesQueryParamsType) {
    const url = lang ? `/repositories/${lang}` : '/repositories'
    return http.get(url, { params: queryParams })
  },
}
