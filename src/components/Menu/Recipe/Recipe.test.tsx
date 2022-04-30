import React from 'react'
import { render, screen } from '@testing-library/react'

import { recipeBaioDeDois } from '../../../constants/img-url'
import RecipeInterface from '../../../interfaces/Recipe'

import Recipe from './Recipe'

const recipe: RecipeInterface = {
  imgSrc: recipeBaioDeDois,
  title: 'Baião de Dois',
  description: [
    'Arroz e feijão verde cozidos juntos.',
    'O prato acompanha queijo coalho, mandioca cozida e carne seca.',
    'A finalização é feita com cheiro verde e pimenta biquinho.'
  ]
}

describe('Recipe Component', () => {
  beforeEach(() => {
    render(
      <Recipe
        imgSrc={recipe.imgSrc}
        title={recipe.title}
        description={recipe.description}
      />
    )
  })

  it('should render a image', () => {
    const image = screen.getByRole('img', {
      name: /ícone da receita baião de dois/i
    })

    expect(image).toBeVisible()
    expect(image).toBeInTheDocument()
    expect(image).toHaveAccessibleName(/ícone da receita baião de dois/i)
  })

  it('should render a title', () => {
    const title = screen.getByRole('heading', { name: /baião de dois/i })

    expect(title).toBeVisible()
    expect(title).toBeInTheDocument()
    expect(title).toHaveTextContent(/baião de dois/i)
  })

  it('should render a description', () => {
    const description = screen.getByTestId('description')

    expect(description).toBeVisible()
    expect(description).toBeInTheDocument()
    expect(description).toHaveTextContent(
      /arroz e feijão verde cozidos juntos./i
    )
    expect(description).toHaveTextContent(
      /o prato acompanha queijo coalho, mandioca cozida e carne seca./i
    )
    expect(description).toHaveTextContent(
      /a finalização é feita com cheiro verde e pimenta biquinho./i
    )
  })
})
