import { useState } from "react";
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
