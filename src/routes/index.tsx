import React, { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { GithubTrends, GithubTrendsDevelopers } from '../pages'
import { ValidateParams } from './ValidateParams'
import { Layout } from '../components/layout'

type propsType = Record<string, never>

const myRouter: FC<propsType> = () => {
  const Trends = (
    <ValidateParams>
      <GithubTrends />
    </ValidateParams>
  )

  const DevelopersTrends = (
    <ValidateParams>
      <GithubTrendsDevelopers />
    </ValidateParams>
  )

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="developers">
          <Route path=":language" element={DevelopersTrends} />
          <Route index element={DevelopersTrends} />
        </Route>
        <Route path=":language" element={Trends} />
        <Route index element={Trends} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Route>
    </Routes>
  )
}
export default myRouter
