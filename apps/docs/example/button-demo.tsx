import { Button } from "@easy-shadcn/react"

const Demo = () => {
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <Button>default</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
        <Button variant="link">link</Button>
      </div>
      <div className="flex gap-2">
        <Button size="sm">size sm</Button>
        <Button>size default</Button>
        <Button size="lg">size lg</Button>
        <Button size="icon">icon</Button>
      </div>
    </div>
  )
}

export default Demo
