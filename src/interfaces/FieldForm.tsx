import FormikProps from './FormikProps'
import FormValues from './FormValues'

export default interface FieldForm {
  id: string
  type: string
  labelText: string
  formikProps: FormikProps<FormValues>
}
