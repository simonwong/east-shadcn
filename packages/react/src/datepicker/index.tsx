import React from 'react'
import { CalendarIcon } from "@radix-ui/react-icons"
import { cn } from '@easy-shadcn/utils'
import { format } from 'date-fns'

import { Popover } from '../popover'
import { Button } from '../button'
import { Calendar, CalendarProps } from '../calendar'
import { DateRange, DayPickerMultipleProps, DayPickerRangeProps, DayPickerSingleProps } from 'react-day-picker'

type DatePickerMode = "single" | "multiple" | "range"

export type DatePickerProps = {
  placeholder?: string
  buttonClassName?: string
  mode?: DatePickerMode
} & CalendarProps

const useAllModeProps = (mode: DatePickerMode) => {
  const [singleDate, setSingleDate] = React.useState<Date>()
  const [multiDate, setMultiDate] = React.useState<Date[]>()
  const [rangeDate, setRangeDate] = React.useState<DateRange>()

  const singleProps = {
    mode: 'single',
    selected: singleDate,
    onSelect: setSingleDate,
  } satisfies DayPickerSingleProps

  const multiProps = {
    mode: 'multiple',
    selected: multiDate,
    onSelect: setMultiDate,
  } satisfies DayPickerMultipleProps

  const rangeProps = {
    mode: 'range',
    selected: rangeDate,
    onSelect: setRangeDate,
  } satisfies DayPickerRangeProps

  const modeMap = {
    single: {
      props: singleProps,
      renderText: () => {
        return singleProps.selected ? format(singleProps.selected, "PPP") : null
      }
    },
    multiple: {
      props: multiProps,
      renderText: () => {
        return multiProps.selected ? multiProps.selected.map(dt => format(dt, "PPP")).join(', ') : null
      }
    },
    range: {
      props: rangeProps,
      renderText: () => {
        return rangeProps.selected ? (
          rangeProps.selected.from ? (
            rangeProps.selected.to ? (
              <>
                {format(rangeProps.selected.from, "LLL dd, y")}{" "}-{" "}
                {format(rangeProps.selected.to, "LLL dd, y")}
              </>
            ) : format(rangeProps.selected.from, "LLL dd, y")
          ) : null
        ) : null
      }
    },
  }

  return modeMap[mode]
}

export const DatePicker: React.FC<DatePickerProps> = ({
  placeholder = "Pick a date",
  mode = 'single',
  buttonClassName,
  ...resetProps
}) => {
  const allMode = useAllModeProps(mode)

  return (
    <Popover
      contentProps={{
        className: "w-auto p-0",
        align: "start",
      }}
      content={
        <Calendar
          initialFocus
          {...resetProps}
          {...allMode.props}
        />
      }
    >
      <Button
        variant={"outline"}
        className={cn(
          "justify-start text-left font-normal",
          !allMode.props.selected && "text-muted-foreground",
          buttonClassName
        )}
      >
        <CalendarIcon className="mr-2 h-4 w-4" />
        {allMode.renderText() || <span>{placeholder}</span>}
      </Button>
    </Popover>
  )
}
