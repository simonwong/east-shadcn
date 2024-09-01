import { Toggle } from "@easy-shadcn/react";
import { useState } from "react";

const Demo = () => {
  const [value, setValue] = useState('first')
  return (
    <Toggle
      type='single'
      value={value}
      onValueChange={(val) => {
        if (val) {
          setValue(val)
        }
      }}
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
