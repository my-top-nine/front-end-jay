import React, { Component } from 'react';
import axios from 'axios';

class LoginBox extends Component {
    constructor(props){
        super(props);
        this.state = { 
            credentials: {
                username: "",
                password: ""
            }
         };
    }

    onUsernameChange = (e) => {
        this.setState({ username: e.target.value });
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    submitLogin(e){
        e.preventDefault();
        axios.post('https://top9backend.herokuapp.com/api/login', {
            username: this.state.username,
            password: this.state.password
          })
          .then(res => {
            console.log(res.data);
            localStorage.setItem('token', res.data.jwt);

          })
          .catch(err => {
            console.log(err);
            
          });
          this.props.getUserId(this.state.credentials.username);
            this.setState({
                credentials: {
                    username: '',
                    password: ''
                }
            });
    }
    
    render() { 
        console.log(this.state.username);
        console.log(this.state.password);
        return (
            <div>
                <div className="box-controller">
                    <div>Login</div>
                </div>
                <div className="box">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input"  placeholder="Username" onChange={this.onUsernameChange}/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input"  placeholder="Password" onChange={this.onPasswordChange}/>
                    </div>
                    <button type="button" className="login-button" onClick={this.submitLogin}>Submit</button>
                </div>
            </div>
        )
    }
}


export default LoginBox;