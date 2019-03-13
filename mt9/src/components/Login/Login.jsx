import React, { Component } from 'react';

class LoginBox extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    submitLogin(e){

    }
    
    render() { 
        return (
            <div>
                <div className="box-controller">
                    <div>Login</div>
                </div>
                <div className="box">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"/>
                    </div>
                    <button type="button" className="login-button" onClick={this.submitLogin}>Submit</button>
                </div>
            </div>
        )
    }
}


export default LoginBox;