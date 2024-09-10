import React, { ComponentProps, PropsWithChildren, ReactNode } from 'react'
import { Tooltip as InternalTooltip, TooltipTrigger, TooltipContent } from '../../components/ui/tooltip'

export { TooltipProvider } from '../../components/ui/tooltip'

export interface TooltipProps extends ComponentProps<typeof InternalTooltip> {
  triggerProps?: ComponentProps<typeof TooltipTrigger>
  contentProps?: ComponentProps<typeof TooltipContent>
  content: ReactNode
}

export const Tooltip: React.FC<PropsWithChildren<TooltipProps>> = ({
  triggerProps,
  contentProps,
  content,
  children,
  ...resetProps
}) => {
  return (
    <InternalTooltip {...resetProps}>
      <TooltipTrigger asChild {...triggerProps}>
        {children}
      </TooltipTrigger>
      <TooltipContent {...contentProps}>
        {content}
      </TooltipContent>
    </InternalTooltip>
  )
}
