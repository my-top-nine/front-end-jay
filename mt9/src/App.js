import React, { Component } from 'react';
import ItemList from './components/Items/ItemList';
import InputForm from '../src/components/InputForm/InputForm';
import LoginBox from './components/Login/Login';
import RegisterBox from './components/Login/Register';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  
  

  // componentDidMount(){
  //   console.log('cdm running');

  //  axios
  //      .get('https://my-top-nine.herokuapp.com/api/categories')
  //      .then(res => {
  //          console.log(res);
  //          this.setState({ categories: res.data });
  //        })
  //        .catch(err => {
  //          console.log(err);
  //          this.setState({ error: err });
  //        });
  // }






  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div>
          <div className="box-controller">
            <button className="controller" onClick={this.showLoginBox}>Login</button>
            <button className="controller" onClick={this.showRegisterBox}>Register</button>
          </div>
          <div className="box-container">
            {this.state.isLoginOpen && <LoginBox />}
            {this.state.isRegisterOpen && <RegisterBox />}
          </div>
        </div>
        
        
        {/* <ItemList name={this.state.name}/>
        <InputForm  addItem={this.addItem} /> */}
      </div>
    );
  }
}

export default App;