import React from 'react'
import {
  Text,
  Container,
  FormControl,
  FormLabel,
  Input
} from '@chakra-ui/react'

import FieldForm from '../../../interfaces/FieldForm'

const FieldForm = ({ id, type, labelText, formikProps }: FieldForm) => {
  const { errors, touched, handleChange, values } = formikProps
  const errorMessage =
    errors[id] && touched[id] ? <Text color='red'>{errors[id]}</Text> : null

  return (
    <Container>
      <FormControl isRequired>
        <FormLabel htmlFor={id}>{labelText}</FormLabel>
        <Input
          id={id}
          type={type}
          name={id}
          placeholder={labelText}
          onChange={handleChange}
          value={values[id]}
        />
      </FormControl>
      <Container pt='2'>{errorMessage}</Container>
    </Container>
  )
}

export default FieldForm
