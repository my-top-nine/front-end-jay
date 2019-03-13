import React, { Component } from 'react';


class RegisterBox extends Component {
    constructor(props){
        super(props);
        this.state = {  };
    }

    submiRegister(e){

    }
    
    render() { 
        return(
            <div>
                <div className="controller">Register</div>
                
                <div className="box">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username"/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password"/>
                    </div>
                    <button type="button" className="login-button" onClick={this.submitRegister}>Submit</button>
                </div>
            </div>
        )
    }
}
 
export default RegisterBox;