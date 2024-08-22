import { Tabs } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <Tabs
      defaultValue="first"
      option={[
        {
          title: 'First',
          value: 'first',
          content: (
            <div>First Content</div>
          )
        },
        {
          title: 'Second',
          value: 'second',
          content: (
            <div>Second Content</div>
          )
        },
      ]}
    />
  )
}

export default Demo
