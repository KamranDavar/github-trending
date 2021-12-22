import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('Layout', () => {
  beforeAll(() => {
    render(<App />)
  })

  test('renders header1', () => {
    const header1Element = screen.getByTestId('header1')
    expect(header1Element).toBeInTheDocument()
  })
  test('renders header2', () => {
    const header2Element = screen.getByTestId('header2')
    expect(header2Element).toBeInTheDocument()
  })
  test('renders content', () => {
    const contentElement = screen.getByTestId('content')
    expect(contentElement).toBeInTheDocument()
  })
  test('renders footer', () => {
    const footerElement = screen.getByTestId('footer')
    expect(footerElement).toBeInTheDocument()
  })
})
