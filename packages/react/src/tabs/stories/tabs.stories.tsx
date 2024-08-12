import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Tabs } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    children: 'Button',
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
