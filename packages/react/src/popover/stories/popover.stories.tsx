import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Popover } from '../index';
import { Button } from '../../button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    children: (
      <Button>Show Popover</Button>
    ),
    content: (
      <div>
        <div>
          Popover
        </div>
        <div>
          something
        </div>
      </div>
    )
  },
};
