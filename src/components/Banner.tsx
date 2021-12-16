import React, { FC } from 'react'
import Container from 'react-bootstrap/Container'

type propsType = {
  subTitle?: string | undefined
}

export const Banner: FC<propsType> = ({ subTitle }) => {
  return (
    <div className="banner">
      <Container>
        <h1>Trending</h1>
        <p className="subtitle">{subTitle}</p>
      </Container>
    </div>
  )
}
