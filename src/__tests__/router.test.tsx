import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import App from '../App'

test('app navigating', () => {
  render(<App />)
  expect(screen.getByTestId('repo-list')).toBeInTheDocument()
  userEvent.click(screen.getByTestId('dev-link'))
  expect(screen.getByTestId('dev-list')).toBeInTheDocument()
  userEvent.click(screen.getByTestId('repo-link'))
  expect(screen.getByTestId('repo-list')).toBeInTheDocument()
})
