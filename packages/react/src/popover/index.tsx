import { PropsWithChildren, ReactNode } from 'react'
import { Popover as InternalPopover, PopoverTrigger, PopoverAnchor, PopoverContent } from '../../components/ui/popover'
import { PopoverProps as InternalPopoverProps, PopoverContentProps } from "@radix-ui/react-popover"

export interface PopoverProps extends InternalPopoverProps {
  content: ReactNode
  contentProps?: PopoverContentProps
}

export const Popover: React.FC<PropsWithChildren<PopoverProps>> = ({
  children,
  content,
  contentProps,
  ...restProps
}) => {
  return (
    <InternalPopover {...restProps}>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent {...contentProps}>
        {content}
      </PopoverContent>
    </InternalPopover>
  )
}
