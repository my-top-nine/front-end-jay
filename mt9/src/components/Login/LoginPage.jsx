import React, { Component } from 'react';
import LoginBox from './Login';
import RegisterBox from './Register';
import 'bootstrap/dist/css/bootstrap.css';
import { 
    Button,
    ButtonGroup
 } from 'reactstrap';

class LoginPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            user: {
              username: '',
              password: '',
              isLoggedIn: false,
              loginErr: false,
              userId: null
            },
            newUser: {
              username: '',
              password: ''
            },
            userTopNine: []
          }
    }


    render() { 
        return ( 
            <div className="App">
            <div>
              <div className="box-controller" style={{marginTop:'15%'}}>
                <ButtonGroup>
                  <Button className="controller" onClick={this.props.showLoginBox}>Login</Button>
                  <Button className="controller" onClick={this.props.showRegisterBox}>Register</Button>
                </ButtonGroup>
              </div>
              <div className="box-container">
              {console.log(this.props)}
                {this.props.isLoginOpen && <LoginBox />}
                {this.props.isRegisterOpen && <RegisterBox  />}
              </div>
            </div>
            
            
            {/* <ItemList name={this.state.name}/>
            <InputForm  addItem={this.addItem} /> */}
          </div>
         );
    }
}
 
export default LoginPage ;