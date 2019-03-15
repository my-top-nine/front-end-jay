import axios from 'axios';


export default class AuthService{
    constructor(domain){
        this.domain = domain || 'https://top9backend.herokuapp.com/api/'
    }
    login(username, password){
        return (
            axios
                .post('https://top9backend.herokuapp.com/api/login', {
                    username,
                    password
                })
                .then(res => {
                console.log(res.data);{
                    this.setToken(res.data.jwt);
                    return Promise.resolve(res);
                    }
    
                })
                .catch(err => {
                console.log(err);
                
                })
        )
    }
}