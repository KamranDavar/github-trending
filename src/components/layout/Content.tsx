import React, { FC } from 'react'
import { childrenType } from '../../interfaces'

export const Content: FC<childrenType> = ({ children }) => {
  return <div data-testid="content">{children}</div>
}
