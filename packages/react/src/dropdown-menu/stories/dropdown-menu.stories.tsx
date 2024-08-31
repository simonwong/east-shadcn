import type { Meta, StoryObj } from '@storybook/react';
import { DropdownMenu } from '../index';

const meta = {
  title: 'Components/DropdownMenu',
  component: DropdownMenu,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    menu: [
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
    ],
    children: (
      <div>Here</div>
    )
  },
};
