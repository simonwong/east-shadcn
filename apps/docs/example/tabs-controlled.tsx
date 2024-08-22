import { useState } from "react";
import { Tabs, Button } from "@easy-shadcn/react";

const Demo = () => {
  const [currentTab, setCurrentTab] = useState('first')

  return (
    <Tabs
      value={currentTab}
      onValueChange={setCurrentTab}
      option={[
        {
          title: 'First',
          value: 'first',
          content: (
            <div>
              <p>First Content</p>
              <Button onClick={() => setCurrentTab('second')}>Change to Second</Button>
            </div>
          )
        },
        {
          title: 'Second',
          value: 'second',
          content: (
            <div>
              <p>Second Content</p>
              <Button onClick={() => setCurrentTab('first')}>Change to First</Button>
            </div>
          )
        },
      ]}
    />
  )
}

export default Demo
