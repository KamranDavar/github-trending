import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import { AiOutlineGithub } from 'react-icons/ai'

type propsType = any

export const Footer: FC<propsType> = () => {
  return (
    <footer>
      <Container>
        <AiOutlineGithub />
        <span>© 2021 GitHub, Inc.</span>
        <a href="/#">Terms</a>
        <a href="/#">Privacy</a>
        <a href="/#">Security</a>
        <a href="/#">Status</a>
        <a href="/#">Docs</a>
        <a href="/#">Contact GitHub</a>
        <a href="/#">Pricing</a>
        <a href="/#">API</a>
        <a href="/#">Training</a>
        <a href="/#">Blog</a>
        <a href="/#">About</a>
      </Container>
    </footer>
  )
}
