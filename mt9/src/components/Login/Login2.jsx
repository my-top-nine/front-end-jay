import React, { Component } from 'react';

 class Login2 extends Component {
     constructor(){
         super()
         this.state = { 

          }
     }

     render() { 
         return ( 
             <div className="center">
                <div className="card">
                    <h1>Login</h1>
                    <form action="">
                        <input 
                        type="text" 
                        placeholder="username"
                        name="username"
                        onChange={this.handleChange}/>
                    </form>
                </div>
             </div>
          );
     }
     handleChange = (e) => {
         this.setState({
             [e.target.name]: e.target.value
         })
     }
 }
  
 export default Login2;
