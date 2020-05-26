import React, { Component } from 'react';
import ModalForm from './ModalForm'
import { Dropdown } from 'semantic-ui-react'
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {saveUserToState} from '../../Redux/Actions/userActions'
import { Input, Menu, Segment } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import logo from './logo.png'
import NavBar from './NavBar'
//withRouter is giving us access to the DOM history and route info
//so that we can manipulate the path ex line 16

class HeaderContainer extends Component {

  state = { activeItem: 'home' }

  handleLogout=()=>{

    localStorage.clear()
    this.props.saveUserToState({user:{}, token: ""})
    this.props.history.push('/')
  }

  handleCart=()=>{
    this.props.history.push('/shoppingCart')
  }




  render() {
    // debugger
    let cartCount = this.props.cartItems ? this.props.cartItems.map(ct => ct.quantity).reduce((total,num) => {return total + num }, 0) : null
    // console.log(cartCount)
    // console.log(this.props);
// console.log(this.props.user.username);
    return (
        <Segment className="main-header">
              <Link to={`/`}><img className="logo" src={logo}/></Link>
              <ul className="menu-right">
                {cartCount > 0 ?  <span className="cartCount">{cartCount}</span> : null }
                <Icon onClick={this.handleCart}  name='cart' size='large' />

                <Dropdown
                    text={this.props.user.username ? `Hey ${this.props.user.username}!` : "Hey User!" }
                    icon='user'
                    floating
                    labeled
                    button
                    className='icon'
                    >
                    <Dropdown.Menu>
                        {!localStorage.token ? <Dropdown.Item><ModalForm formType='login' handleLogin={this.props.handleLogin}/></Dropdown.Item> : null}
                        {!localStorage.token ? <Dropdown.Item><ModalForm formType ='register' handleRegister={this.props.handleRegister}/></Dropdown.Item> : null}
                        {localStorage.token  ? <Dropdown.Item  onClick={this.handleLogout}>logout</Dropdown.Item> : null}
                        {localStorage.token  ? <Dropdown.Item as={Link} to="/profile" >Profile</Dropdown.Item>: null}
                    </Dropdown.Menu>
                  </Dropdown>
              </ul>
              <NavBar/>

        </Segment>

    );
  }
}

const mapStateToProps=(state)=>{
  // console.log(state);
  return {
    user : state.userInfo.user,
    cartItems: state.userInfo.user.cart ? state.userInfo.user.cart.cart_items : null
  }
}

export default connect(mapStateToProps, {saveUserToState})(withRouter(HeaderContainer));