import React, { FC, ReactNode } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'
import { Link as Link, useLocation } from 'react-router-dom'
import { ListItem } from './githubTrending/ListItem'
import { DeveloperListItem } from './githubTrendingDevelopers/ListItem'
import { ListSkeleton } from './ListSkeleton'

type propsType = {
  filters?: ReactNode[] | []
  activeBtn: number
  items: Record<string, any>[]
  loading: true | false
}

export const List: FC<propsType> = ({ filters, activeBtn, items, loading }) => {
  const location = useLocation()
  const isDeveloperMode = location.pathname.includes('developers')
  return (
    <div className="list">
      <Container>
        <ListGroup>
          <ListGroup.Item className="header">
            <ButtonGroup aria-label="Basic example">
              <Link to="/">
                <Button
                  variant={activeBtn === 0 ? 'primary' : 'outline-light'}
                  className="left"
                  size="sm"
                  data-testid="repo-link"
                >
                  Repositories
                </Button>
              </Link>
              <Link to="/developers">
                <Button
                  variant={activeBtn === 1 ? 'primary' : 'outline-light'}
                  className="right"
                  size="sm"
                  data-testid="dev-link"
                >
                  Developers
                </Button>
              </Link>
            </ButtonGroup>
            <div className="filters">{filters}</div>
          </ListGroup.Item>
          {loading ? (
            <ListSkeleton />
          ) : (
            items?.map((item: any, index: number) =>
              isDeveloperMode ? (
                <DeveloperListItem item={item} key={index} rowNumber={index + 1} />
              ) : (
                <ListItem item={item} key={index} />
              )
            )
          )}
        </ListGroup>
      </Container>
    </div>
  )
}
