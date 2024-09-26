import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../button';
import { ModalHost, modalAction } from '../index';
import { Input } from '../../input';
import { Form, FormItem } from '../../form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useModalAction } from '../use-modal-action';

const meta = {
  title: 'Components/modal/modalAction',
  component: ModalHost,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ModalHost>;

export default meta;
type Story = StoryObj<typeof meta>;


export const AlertModal: Story = {
  render: () => {
    return (
      <div className='flex space-x-2'>
        <Button
          onClick={() => {
            modalAction.confirm({
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
            modalAction.alert({
              title: '第一次提示',
              content: '点击确认触发二次提示，为了保持当前的弹窗，需要使用 Promise，否则就自动关闭了',
              onConfirm: async () => {
                await new Promise((resolve1, reject1) => {
                  modalAction.alert({
                    title: '第二次提示',
                    content: '点击确认触发三次提示，点取消回到上一个弹窗',
                    onCancel: () => {
                      reject1()
                    },
                    onConfirm: async () => {
                      await new Promise((resolve2, reject2) => {
                        modalAction.alert({
                          title: '第三次提示',
                          content: (
                            <>
                              <span>点击确认关闭全部，点取消回到上一个弹窗</span>
                              <br />
                              <span>命令式的弹窗写起来方便，但是也会造成这种嵌套地狱</span>
                            </>
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
    )
  },
  args: {
  },
};

export const Modal: Story = {
  render: () => {
    const formSchema = z.object({
      username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
      }),
      remark: z.string(),
    })

    const form = Form.useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
        remark: "",
      },
    })

    return (
      <Button
        onClick={() => {
          const modal = modalAction.open({
            title: 'Form Title',
            content: (
              <Form form={form} className='space-y-4'>
                <FormItem
                  control={form.control}
                  name="username"
                  label="User Name"
                  render={({ field }) => (
                    <Input placeholder="shadcn" {...field} />
                  )}
                />
                <FormItem
                  control={form.control}
                  name="remark"
                  label="Remark"
                  render={({ field }) => (
                    <Input placeholder="shadcn" {...field} />
                  )}
                />
              </Form>
            ),
            footer: (
              <div>
                <Button
                  onClick={
                    form.handleSubmit((data) => {
                      modalAction.confirm({
                        title: '是否确认提交',
                        content: '提交后关闭表单弹窗',
                        onConfirm: () => {
                          console.log('data', data)
                          modal.close()
                        }
                      })
                    })
                  }
                >Confirm</Button>
              </div>
            )
          })
        }}
      >
        Click Oen Modal
      </Button>
    )
  },
  args: {
  },
};

export const UpdateModal: Story = {
  render: () => {
    const [times, setTimes] = useState(1)
    const [hookModalAction] = useModalAction({
      title: 'Modal Title',
      content: `Confirm Times: ${times}`,
      footer: (
        <div>
          <Button
            onClick={() => setTimes(t => t + 1)}
          >Confirm</Button>
        </div>
      )
    }, [times])

    return (
      <>
        <div>Times: {times}</div>
        <Button
          onClick={() => {
            hookModalAction.open({})
          }}
        >
          Click Oen Modal
        </Button>
        <Button onClick={() => setTimes(t => t + 1)}>
          Add Times
        </Button>
      </>
    )
  },
  args: {
  },
};

export const HostNode: Story = {
  args: {
  },
};