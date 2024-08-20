import type { Meta, StoryObj } from '@storybook/react';
import { ConfigProvider } from '../index';
import { Calendar } from '../../calendar';
import { zhCN } from 'date-fns/locale';

const meta = {
  title: 'Components/ConfigProvider',
  component: ConfigProvider,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ConfigProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ConfigDateLocal: Story = {
  render: () => {
    return (
      <ConfigProvider
        dateLocal={zhCN}
      >
        <div>
          <Calendar />
        </div>
      </ConfigProvider>
    )
  }
}
