import React, { FC, useEffect, useState } from 'react'
import { Banner, Filter, List } from '../components'
import { dateRange, programmingLanguages } from '../utilities/staticData'
import { useQuery } from 'react-query'
import { GithubTrendingService } from '../services/githubTrending.service'
import { useNavigate, useSearchParams, useParams } from 'react-router-dom'

type propsType = any

export const GithubTrendsDevelopers: FC<propsType> = () => {
  const [lang, setLang] = useState('javascript')
  const [range, setRange] = useState('daily')
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const params = useParams()
  const newSearchParams = new URLSearchParams(searchParams)

  useEffect(() => {
    navigate(`${lang}`)
  }, [lang])
  useEffect(() => {
    setSearchParams({ since: range })
  }, [range])

  console.log('params:', params)
  console.log('searchParams:', searchParams)
  console.log('newSearchParams:', newSearchParams)
  const query = useQuery(['Repositories', lang, range], () =>
    GithubTrendingService.getRepositories(lang, { since: range })
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
            value={lang}
            setValue={setLang}
            items={programmingLanguages}
            label="Language"
            hasInput={true}
          />,
          <Filter key={2} value={range} setValue={setRange} items={dateRange} label="Date range" hasInput={false} />,
        ]}
      />
    </div>
  )
}
