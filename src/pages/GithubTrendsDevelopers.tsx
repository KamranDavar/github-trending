import React, { FC } from 'react'
import { Banner, Filter, List } from '../components'
import { dateRange, programmingLanguages } from '../utilities/staticData'
import { useQuery } from 'react-query'
import { GithubTrendingService } from '../services/githubTrending.service'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'

type propsType = any

export const GithubTrendsDevelopers: FC<propsType> = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const { language } = useParams()

  const onChangeFilter = (name: string, value: string) => {
    searchParams.set(name, value)
    setSearchParams(searchParams, { replace: true })
  }

  const programmingLanguage = language || ''
  const since = searchParams.get('since') || 'daily'

  const query = useQuery(['Repositories', programmingLanguage, since], () =>
    GithubTrendingService.getRepositories(programmingLanguage, { since })
  )

  return (
    <div className="gh-trends">
      <Banner subTitle="These are the developers building the hot tools today." />
      <List
        activeBtn={1}
        items={query.data}
        filters={[
          <Filter
            key={0}
            value={programmingLanguage}
            setValue={(value: string) => navigate(`/${value}?${searchParams.toString()}`, { replace: true })}
            items={programmingLanguages}
            label="Language"
            hasInput={true}
          />,
          <Filter
            key={2}
            value={since}
            setValue={(value: string) => onChangeFilter('since', value)}
            items={dateRange}
            label="Date range"
            hasInput={false}
          />,
        ]}
      />
    </div>
  )
}
