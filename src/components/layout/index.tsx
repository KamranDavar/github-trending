import React from 'react'
import { Header1 } from './Header1'
import { Header2 } from './Header2'
import { Content } from './Content'
import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'

export function Layout() {
  return (
    <>
      <Header1 />
      <Header2 />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </>
  )
}
