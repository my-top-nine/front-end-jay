import axios from 'axios';


class AuthService{
    constructor(){
        this.authenticated = true
        
    }
    login(cb)  {
        
        this.authenticated = true;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }
}

export default new AuthService();