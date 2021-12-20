import React, { FC } from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

type propsType = any

export const Header2: FC<propsType> = () => {
  return (
    <div className="header2">
      <Container>
        <Nav variant="tabs" activeKey="trending">
          <Nav.Item>
            <Nav.Link href="https://github.com/explore">Explore</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/topics">Topics</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="trending" href="https://github.com/trending">
              Trending
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/collections">Collections</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/events">Events</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://github.com/sponsors/community">GitHub Sponsors</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button variant="outline-light" className="sponsors">
          GitHub Sponsors
        </Button>
      </Container>
    </div>
  )
}
