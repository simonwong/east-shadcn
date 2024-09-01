import { Form as FormComp, type FormProps, type FormFC } from './form'
import * as ReactHookForm from 'react-hook-form'
export { FormItem, type FormItemProps } from './form-item'
export * from 'react-hook-form'

const Form = FormComp as (FormFC & typeof ReactHookForm)

Object.assign(Form, ReactHookForm)

export {
  Form,
  FormProps
}
