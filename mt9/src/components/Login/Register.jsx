import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { 
  Button,
  FormGroup,
  Form,
  Label,
  Input
} from 'reactstrap';

class RegisterBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            creds: { 
                username: '',
                password: '',
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

    submitRegister = (e) => {
        e.preventDefault();
        axios.post('https://top9backend.herokuapp.com/api/register', this.state.creds)
          .then(res => {
            console.log(res);
            let userId = localStorage.setItem('user_id', res.data.id);
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
 
export default RegisterBox;