import {
  DropdownMenu as InternalDropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuShortcut,
} from '../../components/ui/dropdown-menu'
import React, { PropsWithChildren, ReactNode } from 'react'

type SeparatorItem = {
  separator: boolean,
}

type NormalMenuItem = {
  name: ReactNode,
  key?: string,
  disabled?: boolean,
  shortcut?: string,
}

type GroupMenuItem = (NormalMenuItem | SeparatorItem)[]

type MenuItem = GroupMenuItem | NormalMenuItem | SeparatorItem

export interface DropdownMenuProps {
  menu: MenuItem[]
}

export const DropdownMenu: React.FC<PropsWithChildren<DropdownMenuProps>> = ({
  children,
  menu,
  ...resetProps
}) => {
  const renderMenuItem = (menu: NormalMenuItem | SeparatorItem, idx: number) => {
    if ('separator' in menu) {
      return (<DropdownMenuSeparator key={idx} />)
    }
    return (
      <DropdownMenuItem key={idx || menu.key} {...menu}>
        {menu.name}
        {menu.shortcut && (<DropdownMenuShortcut>{menu.shortcut}</DropdownMenuShortcut>)}
      </DropdownMenuItem>
    )
  }

  const renderGroupMenu = (groupMenu: GroupMenuItem, groupIdx: number) => (
    <DropdownMenuGroup key={groupIdx}>
      {groupMenu.map((menu, idx) => renderMenuItem(menu, idx))}
    </DropdownMenuGroup>
  )

  return (
    <InternalDropdownMenu {...resetProps}>
      <DropdownMenuTrigger asChild>
        {children}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {
          menu.map((item, idx) => {
            if (Array.isArray(item)) {
              return renderGroupMenu(item, idx)
            }
            return renderMenuItem(item, idx)
          })
        }
      </DropdownMenuContent>
    </InternalDropdownMenu>
  )
}
