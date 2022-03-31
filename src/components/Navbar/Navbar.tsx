import React, { useEffect, useState } from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Box,
  Flex,
  Heading,
  Stack,
  Link,
  Container,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
  useMediaQuery
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

import Logo from '../Logo/Logo'

const navbarItems = [
  { href: '/menu', name: 'Menu' },
  { href: '/reserva', name: 'Reserva' },
  { href: '/sobre-nos', name: 'Sobre Nós' }
]

const LinkItem = ({ href, children }): JSX.Element => {
  const router = useRouter()
  const active = router.asPath === href
  const bgColor = active ? 'primary.livelyYellow' : 'secondary.sanguineBrown'
  const fontColor = active ? 'secondary.sanguineBrown' : 'primary.livelyYellow'

  return (
    <NextLink href={href} passHref>
      <Link
        display='flex'
        alignItems='center'
        justifyContent='center'
        minW='24'
        minH='8'
        bg={bgColor}
        color={fontColor}
        fontWeight='bold'
      >
        {children}
      </Link>
    </NextLink>
  )
}

const LargerScreenItems = (): JSX.Element => (
  <Stack display='flex' direction='row' alignItems='center' flexGrow='1'>
    {navbarItems.map(({ href, name }) => (
      <LinkItem key={name} href={href}>
        {name}
      </LinkItem>
    ))}
  </Stack>
)

const SmallerScreenItems = (): JSX.Element => (
  <Menu>
    <MenuButton as={IconButton} icon={<HamburgerIcon />} />
    <MenuList>
      {navbarItems.map(({ href, name }) => (
        <LinkItem key={name} href={href}>
          <MenuItem>{name}</MenuItem>
        </LinkItem>
      ))}
    </MenuList>
  </Menu>
)

const NavItems = (): JSX.Element => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(true)
  const [mediaQuery] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (isMinWidthMedium !== mediaQuery) {
      setIsMinWidthMedium(mediaQuery)
    }
  }, [isMinWidthMedium, mediaQuery])

  return isMinWidthMedium ? <LargerScreenItems /> : <SmallerScreenItems />
}

const Navbar = (): JSX.Element => {
  return (
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
          <NavItems />
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
