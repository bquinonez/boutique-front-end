import React, { Component } from 'react';
import { Button, Modal} from 'semantic-ui-react'
// import { Button, Header, Image, Modal, Container, List} from 'semantic-ui-react'
import UserForm from './UserForm'
import {saveErrorToState} from '../../Redux/Actions/userActions'
import {connect} from 'react-redux'

class ModalForm extends Component {

  handleClick=(evt)=>{
   this.props.saveErrorToState("")
  }

  render() {
    return (
     <Modal className="user-modal" trigger={<Button onClick={this.handleClick}>{this.props.formType === "login" ? "login" : "register"}</Button>}>
            <Modal.Description className="form-desc">
              <UserForm  formType={this.props.formType} handleRegister={this.props.handleRegister} handleLogin={this.props.handleLogin}/>
            </Modal.Description>
        </Modal>
    );
  }

}

export default connect(null, {saveErrorToState})(ModalForm);