import React from 'react'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'
import { Flex } from '@chakra-ui/react'

const ItemsForm = dynamic(import('../components/Form/ItemsForm/ItemsForm'))

const Reserva: NextPage = () => (
  <Flex direction='row' bg='background.cocoaBrown' h='container.md' mt='16'>
    <ItemsForm />
  </Flex>
)

export default Reserva
