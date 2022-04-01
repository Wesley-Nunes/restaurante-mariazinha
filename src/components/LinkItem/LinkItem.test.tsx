import React from 'react'
import { render, screen } from '@testing-library/react'

import LinkItem from './LinkItem'

const navbarItems = [
  { href: '/menu', name: 'Menu' },
  { href: '/reserva', name: 'Reserva' },
  { href: '/sobre-nos', name: 'Sobre Nós' }
]

describe('LinkItem Component', () => {
  it('should render a link item with name: "Menu"', () => {
    render(
      <LinkItem href={navbarItems[0].href}>
        <p>{navbarItems[0].name}</p>
      </LinkItem>
    )

    const menuItem = screen.getByRole('link', {
      name: /menu/i
    })

    expect(menuItem).toBeVisible()
    expect(menuItem).toBeInTheDocument()
    expect(menuItem).toHaveTextContent('Menu')
    expect(menuItem.getAttribute('href')).toBe('/menu')
  })
  it('should render a link item with name: "Reserva"', () => {
    render(
      <LinkItem href={navbarItems[1].href}>
        <p>{navbarItems[1].name}</p>
      </LinkItem>
    )

    const menuItem = screen.getByRole('link', {
      name: /reserva/i
    })

    expect(menuItem).toBeVisible()
    expect(menuItem).toBeInTheDocument()
    expect(menuItem).toHaveTextContent('Reserva')
    expect(menuItem.getAttribute('href')).toBe('/reserva')
  })
  it('should render a link item with name: "Sobre Nós"', () => {
    render(
      <LinkItem href={navbarItems[2].href}>
        <p>{navbarItems[2].name}</p>
      </LinkItem>
    )

    const menuItem = screen.getByRole('link', {
      name: /sobre nós/i
    })

    expect(menuItem).toBeVisible()
    expect(menuItem).toBeInTheDocument()
    expect(menuItem).toHaveTextContent('Sobre Nós')
    expect(menuItem.getAttribute('href')).toBe('/sobre-nos')
  })
})
