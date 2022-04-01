import React from 'react'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

import { brandImgLink } from '../../constants/img-url'
import { brandName } from '../../constants/names'
import LinkItem from '../LinkItem/LinkItem'

import LogoBox from './Logo.style'

const Logo = (): JSX.Element => (
  <LinkItem href='/menu'>
    <LogoBox>
      <Image src={brandImgLink} width={48} height={48} alt='logo' />
      <Text color='primary.livelyYellow' fontWeight='bold'>
        {brandName}
      </Text>
    </LogoBox>
  </LinkItem>
)

export default Logo
