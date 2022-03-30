import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'

import { Layout } from '../components'

const Website = ({ Component, pageProps, router }: AppProps) => (
  <ChakraProvider>
    <Layout router={router.asPath}>
      <Component key={router.route} {...pageProps} />
    </Layout>
  </ChakraProvider>
)

export default Website
