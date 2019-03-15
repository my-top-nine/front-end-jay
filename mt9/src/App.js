import React, { Component } from 'react';
import ItemList from './components/Items/ItemList';
import InputForm from '../src/components/InputForm/InputForm';
import LoginBox from './components/Login/Login';
import RegisterBox from './components/Login/Register';
import LoginPage from './components/Login/LoginPage';
import LoggedIn from './components/Login/LoggedIn';
import UserItems from './components/User/UserItems';
import Protected from './components/Protected'
import axios from 'axios';
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Navbar,
  NavLink,
  NavItem
 } from 'reactstrap';
 import MyTop9 from './components/User/MyTop9';
 import { getJwt } from './components/helpers/jwt';

import './App.css';



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

  

  getUser = (e) => {
    e.preventDefault();
    const user = e.target.username.value;
    axios
    .get(`https://my-top-nine.herokuapp.com/api/${user}` )
    .then(res => {
        console.log(res);

      })

  }

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



  
  

  componentDidMount(){
    console.log('cdm running');
    const userId = localStorage.getItem('user_id');
    const jwt = getJwt();
    console.log(jwt);



   axios
       .get('https://my-top-nine.herokuapp.com/api/categories' )
       .then(res => {
           console.log(res);
           this.setState({ categories: res.data });
         })
         .catch(err => {
           console.log(err);
           this.setState({ error: err });
         });
  }






  render() {
    console.log(this.state);
    return (
      
        <Router>
          <div style={{boxSizing: 'border-box'}}>
            <Navbar style={this.state.center} color="light">
              {/* <div style={{display: 'flex', marginRight: '90%'}}><h3>My Top 9</h3></div> */}
                <NavItem style={{listStyleType: 'none', marginRight: '15px'}}>
                  <Link  to="/top9">Home</Link>
                </NavItem>
                <NavItem style={{listStyleType: 'none', marginRight: '15px'}}>
                  <Link to="/">Login</Link>
                </NavItem>
                <NavItem style={{listStyleType: 'none', marginRight: '15px'}}>
                  <Link to="/top9">Top Nine</Link>
                </NavItem>
              
            </Navbar>
            <Route exact path='/' render= {props => <LoginPage getUser = {this.getUser}
            showRegisterBox={this.showRegisterBox} 
            showLoginBox={this.showLoginBox} 
            isLoginOpen={this.state.isLoginOpen} 
            isRegisterOpen={this.state.isRegisterOpen}
          />} />


            {/* <Route path="/auth" component={LoggedIn}/> */}
            <Route path="/top9" render={props => <LoggedIn {...props}
            ItemList={this.ItemList} userId={this.state.userId}/>} />

{/* <Route path="/" render={() => {
            return(
              <MyTop9 
                itemList={this.state.itemList}
              />)
          }} /> */}


            

          </div>
        </Router>
      
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