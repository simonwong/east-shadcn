import React from 'react'
import { Form as InternalForm } from '../../components/ui/form'
import { FieldValues, FormProviderProps } from 'react-hook-form';

export type FormProps<TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined> = {
  form: Omit<FormProviderProps<TFieldValues, TContext, TTransformedValues>, 'children'>,
} & React.DetailedHTMLProps<React.FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>

export type FormFC = <TFieldValues extends FieldValues, TContext = any, TTransformedValues extends FieldValues | undefined = undefined>(
  props: FormProps<TFieldValues, TContext, TTransformedValues>
) => React.JSX.Element;

export const Form: FormFC = ({ form, children, ...props }) => {
  return (
    <InternalForm {...form}>
      <form {...props}>
        {children}
      </form>
    </InternalForm>
  )
}
