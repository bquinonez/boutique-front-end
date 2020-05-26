import React, { Component } from 'react';
import {Label, Header,Card, Icon, Button, Divider, Form, Grid, Segment, Menu } from 'semantic-ui-react'
import {saveUserToState} from '../../Redux/Actions/userActions'
import { withRouter } from 'react-router-dom'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

class UserProfile extends Component {
  handleDelete=(evt)=>{
    fetch(`https://thread-it-api.herokuapp.com/users/${this.props.user.id}`, {
      method: 'DELETE'
    })
    .then(r => r.json())
    .then((deleteUser) => {
      localStorage.clear()
      this.props.saveUserToState({user: {}, token: ""})
      this.props.history.push('/')
      // console.log(deleteUser);
    })
  }

  render() {
    // console.log(this.props.user);
    let {username, email} = this.props.user

    return (
<div className="profile-info">
      <Grid className="prof-grid" >
     <Grid.Column floated="left" verticalAlign="middle">
        <Icon  name="user circle" size='massive'></Icon><br/>
          <Label  size="big">Username: {username ? username.slice(0,1).toUpperCase() + username.slice(1) : null}</Label><br/>
          <Divider/>
          <Label  size="big">e-mail: {email}</Label><br/>
          <Divider/>
          <Link to={'./orders'}><Button content='order history' icon='unordered list' size='big'/></Link>
          <Divider/>
          <Button onClick={this.handleDelete} color='red' content='Delete Account'/>
     </Grid.Column>


   </Grid>

</div>


    );
  }

}

const mapStateToProps=(state)=>{
  // console.log(state);
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps, {saveUserToState})(withRouter(UserProfile));