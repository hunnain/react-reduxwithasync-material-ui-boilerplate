import login_signup_action from '../actions/login_signup_action';
import firebase from 'firebase'

export default class SignupMiddleware{
     static asyncSignup(data){
         console.log('test',data.email)
          return (dispatch)=>{
             dispatch(login_signup_action.register()) 
            //  console.log(login_signup_action.register()) 
         }
         firebase.auth().createUserWithEmailAndPassword(data.email,data.password).then((snap)=>{
             delete data.password
             firebase.database().ref('chatapp').child(`users/${snap.uid}`).set(data).then((snap)=>{
                 return (dispatch)=>dispatch(login_signup_action.register_success)
             }).catch((error)=>{
              return (dispatch)=>dispatch(login_signup_action.register_failed(error))
             })
         }).catch((error)=>{
            return (dispatch)=>dispatch(login_signup_action.register_failed(error))
         })
        
     }
}