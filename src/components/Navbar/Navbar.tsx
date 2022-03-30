import React from 'react'
import NextLink from 'next/link'
import { Box, Flex, Heading, Stack, Link, Container } from '@chakra-ui/react'

import Logo from '../Logo/Logo'
import { bgBase, primaryColor, secondaryColor } from '../../constants/colors'

const navbarItems = [
  { href: '/menu', name: 'Menu' },
  { href: '/reserva', name: 'Reserva' },
  { href: '/sobre-nos', name: 'Sobre Nós' }
]

const LinkItem = ({ path, href, children }): JSX.Element => {
  const active = path === href
  const bgColor = active ? primaryColor : secondaryColor
  const fontColor = active ? secondaryColor : primaryColor

  return (
    <NextLink href={href} passHref scroll={false}>
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

const Navbar = ({ path }): JSX.Element => (
  <Box as='nav' w='100%' bg={bgBase} position='fixed'>
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
        <Stack display='flex' direction='row' alignItems='center' flexGrow='1'>
          {navbarItems.map(({ href, name }) => (
            <LinkItem key={name} path={path} href={href}>
              {name}
            </LinkItem>
          ))}
        </Stack>
      </Flex>
    </Container>
  </Box>
)

export default Navbar
