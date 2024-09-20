import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../button';
import { Modal } from '../index';
import { useModal } from '../use-modal';

const meta = {
  title: 'Components/modal/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <Button>Click Open</Button>,
    title: 'Modal title',
    description: 'Modal description',
    content: (
      <div>
        <div>Modal Content1</div>
        <div>Modal Content2</div>
        <div>Modal Content3</div>
      </div>
    ),
  },
};

export const UseModal: Story = {
  render: () => {
    const [modalHost, action] = useModal()

    return (
      <>
        <Button
          onClick={() => {
            action.open({
              title: 'Action title',
              description: 'Open Modal By useModal',
              content: (
                <div>
                  Some Any Content
                </div>
              ),
              footer: (
                <div onClick={() => action.close()}>
                  Click Close
                </div>
              )
            })
          }}
        >
          Click Trigger
        </Button>
        {modalHost}
      </>
    )
  },
};
