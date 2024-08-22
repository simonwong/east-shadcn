import { Tabs } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <Tabs
      style={{
        width: '100%',
      }}
      defaultValue="first"
      contentProps={{
        style: {
          padding: '10px',
          border: '1px solid #dfdfdf',
        }
      }}
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
          triggerProps: {
            style: {
              fontSize: '20px'
            }
          },
          content: (
            <div>Second Content</div>
          )
        },
      ]}
    />
  )
}

export default Demo
