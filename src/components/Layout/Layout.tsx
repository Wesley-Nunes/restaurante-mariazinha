import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import Navbar from '../Navbar/Navbar'
import { brandImgLink } from '../../constants/img-url'
import { brandName } from '../../constants/names'

const Layout = ({ children, router }): JSX.Element => (
  <Box as='main'>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={brandName} />
      <link rel='shortcut icon' href={brandImgLink} />
      <meta name='author' content='Wesley Nunes' />
      <title>{brandName}</title>
    </Head>
    <Navbar path={router} />
    <Container>{children}</Container>
  </Box>
)

export default Layout
