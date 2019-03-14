import React, { Component } from 'react';
import axios from 'axios';

class RegisterBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            creds: { 
                username: '',
                password: '',
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

    submitRegister = (e) => {
        e.preventDefault();
        axios.post('https://top9backend.herokuapp.com/api/register', this.state.creds)
          .then(res => {
            console.log(res);

          })
          .catch(err => {
            console.log(err);
            
          });
          
          
    }
    
    render() { 
        console.log(localStorage.getItem('token'));
        console.log(this.state.creds);

        return(
            
            <div>
                <div className="controller">Register</div>
                
                <div className="box">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username" value={this.state.creds.username} onChange={this.change}/>

                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" value={this.state.creds.password} onChange={this.change}/>

                    </div>
                    <button type="button" className="login-button" onClick={this.submitRegister}>Submit</button>
                </div>
            </div>
        )
    }
}
 
export default RegisterBox;