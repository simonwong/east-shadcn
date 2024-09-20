import { Button, alertModalAction } from '@easy-shadcn/react'

const Demo = () => {
  return (
    <Button
      onClick={() => {
        alertModalAction.confirm({
          title: 'Tips',
          content: 'If onConfirm or onCancel is asynchronous events, the button will automatically display loading',
          onCancel: () => {
            console.log('cancel')
          },
          onConfirm: () => new Promise((resolve) => {
            setTimeout(() => {
              console.log('confirm')
              resolve()
            }, 1000)
          })
        })
      }}
    >
      Click Confirm
    </Button>
  )
}

export default Demo
