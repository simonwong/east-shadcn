import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../index';
import { Button } from '../../button';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Default Card',
    style: { width: '300px' },
    description: 'some descriptions',
    content: (
      <div>
        <div>content1-content1-content1</div>
        <div>content2</div>
        <div>content3</div>
      </div>
    ),
    footer: (
      <Button>Button</Button>
    ),
    footerProps: {
      style: {
        display: 'flex',
        justifyContent: 'end'
      }
    }
  },
};

export const OnlyContent: Story = {
  args: {
    content: 'OnlyContent',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'OnlyTitle',
  },
};
