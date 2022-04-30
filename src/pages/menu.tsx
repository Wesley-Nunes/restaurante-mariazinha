import React from 'react'
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next'
import { Text, Box, Heading } from '@chakra-ui/react'

import { RecipeWrapper, LinkItem } from '../components'

const Menu: NextPage = ({
  title,
  actionText
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Box bg='background.cocoaBrown' my='8' py='8'>
    <Heading textAlign='center'>{title}</Heading>
    <RecipeWrapper />
    <Box mt='8'>
      <LinkItem
        href='/reserva'
        colors={{
          primary: 'black',
          secondary: 'primary.livelyYellow'
        }}
      >
        <Text>{actionText}</Text>
      </LinkItem>
    </Box>
  </Box>
)

export const getStaticProps: GetStaticProps = async () => {
  const title = 'Especiais do Dia'
  const actionText = 'Faça A Sua Reserva'

  return {
    props: {
      title,
      actionText
    }
  }
}

export default Menu
