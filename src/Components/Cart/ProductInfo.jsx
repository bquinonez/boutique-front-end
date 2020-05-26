
import React, { Component } from 'react';
import {deleteFromCart, addToCart} from '../../Redux/Actions/cartItemAction'
import {Form, Input, Segment, Image, Button, Grid, Item, Icon, Header} from 'semantic-ui-react'
import {connect} from 'react-redux'


class ProductInfo extends Component {

  handleDelete=()=>{
    fetch(`http://localhost:3000/cartitem/remove/${this.props.cartItem.item_id}`, {
      method : 'DELETE',
      headers: {
          'Authorization': `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then((data) => {
      this.props.deleteFromCart(data.cart_item.id)
    })
  }

  handlePlus=()=>{
    let item_id = this.props.cartItem.item_id
    fetch(`http://localhost:3000/cart_items`, {
      method : "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify( {
        quantity: 1,
        item_id,
        cart_id: this.props.cartItem.cart_id
      })
    }
  )
  .then(r => r.json())
  .then((data) => {
    this.props.addToCart(data);
    })
  }

  handleMinus=()=>{
    fetch(`http://localhost:3000/cartitem/delete/${this.props.cartItem.id}`, {
      method : 'DELETE',
      headers: {
          'Authorization': `bearer ${localStorage.token}`
      }
    })
    .then(r => r.json())
    .then((data) => {
      console.log(data);
      if (data.cart_item_deleted){
        this.props.deleteFromCart(data.cart_item.id)
      } else {
        this.props.addToCart(data)
      }
    })
  }

  render() {
  // debugger
    let {size, name, price, image, color} = this.props.cartItem.item
    let {quantity} = this.props.cartItem
    // console.log(this.props.cartItem);
     // console.log(quantity)
    return (
    <Item className="product-info">
      <Item.Image src={`${image}`} size="small"/>
      <Item.Content className="item-content">
        <Item.Header>{name}</Item.Header>
          <Item.Meta>
            <span className='color'>color: <b>{color}</b></span>
              <Item.Meta>
                <span className='quantity'>quantity: <b>{quantity}</b></span>
              </Item.Meta>
          </Item.Meta>
       <Item.Meta>
         <span className='price'>${price}</span>
       </Item.Meta>
         <Button onClick={this.handlePlus} style={{margin: 0}} icon="plus"/>
          <Input className="item-count">{quantity}</Input>
         <Button onClick={this.handleMinus} icon="minus"/><br/>
        <div>
         <Button icon="trash alternate outline" onClick={this.handleDelete} />
         <span size="small">Remove Item</span>
        </div>
      </Item.Content>
    </Item>

    );
  }

}

export default connect(null, {deleteFromCart, addToCart})(ProductInfo);

//need to send cartItem id to the backend