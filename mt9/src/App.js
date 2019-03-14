import React, { Component } from 'react';
import ItemList from './components/Items/ItemList';
import InputForm from '../src/components/InputForm/InputForm';
import LoginBox from './components/Login/Login';
import RegisterBox from './components/Login/Register';
import LoginPage from './components/Login/LoginPage';
import LoggedIn from './components/Login/LoggedIn';
import axios from 'axios';
import { Link, Route, BrowserRouter as Router  } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ItemList: [],
      isLoginOpen: true,
      isRegisterOpen: false
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
  
  

  componentDidMount(){
    console.log('cdm running');

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
          <div>
            <ul>
              <li>
                <Link to="/top9">Home</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
            </ul>
            {/* <Route path="/auth" component={LoggedIn}/> */}
            <Route path="/top9" render={props => <ItemList {...props}
            ItemList={this.ItemList}/>} />
            <Route exact path='/' render= {props => <LoginPage {...props}
            showRegisterBox={this.showRegisterBox} 
            showLoginBox={this.showLoginBox} 
            isLoginOpen={this.state.isLoginOpen} 
            isRegisterOpen={this.state.isRegisterOpen}
          />} />
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