import React, { FC } from 'react'
import { childrenType } from '../../interfaces'

export const Content: FC<childrenType> = ({ children }) => {
  return <div>{children}</div>
}
