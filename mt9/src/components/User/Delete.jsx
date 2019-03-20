import React, { Component } from 'react';
import axios from 'axios';

class  extends Component {
    state = {  }
    render() { 
        return (  );
    }
}
 
export default ;


class Delete extends Component {
    constructor(){
        super()
        this.state = {

        }
    } 

    deleteItem = (i) => {
    axios
      .create({
        headers: {
          "Content-Type": "application/json",
          Authorization: getJwt("token")
        }
      })
      .delete(
        `https://top9backend.herokuapp.com/api/users/${localStorage.getItem("user_id")}/topnine/${i}`
      )
      .then(res => {
        console.log(res);
        
      })

    }


    return (

    )
}
 
export default Delete;