import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

import { brandImgLink } from '../../constants/img-url'
import { brandName } from '../../constants/names'

import LogoBox from './Logo.style'

const Logo = (): JSX.Element => (
  <Link href='/menu' passHref>
    <LogoBox>
      <Image src={brandImgLink} width={48} height={48} alt='logo' />
      <Text color='primary.livelyYellow' fontWeight='bold'>
        {brandName}
      </Text>
    </LogoBox>
  </Link>
)

export default Logo
