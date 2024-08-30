import type { Meta, StoryObj } from '@storybook/react';
import { FileArchiveIcon, UploadCloudIcon } from "lucide-react";
import { Button } from '../index';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
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
        <Button size="icon"><UploadCloudIcon /></Button>
      </div>
    </div>
  )
}

export const AllVariant: Story = {
  render: AllVariantComp,
  args: {},
};

const ClickAsyncComp = () => {
  const handleAsyncClick = async () => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null)
      }, 3000)
    })
  }
  return (
    <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
      <Button onClick={handleAsyncClick}>Async Click Auto Loading</Button>
      <Button onClick={handleAsyncClick} prefix={<FileArchiveIcon />}>Witch Prefix</Button>
      <Button
        onClick={handleAsyncClick}
        size="icon"
      >
        <UploadCloudIcon />
      </Button>
    </div>
  )
}

export const ClickAsync: Story = {
  render: ClickAsyncComp,
  args: {},
};
