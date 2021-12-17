import React, { FC } from 'react'
import Skeleton from 'react-loading-skeleton'
import Container from 'react-bootstrap/Container'
import ListGroup from 'react-bootstrap/ListGroup'

type propsType = any

export const ListSkeleton: FC<propsType> = () => {
  return (
    <Container className="list">
      <ListGroup>
        <ListGroup.Item>
          <Skeleton count={1} />{' '}
        </ListGroup.Item>
        <ListGroup.Item>
          <Skeleton count={1} />{' '}
        </ListGroup.Item>
        <ListGroup.Item>
          <Skeleton count={1} />{' '}
        </ListGroup.Item>
        <ListGroup.Item>
          <Skeleton count={1} />{' '}
        </ListGroup.Item>
        <ListGroup.Item>
          <Skeleton count={1} />{' '}
        </ListGroup.Item>
      </ListGroup>
    </Container>
  )
}
