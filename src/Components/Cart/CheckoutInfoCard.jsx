import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Segment} from 'semantic-ui-react'
// import {Link} from 'react-router-dom'
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom'
import {addOrderItem} from '../../Redux/Actions/userActions'
import {emptyCartItem} from '../../Redux/Actions/cartItemAction'


class CheckoutInfoCard extends Component {

 cartAmount=()=>{
// debugger
    if(this.props.userCart && this.props.userCart.length > 0){
      let price = this.props.userCart.map(uc => uc.item.price * uc.quantity)
      // console.log(price);
      let totalPrice = price.reduce((total, num) => total + num)
      let result = totalPrice + 10
          return result
    }
  }



//address which is coming from the token
  formatAddress = (address)=>{
    let shippingAddress = address["shipping_address_line1"] + ", " + address["shipping_address_city"] + ", "
    + address["shipping_address_state"] +  " " + address["shipping_address_zip"]
    return shippingAddress
  }

  handleProceedCheckout=(formattedAdress)=>{

    const userId = this.props.user.id
    fetch(`http://localhost:3000/orders`, {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"

    },
      body: JSON.stringify({
        user_id: userId,
        address: formattedAdress
      })
    })
      .then(r => r.json())
      .then((orderData) => {
        console.log(orderData);
        this.props.addOrderItem(orderData)
        this.props.emptyCartItem()
        this.props.history.push('/orders')

      })
  }

  // token is the user id and you dont need to think about how to get access to user

    handleToken=(token, address)=>{
      // console.log(address);
      let formattedAdress = this.formatAddress(address)
      const charge = {
          token: token.id
      };
      const config = {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify({
                charge: charge,
                price: this.cartAmount() * 100
                })
         };
      fetch(`http://localhost:3000/charges`, config)
      .then(res => res.json())
      .then((data) => {
        // console.log({token, address});
       // console.log("charges",data);
        this.handleProceedCheckout(formattedAdress)
      })
    }

  render() {
    let cartLength =   this.userCart ?  this.userCart.length : 0

    const shipping = 10
    let totalAmount = this.cartAmount()
    let totalPrice = totalAmount - 10
    totalAmount = totalAmount ? totalAmount: totalAmount = "0"
    totalPrice = totalPrice ? totalPrice : totalPrice = "0"
    return (

      <Segment className = "total-card">
        <table className="table">
          <strong>TOTAL PURCHASE AMOUNT</strong>
          <tr>
            <td>Total Item Price</td>
            <td>${totalPrice}</td>
          </tr>

          <tr>
            <td>Shipping</td>
            {this.props.userCart && this.props.userCart.length > 0  ?   <td>${shipping}</td> : <td>${0}</td>  }
          </tr>
          <hr/>
          <tr>
            <td>You Pay</td>
            <td>${totalAmount}</td>
          </tr>
          <hr/>

        { this.props.userCart && this.props.userCart.length > 0  ?
            <StripeCheckout
              disabled = {false}
              className="checkout Button"
              stripeKey = {process.env.REACT_APP_STRIPE_API_KEY}
              token={this.handleToken}
              billingAdress
              shippingAddress
              />
            :
            <StripeCheckout
              disabled= {true}
              className="checkout Button"
              stripeKey = {process.env.REACT_APP_STRIPE_API_KEY}
              token={this.handleToken}
              billingAdress
              shippingAddress
              />

          }
      </table>
      </Segment>

    );
  }

}


const mapStateToProps=(state)=>{

  // debugger
  //put price in the state
  //and then call the action here
  return {
    userCart : state.userInfo.user.cart ? state.userInfo.user.cart.cart_items : null,
    user: state.userInfo.user
  }
}

export default withRouter(connect(mapStateToProps, {addOrderItem, emptyCartItem})(CheckoutInfoCard));



// <th>Total Item Price </th>
//  <td>${totalPrice}</td><br/>
//    <th>Shipping</th>
//     <td><span>{shipping}</span></td>
//     <th>You Pay</th>
// <td>{totalAmount} </td>