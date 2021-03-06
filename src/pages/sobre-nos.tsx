import React from 'react'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Flex, Heading, Text } from '@chakra-ui/react'

import { brandName } from '../constants/names'

const SobreNos: NextPage = ({
  description
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Flex
    direction='column'
    align='center'
    justify='center'
    bg='background.cocoaBrown'
    h='container.md'
    gap='4'
    mt='16'
  >
    <Heading as='h3'>{brandName}</Heading>
    <Text maxW='50%' textAlign='justify'>
      {description[0]}
    </Text>
    <Text maxW='50%' textAlign='justify'>
      {description[1]}
    </Text>
    <Text maxW='50%' textAlign='justify'>
      {description[2]}
    </Text>
  </Flex>
)

export const getStaticProps: GetStaticProps = async () => {
  const description = [
    'Com mais de cinquenta anos de tradição, O Restaurante Mariazinha traz o melhor da gastronomia nordestina.',
    'Utilizando sempre alimentos frescos, produzidos localmente para trazer o melhor sabor da nossa terra.',
    'Venha nos conhecer na Rua: Lorem Ipsum, 42 - bairro: facere possimus | Doloribus - PI'
  ]

  return {
    props: {
      description
    }
  }
}

export default SobreNos
