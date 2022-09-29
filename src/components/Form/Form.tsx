import { ComponentPropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import * as z from "zod"
export { FORM_ERROR } from "final-form"

type FormProps<S extends z.ZodType<any, any>> = {
  schema?: S

  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
  render?: FinalFormProps<z.infer<S>>["render"]
}

export function Form<S extends z.ZodType<any, any>>({
  schema,
  ...props
}: FormProps<S>) {

  return (
    <FinalForm
      {...props}
      validate={(values) => {
        if (!schema) return
        try {
          schema.parse(values)
        } catch (error: any) {
          return error.formErrors.fieldErrors
        }
      }}
    />
  )
}

export default Form