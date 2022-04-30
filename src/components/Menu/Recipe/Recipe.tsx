import React from 'react'
import Image from 'next/image'
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react'

import Recipe from '../../../interfaces/Recipe'

const Recipe = ({ imgSrc, title, description }: Recipe): JSX.Element => (
  <Flex
    direction='column'
    align='center'
    justify='space-evenly'
    w='360px'
    h='640px'
    bg='background.darkBrown'
    border='2px'
    borderColor='primary.livelyYellow'
    borderRadius='8px'
  >
    <Box width='192' height='192' borderRadius='full' overflow='clip'>
      <Image
        src={imgSrc}
        width={192}
        height={192}
        layout='fixed'
        objectFit='cover'
        alt={`Ícone da receita ${title}`}
      />
    </Box>
    <Heading as='h3'>{title}</Heading>
    <Container h='40%' data-testid='description'>
      <Text fontSize='xl' align='center'>
        {description[0]}
      </Text>
      <Text fontSize='xl' align='center'>
        {description[1]}
      </Text>
      <Text fontSize='xl' align='center'>
        {description[2]}
      </Text>
    </Container>
  </Flex>
)

export default Recipe
