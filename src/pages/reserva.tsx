import React from 'react'
import { NextPage } from 'next'
import { Box, Flex, Image, Heading } from '@chakra-ui/react'

import { ReservaForm } from '../components'

const Reserva: NextPage = () => {
  const title = 'Reserva'
  return (
    <Flex
      direction='row'
      bg='background.cocoaBrown'
      w='container.md'
      h='container.md'
      mt='16'
    >
      <Box h='100%' w='100%' p='4'>
        <Image
          src='/images/reserva-bg.jpg'
          alt='background'
          h='100%'
          fit='cover'
          align='left'
        />
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        width='96%'
        h='96%'
        m='4'
        bg='background.darkBrown'
        rowGap='6'
      >
        <Heading>{title}</Heading>
        <ReservaForm />
      </Box>
    </Flex>
  )
}

export default Reserva
