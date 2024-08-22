import { Button } from "@easy-shadcn/react"

const Demo = () => {
  const handleAsyncAction = async () => {
    await new Promise(resolve => {
      setTimeout(() => {
        resolve(null)
      }, 1000)
    })
  }
  return (
    <Button onClick={handleAsyncAction}>Async Event Auto Loading</Button>
  )
}

export default Demo
