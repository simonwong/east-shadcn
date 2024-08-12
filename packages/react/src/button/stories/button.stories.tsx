import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ]
    },
    size: {
      control: 'select',
      options: [
        'default',
        'sm',
        'lg',
        'icon',
      ]
    }
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button'
  },
};

const AllVariantComp = () => {
  return (
    <div>
      <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
        <Button>Default</Button>
        <Button variant="secondary">secondary</Button>
        <Button variant="destructive">destructive</Button>
        <Button variant="link">link</Button>
        <Button variant="outline">outline</Button>
        <Button variant="ghost">ghost</Button>
      </div>
      <div style={{ display: 'flex', gap: '6px' }}>
        <Button size="sm">sm</Button>
        <Button size="default">default</Button>
        <Button size="lg">lg</Button>
        <Button size="icon">Icon</Button>
      </div>
    </div>
  )
}

export const AllVariant: Story = {
  render: AllVariantComp,
  args: {},
};

const ClickAsyncComp = () => {
  return (
    <Button
      onClick={async () => {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve(null)
          }, 3000)
        })
      }}
    >Async Click Auto Loading</Button>
  )
}

export const ClickAsync: Story = {
  render: ClickAsyncComp,
  args: {},
};
