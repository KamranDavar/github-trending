import React, { FC, useState } from 'react'
import { Banner, Filter, List } from '../components'
import { GithubTrendingService } from '../services/githubTrending.service'
import { useQuery } from 'react-query'
import { ListSkeleton } from '../components/ListSkeleton'
import { dateRange, programmingLanguages, spokenLanguages } from '../staticData'

type propsType = any

export const GithubTrends: FC<propsType> = () => {
  const [lang, setLang] = useState('javascript')
  const [sLang, setSLang] = useState('fa')
  const [range, setRange] = useState('daily')

  const query = useQuery(['Repositories', lang, sLang, range], () =>
    GithubTrendingService.getRepositories({
      language: lang,
      spoken_language_code: sLang,
      since: range,
    })
  )
  console.log('render GithubTrends')
  return (
    <div className="gh-trends">
      <Banner subTitle="See what the GitHub community is most excited about today." />
      {query.isLoading ? (
        <ListSkeleton />
      ) : (
        <List
          filters={[
            <Filter
              key={1}
              value={sLang}
              setValue={setSLang}
              items={spokenLanguages}
              label="Spoken Language"
              hasInput={true}
            />,
            <Filter
              key={0}
              value={lang}
              setValue={setLang}
              items={programmingLanguages}
              label="Language"
              hasInput={true}
            />,

            <Filter key={2} value={range} setValue={setRange} items={dateRange} label="Date range" hasInput={false} />,
          ]}
          activeBtn={0}
        />
      )}
    </div>
  )
}
