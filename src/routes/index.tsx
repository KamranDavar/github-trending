import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content, Footer, Header1, Header2 } from '../components'
import { GithubTrends } from '../pages'

type propsType = any

const Router: FC<propsType> = () => {
  return (
    <BrowserRouter>
      <Header1 />
      <Header2 />
      <Content>
        <Routes>
          <Route path="/" element={<GithubTrends />} />
          {/*<Route element={<Error404 />} />*/}
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  )
}
export default Router
