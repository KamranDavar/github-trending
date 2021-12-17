import React, { FC, useState } from 'react'
import { Banner, Filter, List } from '../components'
import { dateRange, programmingLanguages } from '../staticData'

type propsType = any

export const GithubTrendsDevelopers: FC<propsType> = () => {
  const [lang, setLang] = useState('javascript')
  const [range, setRange] = useState('daily')
  return (
    <div className="gh-trends">
      <Banner subTitle="These are the developers building the hot tools today." />
      <List
        activeBtn={1}
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
