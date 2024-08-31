import { Card, Button } from "@easy-shadcn/react";

const Demo = () => {
  return (
    <Card
      title='Default Card'
      style={{ width: '300px' }}
      description='some descriptions'
      content={(
        <div>
          <div>content1-content1-content1</div>
          <div>content2</div>
          <div>content3</div>
        </div>
      )}
      footer={(
        <Button>Button</Button>
      )}
      footerProps={{
        style: {
          display: 'flex',
          justifyContent: 'end'
        }
      }}
    />
  )
}

export default Demo
