import { Button, useModal } from '@easy-shadcn/react'

const AnyModalContent = () => (
  <div>
    AnyModalContent
  </div>
)

const Demo = () => {
  const [modalHost, modalAction] = useModal()

  const handleClick = () => {
    modalAction.open({
      title: 'Modal Open By hooks action',
      content: <AnyModalContent />,
      footer: (
        <div className='space-x-2'>
          <Button
            variant="ghost"
            onClick={() => {
              modalAction.close()
            }}
          >
            Cancel
          </Button>
          <Button>
            Save
          </Button>
        </div>
      ),
    })
  }

  return (
    <div>
      <Button onClick={handleClick}>Click Show Modal</Button>
      {modalHost}
    </div>
  )
}

export default Demo
