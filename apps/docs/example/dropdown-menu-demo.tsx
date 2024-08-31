import { DropdownMenu, Button } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <DropdownMenu
      menu={[
        {
          name: 'Profile',
          key: 'profile',
          shortcut: '⇧⌘P',
        },
        {
          name: 'Billing',
          key: 'billing',
          shortcut: '⌘B',
        },
        {
          separator: true,
        },
        [
          {
            name: 'Github',
            key: 'github',
          },
          {
            name: 'Support',
            key: 'support',
          },
          {
            name: 'API',
            key: 'api',
            disabled: true
          },
        ],
        {
          separator: true,
        },
        {
          name: 'Log Out',
          key: 'logout',
          shortcut: '⇧⌘Q',
        },
      ]}
    >
      <Button>Here</Button>
    </DropdownMenu>
  )
}

export default Demo
