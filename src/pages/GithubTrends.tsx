import React, { FC } from 'react'
import { Banner, Filter, List } from '../components'

type propsType = any

export const GithubTrends: FC<propsType> = () => {
  return (
    <div className="gh-trends">
      <Banner subTitle="See what the GitHub community is most excited about today." />
      <List filters={[<Filter key={0} />, <Filter key={1} />, <Filter key={2} />]} activeBtn={0} />
    </div>
  )
}
