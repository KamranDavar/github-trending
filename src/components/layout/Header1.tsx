import React, { FC } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { AiOutlineBell, AiOutlineGithub, AiOutlinePlus, AiOutlineMenu } from 'react-icons/ai'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Nav from 'react-bootstrap/Nav'

type propsType = any

export const Header1: FC<propsType> = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" className="header1">
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <AiOutlineMenu />
      </Navbar.Toggle>

      <Navbar.Brand href="https://github.com/">
        <AiOutlineGithub />
      </Navbar.Brand>
      <Navbar.Text className="right-wrapper">
        <Button variant="dark">
          <AiOutlineBell className="bell" />
        </Button>
        <DropdownButton id="dropdown-basic-button" title={<AiOutlinePlus />} variant="dark">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton
          id="dropdown-basic-button"
          title={
            <img src="https://avatars.githubusercontent.com/u/54438390?s=40&amp;v=4" alt="avatar" className="avatar" />
          }
          variant="dark"
        >
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </Navbar.Text>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Form className="d-flex">
          <FormControl type="search" placeholder="Search or jump to..." className="me-2" aria-label="Search" />
        </Form>
        <Nav className="me-auto">
          <Nav.Link href="https://github.com/pulls">Pull requests</Nav.Link>
          <Nav.Link href="#pricing">Issues</Nav.Link>
          <Nav.Link href="#pricing">Marketplace</Nav.Link>
          <Nav.Link href="#pricing">Explore</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
