import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../button';
import { AlertModalHost, alertModalAction } from '../index';

const meta = {
  title: 'Components/modal/AlertModalHost',
  component: AlertModalHost,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof AlertModalHost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    return (
      <div>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '6px' }}>
          <Button
            onClick={() => {
              alertModalAction.confirm({
                title: '提示',
                content: 'onConfirm 或 onCancel 如果是异步的就会自动 loading',
                onCancel: () => {
                  console.log('cancel')
                },
                onConfirm: () => new Promise((resolve) => {
                  setTimeout(() => {
                    console.log('confirm')
                    resolve()
                  }, 1000)
                })
              })
            }}
          >
            Click Confirm
          </Button>
          <Button
            onClick={() => {
              alertModalAction.alert({
                title: '第一次提示',
                content: '点击确认触发二次提示，为了保持当前的弹窗，需要使用 Promise，否则就自动关闭了',
                onConfirm: async () => {
                  await new Promise((resolve1, reject1) => {
                    alertModalAction.alert({
                      title: '第二次提示',
                      content: '点击确认触发三次提示，点取消回到上一个弹窗',
                      onCancel: () => {
                        reject1()
                      },
                      onConfirm: async () => {
                        await new Promise((resolve2, reject2) => {
                          alertModalAction.alert({
                            title: '第三次提示',
                            content: (
                              <div>
                                <p>点击确认关闭全部，点取消回到上一个弹窗</p>
                                <p>命令式的弹窗写起来方便，但是也会造成这种嵌套地狱</p>
                              </div>
                            ),
                            onCancel: () => {
                              reject2()
                            },
                            onConfirm: () => {
                              console.log('confirm')
                              resolve2(null)
                              resolve1(null)
                            }
                          })
                        })
                      }
                    })
                  })
                }
              })
            }}
          >
            Multiple prompts
          </Button>
        </div>
        <AlertModalHost />
      </div>
    )
  },
  args: {
  },
};
