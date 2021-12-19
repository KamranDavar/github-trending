import React, { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Content, Footer, Header1, Header2 } from '../components'
import { GithubTrends, GithubTrendsDevelopers } from '../pages'

type propsType = any

const Router: FC<propsType> = () => {
  return (
    <BrowserRouter>
      <Header1 />
      <Header2 />
      <Content>
        <Routes>
          <Route path="/" element={<GithubTrends />}>
            <Route path="/:language" element={<GithubTrends />} />
          </Route>
          <Route path="/developers" element={<GithubTrendsDevelopers />}>
            <Route path="/developers/:language" element={<GithubTrendsDevelopers />} />
          </Route>
          <Route path="/*" element={<h1>Not Found</h1>} />
        </Routes>
      </Content>
      <Footer />
    </BrowserRouter>
  )
}
export default Router
