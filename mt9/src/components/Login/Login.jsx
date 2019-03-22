import React, { Component } from "react";
import { getJwt } from "./jwt";
import "bootstrap/dist/css/bootstrap.css";
import { Button, FormGroup, Form, Label, Input } from "reactstrap";
import * as JWT from "jwt-decode";

import axios from "axios";
import auth from "./AuthService";

class LoginBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      creds: {
        username: "",
        password: ""
      },
      style: {
        width: "100%"
      },
      center: {
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }
    };
  }

  change = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };

  // onUsernameChange = (e) => {
  //     this.setState({ username: e.target.value });
  // }

  // onPasswordChange = (e) => {
  //     this.setState({ password: e.target.value });
  // }

  submitLogin = e => {
    console.log(this.state.creds);
    e.preventDefault();
    axios
      .post("https://top9backend.herokuapp.com/api/login", this.state.creds)
      .then(res => {
        console.log(res);
        {
          localStorage.setItem("token", res.data.token);

          let token = getJwt("token");

          let decoded = JWT(token);
          console.log(decoded);

          localStorage.setItem("user_id", decoded.id);

          localStorage.setItem("username", decoded.username);

          // this.props.history.push('/Protected');
          auth.login(() => {
            this.props.history.push("/top9");
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <div className="box-controller">
          <div>Login</div>
        </div>
        <div className="box">
          <Form style={this.state.center} onSubmit={this.props.getUser}>
            <FormGroup style={this.state.center}>
              <Label htmlFor="username">Username</Label>

              <Input
                style={this.state.style}
                type="text"
                name="username"
                className="login-input"
                placeholder="Username"
                value={this.state.creds.username}
                onChange={this.change}
              />
            </FormGroup>
            <FormGroup style={this.state.center}>
              <Label htmlFor="password">Password</Label>
              <Input
                style={this.state.style}
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
                value={this.state.creds.password}
                onChange={this.change}
              />
            </FormGroup>

            <Button
              outline
              color="primary"
              type="button"
              onClick={this.submitLogin}
            >
              Submit
            </Button>
          </Form>

          <div className="input" />
        </div>
      </div>
    );
  }
}

export default LoginBox;
