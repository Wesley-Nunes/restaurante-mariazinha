import React, { useEffect, useState } from 'react'
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Heading,
  Stack,
  Container,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useMediaQuery,
  Text
} from '@chakra-ui/react'

import LinkItem from '../LinkItem/LinkItem'
import Logo from '../Logo/Logo'

const navbarItems = [
  { href: '/menu', name: 'Menu' },
  { href: '/reserva', name: 'Reserva' },
  { href: '/sobre-nos', name: 'Sobre Nós' }
]

const itemsColors = {
  primary: 'secondary.sanguineBrown',
  secondary: 'primary.livelyYellow'
}

const LargerScreenItems = (): JSX.Element => (
  <Stack display='flex' direction='row' alignItems='center' flexGrow='1'>
    {navbarItems.map(({ href, name }) => (
      <LinkItem key={name} href={href} colors={itemsColors}>
        <Text>{name}</Text>
      </LinkItem>
    ))}
  </Stack>
)

const SmallerScreenItems = (): JSX.Element => (
  <Menu>
    <MenuButton as={IconButton} icon={<HamburgerIcon />} />
    <MenuList>
      {navbarItems.map(({ href, name }) => (
        <LinkItem key={name} href={href} colors={itemsColors}>
          <MenuItem>{name}</MenuItem>
        </LinkItem>
      ))}
    </MenuList>
  </Menu>
)

const ContainerNavbarItems = (): JSX.Element => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(true)
  const [mediaQuery] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (isMinWidthMedium !== mediaQuery) {
      setIsMinWidthMedium(mediaQuery)
    }
  }, [isMinWidthMedium, mediaQuery])

  return isMinWidthMedium ? <LargerScreenItems /> : <SmallerScreenItems />
}

const Navbar = (): JSX.Element => (
  <Box as='nav' w='100%' bg='background.cocoaBrown' position='fixed'>
    <Container
      display='flex'
      maxW='container.md'
      alignItems='center'
      justifyContent='center'
      flexWrap='wrap'
    >
      <Flex align='center' justify='center' columnGap='4'>
        <Heading as='h1' size='lg' letterSpacing='widest'>
          <Logo />
        </Heading>
        <ContainerNavbarItems />
      </Flex>
    </Container>
  </Box>
)

export default Navbar
