import React, { FC } from 'react'
import { Banner, Filter, List } from '../components'
import { GithubTrendingService } from '../services/githubTrending.service'
import { useQuery } from 'react-query'
import { dateRange, programmingLanguages, spokenLanguages } from '../utilities/staticData'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'

type propsType = Record<string, never>

export const GithubTrends: FC<propsType> = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const language: string | undefined = useParams().language

  const onChangeFilter = (name: string, value: string) => {
    searchParams.set(name, value)
    setSearchParams(searchParams, { replace: true })
  }

  const programmingLanguage: string = language || ''
  const spokenLanguage: string = searchParams.get('spoken_language_code') || 'en'
  const since: string = searchParams.get('since') || 'daily'

  const query = useQuery(
    ['Repositories', programmingLanguage, spokenLanguage, since],
    () =>
      GithubTrendingService.getRepositories(programmingLanguage, {
        spoken_language_code: spokenLanguage,
        since: since,
      }),
    { onError: (error: any) => toast.error(`Something went wrong: ${error.message}`) }
  )

  return (
    <div className="gh-trends">
      <Banner subTitle="See what the GitHub community is most excited about today." />

      <List
        items={query.data?.data}
        loading={query.isLoading}
        filters={[
          <Filter
            key="spoken-language"
            value={spokenLanguage}
            setValue={(value: string) => onChangeFilter('spoken_language_code', value)}
            items={spokenLanguages}
            label="Spoken Language"
          />,
          <Filter
            key="language"
            value={programmingLanguage}
            setValue={(value: string) => navigate(`/${value}?${searchParams.toString()}`, { replace: true })}
            items={programmingLanguages}
            label="Language"
          />,
          <Filter
            key="date-range"
            value={since}
            setValue={(value: string) => onChangeFilter('since', value)}
            items={dateRange}
            label="Date range"
            hasInput={false}
          />,
        ]}
        activeBtn={0}
        data-testid="repo-list"
      />
    </div>
  )
}
