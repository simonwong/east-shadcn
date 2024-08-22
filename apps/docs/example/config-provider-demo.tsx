import { zhCN } from 'date-fns/locale'
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
