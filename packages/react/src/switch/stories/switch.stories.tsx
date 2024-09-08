import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../index';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
    label: 'Is a Switch'
  },
};

export const Controlled: Story = {
  args: {
    label: 'Controlled',
    checked: true
  },
};
