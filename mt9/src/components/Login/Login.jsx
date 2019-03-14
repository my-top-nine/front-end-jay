import React, { Component } from 'react';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';

class LoginBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            creds: {
                username: "",
                password: "",
                err: null
            }
         };
    }



   


    change = e => {
        this.setState({
          creds: {
            ...this.state.creds,
            [e.target.name]: e.target.value
          }
        })
      }



    // onUsernameChange = (e) => {
    //     this.setState({ username: e.target.value });
    // }

    // onPasswordChange = (e) => {
    //     this.setState({ password: e.target.value });
    // }

    submitLogin = (e) => {
        console.log(this.state.creds);
        e.preventDefault();
        axios
            .post('https://top9backend.herokuapp.com/api/login', this.state.creds)
            .then(res => {
            console.log(res.data);{
                localStorage.setItem('token', res.data.jwt);
                this.props.history.push('/Protected')
            
                }

            })
            .catch(err => {
            console.log(err);
            
            });
        
    }
    
    render() { 
        console.log(this.state.creds);
        console.log(this.state.password);
        return (
            <div>
                <div className="box-controller">
                    <div>Login</div>
                </div>
                <div className="box">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input"  placeholder="Username" value={this.state.creds.username} onChange={this.change}/>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input"  placeholder="Password" value={this.state.creds.password} onChange={this.change}/>
                    </div>
                    <button type="button" className="login-button" onClick={this.submitLogin}>Submit</button>
                </div>
            </div>
        )
    }
}


export default LoginBox;