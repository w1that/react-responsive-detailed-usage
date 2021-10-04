import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

function Product() {
    return (
            <Card >
    <Image src='https://www.odoo.com/web/image/res.users/1076689/image_1024?unique=de093dc' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Product Example Header</Card.Header>
      <Card.Meta>Product Example Meta</Card.Meta>
      <Card.Description>
      Product Example Description. Product Example Description. Product Example Description
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        User Example
      </a>
    </Card.Content>
  </Card>
    )
}

export default Product
