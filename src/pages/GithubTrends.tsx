import React, { FC, useState } from 'react'
import { Banner, Filter, List } from '../components'
import { GithubTrendingService } from '../services/githubTrending.service'
import { useQuery } from 'react-query'
import { ListSkeleton } from '../components/ListSkeleton'

type propsType = any

export const GithubTrends: FC<propsType> = () => {
  const [queryParams, setQueryParams] = useState({})

  // const data = GithubTrendingService.getRepositories(queryParams)
  const query = useQuery(['Repositories', queryParams], () => GithubTrendingService.getRepositories(queryParams))
  console.log('render GithubTrends')
  return (
    <div className="gh-trends">
      <Banner subTitle="See what the GitHub community is most excited about today." />
      {query.isLoading ? (
        <ListSkeleton />
      ) : (
        <List filters={[<Filter key={0} />, <Filter key={1} />, <Filter key={2} />]} activeBtn={0} />
      )}
    </div>
  )
}
