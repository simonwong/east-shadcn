import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Tabs } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    defaultValue: "first",
    option: [
      {
        title: 'First Tab',
        value: 'first',
        content: "First Tab Content"
      },
      {
        title: 'Second Tab',
        value: 'second',
        content: "Second Tab Content"
      },
    ]
  },
};
