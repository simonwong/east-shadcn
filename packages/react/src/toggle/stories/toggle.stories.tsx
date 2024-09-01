import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    type: 'single',
    options: [
      {
        value: 'first',
        label: "First"
      },
      {
        value: 'second',
        label: "Second"
      },
    ]
  },
};

export const Controlled: Story = {
  args: {
    type: 'single',
    value: 'first',
    options: [
      {
        value: 'first',
        label: "First"
      },
      {
        value: 'second',
        label: "Second"
      },
    ]
  },
};
