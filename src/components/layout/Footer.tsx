import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'
import { AiOutlineGithub } from 'react-icons/ai'

type propsType = Record<string, never>

export const Footer: FC<propsType> = () => {
  return (
    <footer>
      <Container>
        <AiOutlineGithub />
        <span>© 2021 GitHub, Inc.</span>
        <a href="https://github.com/en/github/site-policy/github-terms-of-service">Terms</a>
        <a href="https://github.com/en/github/site-policy/github-privacy-statement">Privacy</a>
        <a href="https://github.com/security">Security</a>
        <a href="https://www.githubstatus.com/">Status</a>
        <a href="https://docs.github.com/en">Docs</a>
        <a href="https://github.com/?tags=dotcom-footer">Contact GitHub</a>
        <a href="https://github.com/pricing">Pricing</a>
        <a href="https://docs.github.com/en">API</a>
        <a href="https://services.github.com/">Training</a>
        <a href="https://github.blog/">Blog</a>
        <a href="https://github.com/about">About</a>
      </Container>
    </footer>
  )
}
