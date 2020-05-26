import React, { Component } from 'react';
import {Segment, Button, Image} from 'semantic-ui-react'
import {connect} from 'react-redux'
import OrderCard from './OrderCard'
import emptyOrder from "./emptyOrder.png"
class OrderContainer extends Component {


  render() {
// debugger
    let orderCard = this.props.orders ? this.props.orders.map(order => <OrderCard order={order}/>) : null
    let orderLength = this.props.orders ? this.props.orders.length : null
    return (
      <Segment className="order-Segment">
        <b className= "order">{orderLength <= 0 ? <Image verticalAlign="middle" 
 src={emptyOrder}/>: "Order is being processed"}</b>
        {orderCard}
      </Segment>
    );
  }

}


const mapStateToProps=(state)=>{
// debugger
  return {
    orders: state.userInfo.user.orders
  }
}


export default connect(mapStateToProps)(OrderContainer);