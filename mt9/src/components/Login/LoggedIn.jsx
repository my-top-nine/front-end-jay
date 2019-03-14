import React, { Component } from 'react';

class LoggedIn extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            user: undefined
         }
    }
    
    render() { 
        return ( 
            <div>Hello</div>
         );
    }
}
 
export default LoggedIn;