import { Toggle } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <Toggle
      type='single'
      options={[
        {
          value: 'first',
          label: "First"
        },
        {
          value: 'second',
          label: "Second"
        },
      ]}
    />
  )
}

export default Demo
