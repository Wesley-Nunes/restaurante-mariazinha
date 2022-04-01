import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../pages/menu'

describe('Home page', () => {
  xit('should render a title', () => {
    render(<Home />)

    const title = screen.getByRole('heading')

    expect(title).toBeInTheDocument()
  })
})
