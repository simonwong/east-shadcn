import { DropdownMenu, Button } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <DropdownMenu
      menu={[
        {
          name: 'item1',
          key: 'item1',
        },
        {
          name: 'item2',
          key: 'item2',
          subItems: [
            {
              name: 'sub1-item1',
              key: 'sub1-item1',
            },
            {
              name: 'sub1-item2',
              key: 'sub1-item2',
              subItems: [
                {
                  name: 'sub2-item1',
                  key: 'sub2-item1',
                },
                {
                  name: 'sub2-item2',
                  key: 'sub2-item2',
                },
                {
                  groupName: 'sub2-group',
                  key: 'sub2-group',
                  items: [
                    {
                      name: 'sub2-group-item1',
                      key: 'sub2-group-item1',
                    },
                    {
                      name: 'sub2-group-item2',
                      key: 'sub2-group-item2',
                    },
                  ]
                },
              ]
            },
          ]
        },
        {
          name: 'item3',
          key: 'item3',
        },
      ]}
    >
      <Button>Deep Nested Sub Menu</Button>
    </DropdownMenu>
  )
}

export default Demo
