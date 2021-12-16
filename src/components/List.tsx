import React, { FC, ReactNode } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

type propsType = {
  filters?: ReactNode[] | []
  activeBtn: number
}

export const List: FC<propsType> = ({ filters, activeBtn }) => {
  return (
    <div className="list">
      <Container>
        <ListGroup>
          <ListGroup.Item className="header">
            <ButtonGroup aria-label="Basic example">
              <Button variant={activeBtn === 0 ? 'primary' : 'outline-dark'}>Repositories</Button>
              <Button variant={activeBtn === 1 ? 'primary' : 'outline-dark'}>Developers</Button>
            </ButtonGroup>
            <div className="filters">{filters}</div>
          </ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Container>
    </div>
  )
}
