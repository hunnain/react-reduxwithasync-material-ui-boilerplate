import firebase from 'firebase';
import history from '../../routers/history';
import login_signup_reducer from '../reducers/login_signup_reducers';

export default class login_signup_action{
      //Action Types
    static REGISTER = 'REGISTER';
    static REGISTER_SUCCESS = 'REGISTER_SUCCESS';
    static REGISTER_FAILED = 'REGISTER_FAILED';
    static LOGIN = 'LOGIN';

    // Signup Actions
    static register=()=>{
        return{
            type:'REGISTER'
        }
    }
    static register_success=(success)=>{
        return{
            type:'REGISTER_SUCCESS',
            payload:success
        }
    }
    static register_failed=(error)=>{
        return{
            type:'REGISTER_FAILED',
            payload:error.message
        }
    }

    // Login Actions
    static login=()=>{
        return{
            type:'LOGIN'
        }
    }
}
