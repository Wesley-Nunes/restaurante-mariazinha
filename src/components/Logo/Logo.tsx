import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'
import styled from '@emotion/styled'

import { primaryColor } from '../../constants/colors'
import { brandImgLink } from '../../constants/img-url'
import { brandName } from '../../constants/names'

const LogoBox = styled.span`
  height: 4rem;

  display: inline-flex;
  align-items: center;

  font-size: 1.1rem;
  font-weight: bold;

  img {
    transition: 300ms ease;
  }
  &:hover img {
    transform: rotate(-15deg);
  }
`

const Logo = (): JSX.Element => (
  <Link href='/menu' passHref scroll={false}>
    <LogoBox>
      <Image src={brandImgLink} width={48} height={48} alt='logo' />
      <Text color={primaryColor} fontWeight='bold'>
        {brandName}
      </Text>
    </LogoBox>
  </Link>
)

export default Logo
