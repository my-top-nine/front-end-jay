import React, { Component } from 'react';
import { getJwt } from '../helpers/jwt';
import 'bootstrap/dist/css/bootstrap.css';
import { 
    Button,
    FormGroup,
    Form,
    Label,
    Input
 } from 'reactstrap';

import axios from 'axios';

class LoginBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            creds: {
                username: "",
                password: "",
            },
            style: {
                
                width: '100%'
            },
            center: {
                justifyContent: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'

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
                // this.props.history.push('/Protected')
            
                }

            })
            .catch(err => {
            console.log(err);
            
            });
        
    }
    
    render() { 
        console.log(this.state.creds);
        console.log(this.state.password);
        console.log(this.props.history)

        return (
            
            <div>
                <div className="box-controller">
                    <div>Login</div>
                </div>
                <div className="box">
                    

                    

                    <Form style={this.state.center}>
                        <FormGroup style={this.state.center}>

                            <Label htmlFor="username">Username</Label>
                            
                            <Input style={this.state.style} type="text" name="username" className="login-input"  placeholder="Username" value={this.state.creds.username} onChange={this.change}/>
                            
                        </FormGroup>
                        <FormGroup style={this.state.center}>
                            <Label htmlFor="password">Password</Label>
                            <Input style={this.state.style} type="password" name="password" className="login-input"  placeholder="Password" value={this.state.creds.password} onChange={this.change}/>
                        </FormGroup>
                    </Form>







                    <div className="input">

                    </div>
                    <Button outline color="primary" type="button"  onClick={this.submitLogin}>Submit</Button>{' '}
                    
                </div>
            </div>
        )
    }
}


export default LoginBox;