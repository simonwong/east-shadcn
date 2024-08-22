import { Toaster, toast, Button } from "@easy-shadcn/react"

const Demo = () => {
  return (
    <div className="flex gap-2">
      <Button
        onClick={() => {
          toast.success('Hi Here, success', {
            duration: Infinity,
            closeButton: true,
          })
        }}
      >
        success
      </Button>
      <Button
        onClick={() => {
          toast.error('Hi Here, error')
        }}
      >
        error
      </Button>
      <Button
        onClick={() => {
          toast.info('Hi Here, info')
        }}
      >
        info
      </Button>
      <Toaster richColors />
    </div>
  )
}

export default Demo
