import { useConfigContext } from "../config-provider";
import { Calendar as InternalCalendar, type CalendarProps } from "../../components/ui/calendar";

export const Calendar = ({...props}) => {
  const { dateLocal } = useConfigContext()

  return <InternalCalendar locale={dateLocal} {...props} />
}

export type {
  CalendarProps
}
