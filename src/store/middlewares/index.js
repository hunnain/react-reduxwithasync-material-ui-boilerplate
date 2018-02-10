import login_signup_action from '../actions/login_signup_action';
import firebase from 'firebase'
import history from '../../routers/history';

export default class SignupMiddleware{
     static asyncSignup(data){
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
     static asyncLogin(data){
       return(dispatch)=>{
         dispatch(login_signup_action.login())
        //  console.log('data',data)
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((snap)=>{
          console.log("Signin",snap)
          firebase.database().ref('chatapp').child(`users/${snap.uid}`).on('value',(snapshot)=>{
            console.log('Data get',snapshot.val())
            // let loginData = snapshot.val()
            //  loginData.uid= snapshot.key()
            dispatch(login_signup_action.login_Success(snapshot.val()))
            console.log("Login Sucess")
          });
        }).catch((error)=>{
          dispatch(login_signup_action.login_Failed(error))
        })
       }
     }
}