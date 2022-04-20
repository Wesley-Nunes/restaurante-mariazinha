/* eslint-disable no-console */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Form, Formik } from 'formik'

import FieldForm from './FieldForm'

describe('FieldForm Component', () => {
  it('should render a form', () => {
    const id = 'nome'
    const type = 'text'
    const labelText = 'Digite seu nome'

    render(
      <Formik
        initialValues={{ nome: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ errors, touched, handleChange, values }) => (
          <Form>
            <FieldForm
              key={id}
              id={id}
              type={type}
              labelText={labelText}
              formikProps={{ errors, touched, handleChange, values }}
            />
          </Form>
        )}
      </Formik>
    )

    const form = screen.getByRole('textbox', { name: /digite seu nome/i })

    expect(form).toBeVisible()
    expect(form).toBeInTheDocument()
  })
})
