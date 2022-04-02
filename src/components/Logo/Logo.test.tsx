import React from 'react'
import { render, screen } from '@testing-library/react'

import Logo from './Logo'

describe('Logo Component', () => {
  beforeEach(() => render(<Logo />))

  it('should render a logo image', () => {
    const logo = screen.getByRole('img', { name: /logo/i })

    expect(logo).toBeVisible()
    expect(logo).toBeInTheDocument()
  })

  it('should render the logo text: "Restaurante Mariazinha"', () => {
    const logoText = screen.getByText(/restaurante mariazinha/i)

    expect(logoText).toBeVisible()
    expect(logoText).toBeInTheDocument()
    expect(logoText).toHaveTextContent('Restaurante Mariazinha')
  })

  it('should the logo link has the href value of "/menu"', () => {
    const logoLink = screen.getByRole('link', {
      name: /logo restaurante mariazinha/i
    })

    expect(logoLink.getAttribute('href')).toBe('/menu')
  })
})
