import React, { FC } from 'react'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

type propsType = any

export const Header2: FC<propsType> = () => {
  return (
    <div className="header2">
      <Container>
        <Nav variant="tabs">
          <Nav.Item>
            <Nav.Link href="/home">Explore</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Topics</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Collections</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">Events</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button variant="outline-light" className="sponsors">
          GitHub Sponsors
        </Button>
      </Container>
    </div>
  )
}
