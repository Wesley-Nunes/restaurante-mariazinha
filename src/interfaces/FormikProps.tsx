export default interface FormikProps<T> {
  errors: { errors: T }
  touched: { touched: T }
  handleChange: () => void
  values: { values: T }
}
