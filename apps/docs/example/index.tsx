
// generate this file by scripts/genarate-example-entry.mjs
import React from "react";

export default {
  "button-async-action": {
    component: React.lazy(() => import("./button-async-action")),
    codeString: `import { Button } from "@easy-shadcn/react"

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
`
  },

  "button-demo": {
    component: React.lazy(() => import("./button-demo")),
    codeString: `import { Button } from "@easy-shadcn/react"

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
`
  },

  "calendar-demo": {
    component: React.lazy(() => import("./calendar-demo")),
    codeString: `import { useState } from "react";
import { Calendar } from "@easy-shadcn/react";

const Demo = () => {
  const [selected, setSelected] = useState<Date>();
  return (
    <Calendar
      selected={selected}
      onSelect={setSelected}
      mode="single"
    />
  )
}

export default Demo
`
  },

  "config-provider-demo": {
    component: React.lazy(() => import("./config-provider-demo")),
    codeString: `import { zhCN } from 'date-fns/locale'
import { ConfigProvider, Calendar } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <ConfigProvider
      dateLocal={zhCN}
    >
      <div>
        <Calendar />
      </div>
    </ConfigProvider>
  )
}

export default Demo
`
  },

  "datepicker-demo": {
    component: React.lazy(() => import("./datepicker-demo")),
    codeString: `import { DatePicker } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <DatePicker />
      <DatePicker mode="multiple" placeholder="Pick multiple date" />
      <DatePicker buttonClassName="w-64" mode="range" placeholder="Pick range date" />
    </div>
  )
}

export default Demo
`
  },

  "datepicker-format": {
    component: React.lazy(() => import("./datepicker-format")),
    codeString: `import { DatePicker } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <div className="flex gap-6 flex-wrap">
      <DatePicker dateFormat="yyyy-MM" />
    </div>
  )
}

export default Demo
`
  },

  "popover-demo": {
    component: React.lazy(() => import("./popover-demo")),
    codeString: `import { Popover, Button } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <Popover
      content={"Popover Content"}
    >
      <Button>Show</Button>
    </Popover>
  )
}

export default Demo
`
  },

  "tabs-controlled": {
    component: React.lazy(() => import("./tabs-controlled")),
    codeString: `import { useState } from "react";
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
`
  },

  "tabs-customize-style": {
    component: React.lazy(() => import("./tabs-customize-style")),
    codeString: `import { Tabs } from "@easy-shadcn/react";

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
`
  },

  "tabs-demo": {
    component: React.lazy(() => import("./tabs-demo")),
    codeString: `import { Tabs } from "@easy-shadcn/react";

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
`
  },

  "toast-demo": {
    component: React.lazy(() => import("./toast-demo")),
    codeString: `import { Toaster, toast, Button } from "@easy-shadcn/react"

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
`
  },
} as const
