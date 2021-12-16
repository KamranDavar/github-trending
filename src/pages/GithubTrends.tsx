import React, { FC } from 'react'
import { Banner, List } from '../components'

type propsType = any

export const GithubTrends: FC<propsType> = () => {
  return (
    <div className="gh-trends">
      <Banner subTitle="See what the GitHub community is most excited about today." />
      <List />
    </div>
  )
}
