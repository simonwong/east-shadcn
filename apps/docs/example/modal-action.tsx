import { Button, modalAction } from '@easy-shadcn/react'

const Demo = () => {
  return (
    <Button
      onClick={() => {
        modalAction.open({
          title: 'title',
          content: 'Modal Content',
          footer: 'Modal Footer'
        })
      }}
    >
      Click Open Modal
    </Button>
  )
}

export default Demo
