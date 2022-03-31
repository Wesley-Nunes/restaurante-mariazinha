import React from 'react'
import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'

import { brandImgLink } from '../../constants/img-url'
import { brandName } from '../../constants/names'
import Navbar from '../Navbar/Navbar'

const Layout = ({ children }): JSX.Element => (
  <Box as='main'>
    <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='description' content={brandName} />
      <link rel='shortcut icon' href={brandImgLink} />
      <meta name='author' content='Wesley Nunes' />
      <title>{brandName}</title>
    </Head>
    <Navbar />
    <Container>{children}</Container>
  </Box>
)

export default Layout
