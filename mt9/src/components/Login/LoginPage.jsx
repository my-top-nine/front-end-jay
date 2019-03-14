import React, { Component } from 'react';
import LoginBox from './Login';
import RegisterBox from './Register';

class LoginPage extends Component {
    constructor (props) {
        super(props)

    }


    render() { 
        return ( 
            <div className="App">
            <div>
              <div className="box-controller">
                <button className="controller" onClick={this.props.showLoginBox}>Login</button>
                <button className="controller" onClick={this.props.showRegisterBox}>Register</button>
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