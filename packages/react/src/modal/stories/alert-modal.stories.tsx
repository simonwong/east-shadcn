import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../button';
import { AlertModal } from '../index';

const meta = {
  title: 'Components/modal/AlertModal',
  component: AlertModal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AlertModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    trigger: <Button>Click Open</Button>,
    title: '提示',
    content: '如果没有 trigger, 就会自动打开',
    onConfirm: () => new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    }),
  },
};
