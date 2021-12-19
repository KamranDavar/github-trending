import React, { FC, useEffect, useState } from 'react'
import { Banner, Filter, List } from '../components'
import { GithubTrendingService } from '../services/githubTrending.service'
import { useQuery } from 'react-query'
import { ListSkeleton } from '../components/ListSkeleton'
import { dateRange, programmingLanguages, spokenLanguages } from '../utilities/staticData'
import { useLocation, useNavigate,  useSearchParams } from 'react-router-dom'

type propsType = any

export const GithubTrends: FC<propsType> = () => {
  const [lang, setLang] = useState('')
  const [sLang, setSLang] = useState('en')
  const [range, setRange] = useState('daily')
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const location = useLocation()

  useEffect(() => {
    lang !== '' ? navigate(`/${lang}${location.search}`) : navigate(`/${location.search}`)
  }, [lang])
  console.log(searchParams.values())
  useEffect(() => {
    searchParams.set('spoken_language_code', sLang)
    setSearchParams(searchParams)
  }, [sLang])
  useEffect(() => {
    searchParams.set('since', range)
    setSearchParams(searchParams)
  }, [range])

  const sLanguageFromURL = searchParams.get('spoken_language_code')
  const rangeFromURL = searchParams.get('since')
  const query = useQuery(['Repositories', lang, sLanguageFromURL, rangeFromURL], () =>
    GithubTrendingService.getRepositories(lang, {
      spoken_language_code: sLanguageFromURL,
      since: rangeFromURL,
    })
  )
  console.log(searchParams)
  return (
    <div className="gh-trends">
      <Banner subTitle="See what the GitHub community is most excited about today." />
      {query.isLoading ? (
        <ListSkeleton />
      ) : (
        <List
          items={query.data}
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
