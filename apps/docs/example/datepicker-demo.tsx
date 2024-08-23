import { DatePicker } from "@easy-shadcn/react";

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
