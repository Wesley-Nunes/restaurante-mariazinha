/* eslint-disable @shopify/jsx-no-hardcoded-content */
import React from 'react'
import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text
} from '@chakra-ui/react'

import LinkItem from '../../LinkItem/LinkItem'

const ModalForm = ({ title, values, disclosureValues }) => {
  const { firstName, amount, date, time } = values
  const { isOpen, onClose } = disclosureValues

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      motionPreset='slideInBottom'
      size='3xl'
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex h='container.md' align='center' justify='center'>
            <Stack spacing={4}>
              <Heading as='h3' textAlign='center'>
                Olá, {firstName}
              </Heading>
              <Text fontSize='3xl'>Sua reserva para: {amount} pessoa(s).</Text>
              <Text fontSize='3xl'>
                Para o dia {date} as {time}.
              </Text>
              <Text fontSize='3xl'>Está em análise.</Text>
              <Text fontSize='3xl'>Em breve, entraremos em contato.</Text>
            </Stack>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <LinkItem
            href='/menu'
            colors={{
              primary: 'secondary.sanguineBrown',
              secondary: 'primary.livelyYellow'
            }}
          >
            <Text onClick={onClose}>Fechar</Text>
          </LinkItem>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalForm
