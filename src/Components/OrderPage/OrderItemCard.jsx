import React, { Component } from 'react';
import {Grid, Image} from 'semantic-ui-react'

class OrderItemCard extends Component {

  render() {

    let {address, created_at} = this.props.order
    let date = created_at.split("T")[0]

    let {name, image, price} = this.props.orderItem
    return (
      <Grid celled>
      <Grid.Row>
      <Grid.Column width={3}>
        <Image className="orderItem" src={image} />
      </Grid.Column>
      <Grid.Column width={13}>
        <p> Style: {name}</p>
        <p> Shipping Address: {address}</p>
        <p> Order placed on: {date} </p>
        <p> price: ${price} </p>
      </Grid.Column>
    </Grid.Row>
      </Grid>
    );
  }

}

export default OrderItemCard;