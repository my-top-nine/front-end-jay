import React, { Component } from 'react';


class RegisterBox extends Component {
    constructor(props){
        super(props);
        this.state = { 
            username: "",
            password: "",
            errors: []
         };
    }

    showValidationErr(elm, msg) {
        this.setState((prevState) => ({
            errors: [
                ...prevState.errors,
                { elm, msg}
            ]
        }))
    }

    clearValidationErr(elm){
        this.setState((prevState) => {
            let newArr = [];
            for (let err of prevState.errors) {
                if (elm != err.elm) {
                    newArr.push(err);
                }
            }
            return {errors: newArr};
        })
    }

    onUsernameChange(e) {
        this.setState({ username: e.target.value });
    }

    onPasswordChange(e){
        this.setState({ password: e.target.value });
    }

    submiRegister(e){
        if (this.state.username == ""){
            this.showValidationErr("username", "Username Cannot be Empty")
        } if (this.state.password == ""){
            this.showValidationErr("email", "Password Cannot be Empty")
        }
    }
    
    render() { 

        let usernameErr = null, passwordErr = null;

        for(let err of this.state.errors) {
            if(err.elm == "username"){
                usernameErr = err.msg;
            } if (err.elm == "password"){
                passwordErr = err.msg;
            }
        }

        return(
            <div>
                <div className="controller">Register</div>
                
                <div className="box">
                    <div className="input">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" className="login-input" placeholder="Username" onChange={this.onUsernameChange}/>
                        <small className="danger-error"> {usernameErr ? usernameErr : ""} </small>
                    </div>
                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" className="login-input" placeholder="Password" onChange={this.onPasswordChange}/>
                        <small className="danger-error"> {passwordErr ? passwordErr : ""} </small>
                    </div>
                    <button type="button" className="login-button" onClick={this.submitRegister}>Submit</button>
                </div>
            </div>
        )
    }
}
 
export default RegisterBox;