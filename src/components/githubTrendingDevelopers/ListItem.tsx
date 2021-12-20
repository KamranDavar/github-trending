import React, { FC } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { AiOutlineFire, AiOutlineBook } from 'react-icons/ai'
import Button from 'react-bootstrap/Button'

type propsType = {
  item: any
  key: number
  rowNumber: number
}

export const DeveloperListItem: FC<propsType> = ({ item, rowNumber }) => {
  return (
    <ListGroup.Item className="dev-list-item">
      <div className="row-number">{rowNumber}</div>
      <div className="avatar">
        <img src={item.avatar} alt={item.name} />
      </div>
      <div className="others-container">
        <div className="name">
          <a href={item.url}>
            <h2>{item.name}</h2>
          </a>
          <span className="username">{item.username}</span>
        </div>
        <div className="data">
          <AiOutlineFire className="fire" /> POPULAR REPO
          <h4>
            <AiOutlineBook />
            <a href={item.popularRepository.url}>{item.popularRepository.repositoryName}</a>
          </h4>
          <p>{item.popularRepository.description}</p>
        </div>
        <div className="actions">
          <Button variant="light" size="sm">
            Follow
          </Button>
        </div>
      </div>
    </ListGroup.Item>
  )
}
