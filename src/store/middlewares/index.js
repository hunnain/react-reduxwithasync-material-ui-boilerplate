import login_signup_action from '../actions/login_signup_action';
import firebase from 'firebase'
import history from '../../routers/history';

export default class SignupMiddleware{
     static asyncSignup(data){
        //  console.log('test',data.email)
          return (dispatch)=>{
             dispatch(login_signup_action.register()) 
            //  console.log(login_signup_action.register()) 
         
         firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then((snap)=>{
             delete data.password
             firebase.database().ref('chatapp').child(`users/${snap.uid}`).set(data).then((snap)=>{
              dispatch(login_signup_action.register_success())
            })
             .catch((error)=>{
              dispatch(login_signup_action.register_failed(error))
             })
         }).catch((error)=>{
            dispatch(login_signup_action.register_failed(error))
         })
        }
        
     }
}