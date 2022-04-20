import React, { useState } from 'react'
import { Form, Formik } from 'formik'
import { Box, Button, Flex, Heading, useDisclosure } from '@chakra-ui/react'
import * as Yup from 'yup'

import FormValues from '../../../interfaces/FormValues'
import FieldForm from '../FieldForm/FieldForm'
import ModalForm from '../ModalForm/ModalForm'
import FormikProps from '../../../interfaces/FormikProps'

const formFieldItems = [
  { id: 'firstName', type: 'text', labelText: 'Digite Seu Nome' },
  { id: 'amount', type: 'number', labelText: 'Quantidade de pessoas' },
  { id: 'date', type: 'date', labelText: 'Escolha a melhor data' },
  { id: 'time', type: 'time', labelText: 'Escolha o Horário' },
  { id: 'tel', type: 'number', labelText: 'Deixe um celular/wpp para contato' }
]
const initialValues: FormValues = {
  firstName: '',
  amount: '',
  date: '',
  time: '',
  tel: ''
}
const phoneRegex = /^[0-9]{2}[9][0-9]{8}$/
const ReservaSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Digite um nome adicional!')
    .max(20, 'Abrevie o nome!')
    .required('Campo Obrigatório'),
  amount: Yup.number()
    .min(1, 'Escolha entre 1 e 20!')
    .max(20, 'Escolha entre 1 e 20!')
    .required('Campo Obrigatório'),
  date: Yup.date().required('Campo Obrigatório'),
  time: Yup.string().required('Campo Obrigatório'),
  tel: Yup.string()
    .matches(
      phoneRegex,
      'Celular Inválido, Adicione somente números, lembre-se do DDD'
    )
    .required('Campo Obrigatório')
})

const ReservaForm = (): JSX.Element => {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const disclosureValues = { isOpen, onClose }
  const [formValue, setFormValue] = useState<FormValues>(initialValues)
  const handleSubmit = (values: FormValues) => {
    onOpen()
    setFormValue(values)
  }

  const title = 'Reserva'
  const btnName = 'Faça Sua Reserva'

  return (
    <Box
      display='flex'
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      width='96%'
      h='96%'
      m='4'
      bg='background.darkBrown'
      rowGap='6'
    >
      <Heading>{title}</Heading>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={ReservaSchema}
      >
        {({
          errors,
          touched,
          handleChange,
          values
        }: FormikProps<FormValues>) => (
          <Form title={title}>
            <Flex flexDirection='column' rowGap='6'>
              {formFieldItems.map(({ id, type, labelText }) => (
                <FieldForm
                  key={id}
                  id={id}
                  type={type}
                  labelText={labelText}
                  formikProps={{ errors, touched, handleChange, values }}
                />
              ))}
              <Button type='submit'>{btnName}</Button>
            </Flex>
          </Form>
        )}
      </Formik>
      <ModalForm
        title={title}
        values={formValue}
        disclosureValues={disclosureValues}
      />
    </Box>
  )
}

export default ReservaForm
