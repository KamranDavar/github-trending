import React, { FC } from 'react'
import { Banner, List } from '../components'

type propsType = any

export const GithubTrendsDevelopers: FC<propsType> = () => {
  return (
    <div className="gh-trends">
      <Banner subTitle="These are the developers building the hot tools today." />
      <List />
    </div>
  )
}
