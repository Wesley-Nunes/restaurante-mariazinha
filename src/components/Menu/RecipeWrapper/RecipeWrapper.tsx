import React from 'react'
import { Flex } from '@chakra-ui/react'

import { recipeBaioDeDois, recipeMoqueca } from '../../../constants/img-url'
import RecipeInterface from '../../../interfaces/Recipe'
import Recipe from '../Recipe/Recipe'

const RecipeItems: RecipeInterface[] = [
  {
    imgSrc: recipeBaioDeDois,
    title: 'Baião de Dois',
    description: [
      'Arroz e feijão verde cozidos juntos.',
      'O prato acompanha queijo coalho, mandioca cozida e carne seca.',
      'A finalização é feita com cheiro verde e pimenta biquinho.'
    ]
  },
  {
    imgSrc: recipeMoqueca,
    title: 'Moqueca Baiana',
    description: [
      'Cozido de peixe e frutos do mar.',
      'O prato acompanha arroz branco.',
      'A finalização é feita com cheiro verde e pimenta dedo de moça.'
    ]
  }
]

const RecipeWrapper = (): JSX.Element => (
  <Flex
    direction='row'
    align='center'
    justify='center'
    wrap='wrap'
    gap='3'
    maxW='container.md'
    mt='8'
  >
    {RecipeItems.map(({ imgSrc, title, description }) => (
      <Recipe
        key={title}
        imgSrc={imgSrc}
        title={title}
        description={description}
      />
    ))}
  </Flex>
)

export default RecipeWrapper
