import React, { useEffect, useState } from 'react'
import { useMediaQuery } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

const ReservaForm = dynamic(import('../ReservaForm/ReservaForm'))
const ImageForm = dynamic(import('../ImageForm/ImageForm'))

const ItemsForm = (): JSX.Element => {
  const [isMinWidthMedium, setIsMinWidthMedium] = useState(true)
  const [mediaQuery] = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (isMinWidthMedium !== mediaQuery) {
      setIsMinWidthMedium(mediaQuery)
    }
  }, [isMinWidthMedium, mediaQuery])

  return isMinWidthMedium ? (
    <>
      <ImageForm />
      <ReservaForm />
    </>
  ) : (
    <ReservaForm />
  )
}

export default ItemsForm
