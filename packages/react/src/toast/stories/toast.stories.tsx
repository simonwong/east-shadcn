import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Toaster, toast } from '../index';
import { Button } from '../../button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/toast',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div style={{ padding: '120px 0' }}>
        <Button
          onClick={() => {
            toast.success('Hi Here, success')
          }}
        >
          success
        </Button>
        <Button
          onClick={() => {
            toast.error('Hi Here, error')
          }}
        >
          error
        </Button>
        <Button
          onClick={() => {
            toast.info('Hi Here, info')
          }}
        >
          info
        </Button>
        <Toaster />
      </div>
    )
  },
  args: {},
};
