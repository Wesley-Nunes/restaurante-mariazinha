import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Layout } from '../components'
import theme from '../global/styles/theme'

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Layout>
      <Component key={router.route} {...pageProps} />
    </Layout>
  </ChakraProvider>
)

export default Website
