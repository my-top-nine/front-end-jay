import React, { Component } from 'react';
import { getJwt } from '../helpers/jwt';
import { withRouter } from 'react-router-dom';
import UserItems from '../../components/User/UserItems';
import axios from 'axios';

class LoggedIn extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            user: undefined
         }
    }


    componentDidMount() {

            
        axios
            .get(`https://top9backend.herokuapp.com/api/users`)
            .then(res => {
            console.log(res);
            this.setState({ user: res.data });
            })
            .catch(err => {
            console.log(err);
            this.setState({ error: err });
            });

        const jwt = getJwt();
        if(!jwt) {
            this.props.history.push('/')
        } 
        axios.get( `https://my-top-nine.herokuapp.com/api/users` , { headers: {Authorization: `Bearer ${jwt}`}})
            .then(res => res.setState({
                user: res.data
            }))
            .catch(err => {
                localStorage.removeItem('token');
                this.props.history.push('/');
            })
    }


    
    render() { 
        if(this.state.user === undefined) {
            return (
                <div>Loading...</div>
            )
        }
        return ( 
            <div><UserItems /></div>
         );
    }
}
 
export default withRouter(LoggedIn);