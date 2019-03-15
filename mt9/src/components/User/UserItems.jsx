import React, { Component } from 'react';
import axios from 'axios';

class UserItems extends Component {
  constructor(props){
    super(props)
    this.state = {
      userTopNine: []
    }
  }

  componentDidMount(){
    axios
    .get(`https://top9backend.herokuapp.com/api/users`)
    .then(res => {
    console.log(res);
    this.setState({ creds: res.data });
    })
    .catch(err => {
    console.log(err);
   
    });
  }
  
  render() { 
    return ( 
      <div> test </div>
     );
  }
}
 
export default UserItems;



