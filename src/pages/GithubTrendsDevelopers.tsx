import React, { FC } from 'react'
import { Banner, Filter, List } from '../components'
import { dateRange, programmingLanguages } from '../utilities/staticData'
import { useQuery } from 'react-query'
import { GithubTrendingService } from '../services/githubTrending.service'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ListSkeleton } from '../components/ListSkeleton'

type propsType = Record<string, never>

export const GithubTrendsDevelopers: FC<propsType> = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()

  const language: string | undefined = useParams().language

  const onChangeFilter = (name: string, value: string) => {
    searchParams.set(name, value)
    setSearchParams(searchParams, { replace: true })
  }

  const programmingLanguage: string = language || ''
  const since: string = searchParams.get('since') || 'daily'

  const query = useQuery(
    ['Developers', programmingLanguage, since],
    () => GithubTrendingService.getDevelopers(programmingLanguage, { since }),
    { onError: (error: any) => toast.error(`Something went wrong: ${error.message}`) }
  )

  return (
    <div className="gh-trends">
      <Banner subTitle="These are the developers building the hot tools today." />
      {query.isLoading ? (
        <ListSkeleton />
      ) : (
        <List
          activeBtn={1}
          items={query.data?.data}
          filters={[
            <Filter
              key={0}
              value={programmingLanguage}
              setValue={(value: string) =>
                navigate(`/developers/${value}?${searchParams.toString()}`, { replace: true })
              }
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
      )}
    </div>
  )
}
