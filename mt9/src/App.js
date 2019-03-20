import React, { Component } from 'react';
import InputForm from './components/User/InputForm';
import LoginBox from './components/Login/Login';
import RegisterBox from './components/Login/Register';
import LoginPage from './components/Login/LoginPage';
import MyTopNine from './components/User/MyTopNine';
import Protected from './components/Protected';
import Item from './components/User/Item';

import axios from 'axios';
import { Link, Switch, Route, BrowserRouter as Router  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Navbar,
  NavLink,
  NavItem
 } from 'reactstrap';

import { getJwt } from './components/Login/jwt';

import './App.css';
import AuthService from './components/Login/AuthService';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemList: [],
      isLoginOpen: true,
      isRegisterOpen: false,
      center: {
        justifyContent: 'flex-end',
        display: 'flex'
    },
      default: {

      },
      repos: null,
      userId: localStorage.getItem('user_id')
    }
    
  };

  showLoginBox = () => {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false
    })
  }

  showRegisterBox = () => {
    this.setState({
      isRegisterOpen: true,
      isLoginOpen: false
    })
  }

  userRoutes = {
      path: `/top9/${localStorage.getItem('item_name')}`,
  }


  render() {
    console.log(this.state);
    return (
      <div style={{boxSizing: 'border-box'}}>
        <Navbar style={this.state.center} color="light">
          {/* <div style={{display: 'flex', marginRight: '90%'}}><h3>My Top 9</h3></div> */}

            <NavItem style={{listStyleType: 'none', marginRight: '15px'}}>
              <Link to="/">Login</Link>
            </NavItem>
            <NavItem style={{listStyleType: 'none', marginRight: '15px'}}>
              <Link to="/" onClick= {() => {AuthService.logout(localStorage.clear())}}>Logout</Link>
            </NavItem>
            <NavItem style={{listStyleType: 'none', marginRight: '15px'}}>
              <Link to="/top9" >Top Nine</Link>
            </NavItem>

              
        </Navbar>
        <Switch>
          <Route exact path='/' render= {props => <LoginPage {...props} getUser = {this.getUser}
              showRegisterBox={this.showRegisterBox} 
              showLoginBox={this.showLoginBox} 
              isLoginOpen={this.state.isLoginOpen} 
              isRegisterOpen={this.state.isRegisterOpen}
            />} />
          <Route exact path ='/top9' render={props => <MyTopNine {...props} />}/>
          <Route path={this.userRoutes.path} render={props => <Item {...props} userRoutes={this.userRoutes.path}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;

{/* <Route path="/top9" render={props => <ItemList {...this.props}
ItemList={this.ItemList}/>} />
<Route exact path='/' render= {<LoginPage {...this.props}
showRegisterBox={this.showRegisterBox} 
showLoginBox={this.showLoginBox} 
isLoginOpen={this.state.isLoginOpen} 
isRegisterOpen={this.state.isRegisterOpen}
/>} /> */}

{/* <Route path="/Protected" component={Protected} history={this.props.history}/>
            </LoggedIn> */}