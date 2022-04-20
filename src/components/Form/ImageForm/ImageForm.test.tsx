import React from 'react'
import { render, screen } from '@testing-library/react'

import ImageForm from './ImageForm'

describe('ImageForm Component', () => {
  it('should render a image', () => {
    render(<ImageForm />)

    const image = screen.getByRole('img', { name: /background/i })

    expect(image).toBeVisible()
    expect(image).toBeInTheDocument()
  })
})
