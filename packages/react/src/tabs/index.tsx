import React, { ReactNode } from "react"
import { TabsProps as InternalTabsProps, TabsContentProps, TabsListProps, TabsTriggerProps } from "@radix-ui/react-tabs"
import { Tabs as InternalTabs, TabsContent, TabsList, TabsTrigger } from "../../components/ui/tabs"

export interface TabsProps extends InternalTabsProps {
  option: {
    value: string
    title: ReactNode
    triggerProps?: TabsTriggerProps
    content: ReactNode
    contentProps?: TabsContentProps
  }[];
  listProps?: TabsListProps;
  triggerProps?: TabsTriggerProps;
  contentProps?: TabsContentProps;
}

export const Tabs = React.forwardRef<HTMLDivElement, TabsProps>(
  ({ option, listProps, triggerProps, contentProps, ...props }, ref) => {

    return (
      <InternalTabs ref={ref} {...props}>
        <TabsList {...listProps}>
          {
            option.map(opt => (
              <TabsTrigger {...triggerProps} {...opt.triggerProps} key={opt.value} value={opt.value}>
                {opt.title}
              </TabsTrigger>
            ))
          }
        </TabsList>
        {
          option.map(opt => (
            <TabsContent {...contentProps} {...opt.contentProps} key={opt.value} value={opt.value}>
              {opt.content}
            </TabsContent>
          ))
        }
      </InternalTabs>
    )
  }
)
