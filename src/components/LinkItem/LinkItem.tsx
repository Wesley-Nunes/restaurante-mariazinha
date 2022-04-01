import React from 'react'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '@chakra-ui/react'

import LinkItem from '../../interfaces/LinkItem'

const LinkItem = ({ href, colors, children }: LinkItem): JSX.Element => {
  const router = useRouter()
  let bgColor: string
  let fontColor: string

  if (colors) {
    const isActive = router.asPath === href

    ;[bgColor, fontColor] = isActive
      ? [colors.primary, colors.secondary]
      : [colors.secondary, colors.primary]
  } else {
    ;[bgColor, fontColor] = ['background.cocoaBrown', 'primary.livelyYellow']
  }

  return (
    <NextLink href={href} passHref>
      <Container
        as='a'
        display='flex'
        alignItems='center'
        justifyContent='center'
        minW='32'
        minH='8'
        bg={bgColor}
        color={fontColor}
        fontWeight='bold'
      >
        {children}
      </Container>
    </NextLink>
  )
}

export default LinkItem
