import React, { Component } from 'react';
import axios from 'axios';

class RegisterBox extends Component {
    constructor(props){
        super(props);
        this.state = { 
            
         };
         
    }



    
    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    submitRegister = (e) => {
        axios.post('https://top9backend.herokuapp.com/api/register', {
            username: this.state.username,
            password: this.state.password
          })
          .then(res => {
            console.log(res);
            this.setState({ 
                username: res.data.username, 
                password: res.data.password 
            });
          })
          .catch(err => {
            console.log(err);
            this.setState({ error: err });
          });
          
          e.preventDefault();
    }
    
    render() { 
        console.log(localStorage.getItem('token'));

        return(
            
            <div>
                <div className="controller">Register</div>
                
                <div className="box">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.onUsernameChange}/>

                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange}/>

                    </div>
                    <button type="button" className="login-button" onClick={this.submitRegister}>Submit</button>
                </div>
            </div>
        )
    }
}
 
export default RegisterBox;