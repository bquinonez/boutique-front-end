import './App.css';
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import {Switch, Route} from 'react-router'
// import Footer from './Components/Footer'
import HomeContainer from './Components/Home/HomeContainer'
import HeaderContainer from './Components/Header/HeaderContainer'
import AllItemContainer from './Components/AllItem/AllItemContainer'
import ShowContainer from './Components/AllItem/ShowContainer'
import UserProfile from './Components/Profile/UserProfile'
import ShoppingCartContainer from './Components/Cart/ShoppingCartContainer'
import OrderContainer from './Components/OrderPage/OrderContainer'
import AboutPage from './Components/Home/AboutPage'
import Purpose from './Components/Home/Purpose'
import {renderItems} from './Redux/Actions/renderItems'
import {saveUserToState, saveErrorToState} from './Redux/Actions/userActions'


class App extends Component {

  componentDidMount() {
    this.persistUser()
    fetch(`http://localhost:3000/items`)
    .then(r => r.json())
    .then((items) => {
       // console.log(items);
      this.props.renderItems(items)
    })
  }

  handleLogin=(userInfo)=>{
    // console.log(userInfo);
    //whatever object we are getting back from the input field
    //we are sending it to the backend as obj so no need to have curlys
    //after we login we get back the token
    fetch('http://localhost:3000/login', {
      method: "POST",
      headers:{
        "content-type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then((user) => {
      //if user with token exists then save the user to the application state
      if (user.token){
        // debugger
        localStorage.setItem('token', user.token)
        this.props.saveUserToState(user)

        // debugger
        // console.log(user);
        // here we are saving the userToken that
        //is coming from the backend to the key of token
        // localStorage.setItem('token', user.token)
        this.props.history.push('/')
      } else {
        this.props.saveErrorToState(user.error);
      }
    })
  }

  handleRegister=(userinfo)=>{
    fetch('http://localhost:3000/users', {
      method: "POST",
      headers:{
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
      body: JSON.stringify(userinfo)
    })
      .then(r=> r.json())
      .then((user) => {
        this.props.saveUserToState(user)
        localStorage.setItem('token', user.token)
      })

  }


  //this function is being, called in componentDidMount because,
  //componentDidMount renders everytime a page refreshes automatically
  // and so you want the user to persist after page refresh
  //this funcntion if fetching only when there is a token availabe in the
  //localStorage
  persistUser=()=>{
    if(localStorage.getItem("token")){
      let token = localStorage.getItem('token')
      // console.log(token);
      fetch('http://localhost:3000/persist', {
        headers: {
          'Authorization': `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then((user) => {
        // console.log(user);
        if(user.token){
          this.props.saveUserToState(user)
        }
      })
    }
  }


  render() {
  // console.log(this.props);
    return (
      <div className="App">
        <HeaderContainer handleRegister={this.handleRegister} handleLogin={this.handleLogin} />
        <Switch>
          <Route exact path="/" render= {() => <HomeContainer/>}/>
          <Route path='/items' component= { AllItemContainer }/>
          <Route path= '/item/:id' component ={ShowContainer}/>
          <Route path= '/profile' component= {UserProfile}/>
          <Route path= '/shoppingCart'component={ShoppingCartContainer}/>
          <Route path= '/orders'component={OrderContainer}/>
          <Route path ='/about' component={AboutPage}/>
          <Route path ='/purpose' component={Purpose}/>
        </Switch>
        {/* <Footer/> */}
      </div>
    );
  }

}


//dispatching action here === mapDispatchToProps
export default connect(null,
   {renderItems,
  saveUserToState,
saveErrorToState} )
  (withRouter(App));
//1. first argument how we get info from the application state
//2. second argument how we send info to the application state (setting the state)