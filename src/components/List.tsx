import React, { FC } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

type propsType = any

export const List: FC<propsType> = () => {
  return (
    <div className="list">
      <Container>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  )
}
