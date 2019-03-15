import React, { Component } from 'react';
import { getJwt } from '../helpers/jwt';
import axios from 'axios';
import ItemForm from '../Items/ItemForm';

class UserItems extends Component {
  constructor(props){
    super(props)
    this.state = {
      userTopNine: [],
      user: {
        username: '',
        password: '',
        isLoggedIn: false,
        loginErr: false,
        userId: null,
        userTopNine: [],
        deleted: false
      }
    }
  }



  

  getUserTopNine = () => {
    console.log('useritems running');
    console.log(this.props.userId);
    
    const jwt = getJwt();

    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': jwt
      }})
    .get(`https://top9backend.herokuapp.com/api/users/${this.props.userId}/topnine`)
    .then(res => {
    console.log(res);
    this.setState({ user: {
      ...this.state.user,
      userTopNine: res.data
    } });
    })
    .catch(err => {
    console.log(err);
   
    });
    return;
  }

  addToTopNine = (e, position, item) => {
    e.preventDefault();
    const jwt = getJwt();
    
    const newTopItem = {
      id: item.id,
      category: item.category,
      position: position
    }

    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': jwt
      }
    }).post(`https://top9backend.herokuapp.com/api/users/${this.props.userId}/topnine`, newTopItem)
    .then(res => {
      this.setState({
        userTopNine: res.data
      })
    })
    .catch(err => console.log(err));
  }

  postAddItem = (e, newItem, history) => {
    e.preventDefault();
    const jwt = getJwt();
    console.log(newItem)
    // history.replace('/');
    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': jwt
      }
    }).post(`https://top9backend.herokuapp.com/api/users/${this.props.userId}/topnine`, newItem)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    this.getUserTopNine();
  }
  
  render() { 
    
    
    return ( 
          <div>
            
            {this.getUserTopNine()} 
             <ItemForm postAddItem={this.addToTopNine}/>
          </div>
      )
  }
}

export default UserItems;



