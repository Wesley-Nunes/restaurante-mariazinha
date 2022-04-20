import React from 'react'
import { NextPage } from 'next'
import { Flex } from '@chakra-ui/react'

import { ItemsForm } from '../components'

const Reserva: NextPage = () => {
  return (
    <Flex direction='row' bg='background.cocoaBrown' h='container.md' mt='16'>
      <ItemsForm />
    </Flex>
  )
}

export default Reserva
