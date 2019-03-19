import React, { Component } from 'react';
import InputForm from './components/InputForm';
import LoginBox from './components/Login';
import RegisterBox from './components/Register';
import LoginPage from './components/LoginPage';
import MyTopNine from './components/MyTopNine';
import Protected from './components/Protected';

import axios from 'axios';
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Navbar,
  NavLink,
  NavItem
 } from 'reactstrap';

import { getJwt } from './components/jwt';

import './App.css';
import AuthService from './components/AuthService';



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
              <Link to="/top9">Top Nine</Link>
            </NavItem>

              
        </Navbar>        
        <Route exact path='/' render= {props => <LoginPage {...props} getUser = {this.getUser}
            showRegisterBox={this.showRegisterBox} 
            showLoginBox={this.showLoginBox} 
            isLoginOpen={this.state.isLoginOpen} 
            isRegisterOpen={this.state.isRegisterOpen}
          />} />
        <Route exact path ='/top9' render={props => <MyTopNine {...props} />}/>
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