import React, { Component } from 'react';
import {connect} from 'react-redux';

class UserForm extends Component {
  state ={
    username: "",
    email: "",
    password: ""
  }

  handleAllChange=(evt)=>{
    let {name, value} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit=(evt)=>{
    evt.preventDefault()
    if(this.props.formType === "login"){
      this.props.handleLogin(this.state)
    } else if (this.props.formType === "register") {
      this.props.handleRegister(this.state)
    }

  }

  render() {
    return (
      <div>
        <form className="user-form" onSubmit={this.handleSubmit}>
          <h1 className="reg-login">{this.props.formType === "login" ? "Login" : "Register"}</h1>
          <label htmlFor="username">Username:</label><br/>
            <input
              type="text"
              id="user-input"
              autoComplete="off"
              name="username"
              placeholder="Username....."
              value={this.state.username}
              onChange={this.handleAllChange}/><br/>
            { this.props.formType !== "login" ?
              <div>
            <label htmlFor="email">e-mail:</label><br/>
              <input type="email"
                id="user-input"
                autoComplete="off"
                placeholder="e-mail....."
                name="email"
                value={this.state.email}
                onChange={this.handleAllChange}/><br/>
            </div> : null }

            <label htmlFor="password">password:</label><br/>
            <input
              id="user-input"
              type="password"
              autoComplete="off"
              name="password"
              placeholder="Password....."
              value={this.state.password}
              onChange={this.handleAllChange}/><br/>
             <p className="invalid-logins">{this.props.error}</p>
            <input id="user-button" type="submit" value="Submit"/>
        </form>
      </div>
    );
  }

}

const mapStateToProps=(state)=>{
  return {
    error: state.userInfo.error
  }
}

export default connect(mapStateToProps)(UserForm);