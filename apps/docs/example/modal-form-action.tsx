import { Button, Form, FormItem, Input, modalAction } from '@easy-shadcn/react'

const Demo = () => {
  const form = Form.useForm({
    defaultValues: {
      username: "",
      remark: "",
    },
  })

  return (
    <Button
      onClick={() => {
        const modal = modalAction.open({
          title: 'Form Title',
          content: (
            <Form form={form} className='space-y-4'>
              <FormItem
                control={form.control}
                name="username"
                label="User Name"
                render={({ field }) => (
                  <Input placeholder="shadcn" {...field} />
                )}
              />
              <FormItem
                control={form.control}
                name="remark"
                label="Remark"
                render={({ field }) => (
                  <Input placeholder="shadcn" {...field} />
                )}
              />
            </Form>
          ),
          footer: (
            <div>
              <Button
                onClick={
                  form.handleSubmit((data) => {
                    modalAction.confirm({
                      title: 'Are you sure to submit',
                      content: 'Close the form pop-up after submission',
                      onConfirm: () => {
                        console.log('data', data)
                        modal.close()
                      }
                    })
                  })
                }
              >Confirm</Button>
            </div>
          )
        })
      }}
    >
      Click Open Modal Form
    </Button>
  )
}

export default Demo
