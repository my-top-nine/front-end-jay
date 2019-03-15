import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import decode from 'jwt-decode';

import Login from '../Login/Login';
import User from './User';
import Item from '../Items/Items.jsx';

import axios from 'axios';

class MyTop9 extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: '',
        isLoggedIn: false,
        loginErr: false,
        userId: null,
        userTopNine: [],
        deleted: false
      },
      newUser: {
        username: '',
        password: ''
      },
      addingItem: true,
      updatedItemList: []
    }
  }

  getLogin = (creds) => {
    axios
    .post('https://top9backend.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.token);
      this.setState({ user: {
        ...this.state.user,
        isLoggedIn: true
      }})
    })
    .catch(err => {
      console.log(err);
      this.setState({ user: {...this.state.user, loginErr: true} })
    });
  }

  postNewUser = newCreds => {
    axios
    .post('https://top9backend.herokuapp.com/api/register', newCreds)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    this.setState({ user: {
      ...this.state.user,
      loginErr: false
    } })
  }

  getUser = () => {
    const user = decode(localStorage.getItem('userToken'));
    this.setState({ user: {
      ...this.state.user,
      userId: user.id,
      username: user.username
      } })
  }

  getUserTopNine = () => {
    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
     }).get(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/topnine`)
     .then(res => {
       this.setState({ user: {
         ...this.state.user,
         userTopNine: res.data
       }})
     })
     .catch(err => console.log(err));
  }

  addToTopNine = (e, position, item) => {
    e.preventDefault();
    const newTopItem = {
      id: item.id,
      category: item.category,
      position: position
    }

    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
    }).post(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/topnine`, newTopItem)
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }

  deleteFromTopNine = (e, item) => {
    e.preventDefault();
    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
    }).delete(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/topnine/${item.Id}`)
    .then(res => {
      console.log(res);
      this.setState({ user: {
        ...this.state.user,
        deleted: true
      } })
    })
    .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.user.isLoggedIn !== this.state.user.isLoggedIn) {
      this.setState({ user: {
        ...this.state.user,
        loginErr: false
      } });
    }

    if((prevState.user.userId !== this.state.user.userId) || this.state.user.deleted) {
      this.getUserTopNine();
      this.setState({ user: {
        ...this.state.user,
        deleted: false
      } });
    }
  }

  postAddNewItem = (e, newItem, history) => {
    console.log(newItem)
    history.replace('/');
    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
    }).post(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/add`, newItem)
    .then(res => console.log(res))
    .catch(err => console.log(err));
    this.getNewList();
  }

  getNewList = () => {
    axios
    .get('https://top9backend.herokuapp.com/api/guest')
    .then(res => {
      this.setState({ itemList: res.data });
    })
    .catch(err => {
      this.setState({ error: err })
    })

    axios.create({ 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken')
      }
    }).get(`https://top9backend.herokuapp.com/api/users/${this.state.user.userId}/all`)
    .then(res => {
      console.log(res.data)
      this.setState({ updatedItemList: res.data })
    })
    .catch(err => console.log(err));
  }

  render() {
    return(
      <div>
        <Route path="/" render={() => {
          return(
            <>
            <Login 
              isLoggedIn={this.state.user.isLoggedIn} 
              loginErr={this.state.user.loginErr}
              postNewUser={this.postNewUser} 
              getLogin={this.getLogin} 
            />
            <User 
            isLoggedIn={this.state.user.isLoggedIn}
            getUser={this.getUser} 
            getUserTopNine={this.getUserTopNine}
            deleteFromTopNine={this.deleteFromTopNine}
            postAddNewItem={this.postAddNewItem}
            userId={this.state.user.userId}
            username={this.state.user.username}
            userTopNine={this.state.user.userTopNine}
            />
            </>
          )
        }} />
        <Route path="/" render={() => {
          return(
            this.props.itemList.map((item, index) => <Item item={item} key={index}
              isLoggedIn={this.state.user.isLoggedIn}
              addToTopNine={this.addToTopNine}
            />)
          )}} />
      </div>
    )
  }
}

export default MyTop9;