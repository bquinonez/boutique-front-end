import React, { Component } from 'react';
import {Segment, Grid} from 'semantic-ui-react'
import OrderItemCard from './OrderItemCard'

class OrderCard extends Component {

  render() {
    let {address, order_items, created_at} = this.props.order
    let date = created_at.split("T")[0]
    let orderItemcard = order_items.map(orderItem => <OrderItemCard order={this.props.order} orderItem={orderItem}/>)

  // console.log(this.props.order);
    return (
      <div className="order-card">
      {orderItemcard}
      </div>
    );
  }

}

export default OrderCard;