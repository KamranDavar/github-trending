import React, { FC } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

type propsType = {
  item: any
}

export const ListItem: FC<propsType> = ({ item }) => {
  return (
    <ListGroup.Item className="dev-list-item">
      <a href={item.url}>
        <h2 className="name">
          {item.username}/ {item.repositoryName}{' '}
        </h2>
      </a>
    </ListGroup.Item>
  )
}
