import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { DatePicker } from '../index';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Normal: Story = {
  args: {
  },
};


export const Controlled: Story = {
  render: () => {
    const [date, setDate] = useState<Date[] | undefined>([new Date()])
    return (
      <DatePicker
        mode="multiple"
        selected={date}
        onSelect={setDate}
      />
    )
  }
}
