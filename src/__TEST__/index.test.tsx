import React from 'react'
import { render, screen } from '@testing-library/react'

import Home from '../pages/index'

describe('Home page', () => {
  it('should render a title', () => {
    render(<Home />)

    const title = screen.getByRole('heading')

    expect(title).toBeInTheDocument()
  })
})
