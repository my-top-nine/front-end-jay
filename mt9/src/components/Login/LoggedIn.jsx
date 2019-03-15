import React, { Component } from 'react';
import { getJwt } from '../helpers/jwt';
import { withRouter } from 'react-router-dom';
import UserItems from '../../components/User/UserItems';
import axios from 'axios';

class LoggedIn extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            creds: { 
                username: '',
                password: '',
            }
         }
    }


    componentDidMount() {

            
        axios
            .get(`https://top9backend.herokuapp.com/api/users`)
            .then(res => {
            console.log(res);
            this.setState({ creds: res.data });
            })
            .catch(err => {
            console.log(err);
           
            });

        const jwt = getJwt();
        if(!jwt) {
            this.props.history.push('/')
        } 
        axios.get( `https://my-top-nine.herokuapp.com/api/users` , { headers: {Authorization: `Bearer ${jwt}`}})
            .then(res => this.setState({
                creds: res.data
                
            }))
            .catch(err => {
                localStorage.removeItem('token');
                this.props.history.push('/Protected');
            })
    }


    
    render() { 
        console.log(this.state.creds);
        if(this.state.creds.username === '') {
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