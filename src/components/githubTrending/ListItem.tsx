import React, { FC } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import { AiOutlineBook, AiOutlineFork, AiOutlineStar } from 'react-icons/ai'
import Form from 'react-bootstrap/Form'
import DropdownButton from 'react-bootstrap/DropdownButton'

type propsType = {
  item: Record<string, any>
}

export const ListItem: FC<propsType> = ({ item }) => {
  return (
    <ListGroup.Item className="repo-list-item">
      <div className="top">
        <a href={item.url}>
          <h2 className="name">
            <AiOutlineBook />
            {item.username}/ {item.repositoryName}{' '}
          </h2>
        </a>
        <ButtonGroup className="buttons">
          <Button variant="light" size="sm">
            <AiOutlineStar /> Star
          </Button>
          <Dropdown>
            <DropdownButton variant="light" size="sm" title="  ">
              <Dropdown.Item>
                <Form.Check type="checkbox" />
                Future ideas
              </Dropdown.Item>
              <Dropdown.Item>
                <Form.Check type="checkbox" />
                My stack
              </Dropdown.Item>
              <Dropdown.Item>
                <Form.Check type="checkbox" />
                Inspiration
              </Dropdown.Item>
            </DropdownButton>
          </Dropdown>
        </ButtonGroup>
      </div>
      <div className="middle">{item.description}</div>
      <div className="bottom">
        <div className="left">
          <div className="flex-item">{item.language}</div>
          <div className="flex-item">
            {item.totalStars} <AiOutlineStar />
          </div>
          <div className="flex-item">
            {item.forks} <AiOutlineFork />
          </div>
          <div className="flex-item">
            Built by
            {item.builtBy.map((item: any, index: number) => (
              <a href={item.url} key={index}>
                <img src={item.avatar} alt={item.username} className="avatar" />
              </a>
            ))}
          </div>
        </div>
        <div className="right">
          <AiOutlineStar /> {item.starsSince} stars today
        </div>
      </div>
    </ListGroup.Item>
  )
}
