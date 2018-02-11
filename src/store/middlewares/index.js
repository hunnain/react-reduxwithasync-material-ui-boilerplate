import login_signup_action from '../actions/login_signup_action';
import firebase from 'firebase'
import history from '../../routers/history';
import { sessionService } from 'redux-react-session';

export default class SignupMiddleware{
  // Async Signup
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
    //  Async Login
     static asyncLogin(data){
       return(dispatch)=>{
         dispatch(login_signup_action.login())
        //  console.log('data',data)
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then((snap)=>{
          console.log("Signin",snap)
          firebase.database().ref('chatapp').child(`users/${snap.uid}`).on('value',(snapshot)=>{
            console.log('Data get',snapshot.val())
            dispatch(login_signup_action.login_Success(snapshot.val()))
            firebase.auth().onAuthStateChanged(function(user) {
              const {token} = user.uid
              // console.log("Tokensss",user.uid,snapshot.val())
              sessionService.saveSession({ token }).then(()=>{
                sessionService.saveUser(snapshot.val()).then(()=>{
                  history.replace('/signup')
                })
              })
              if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                console.log(user)
                // ...
              } else {
                console.log('You are signout')
              }
            });
            console.log("Login Sucess")
          });
        }).catch((error)=>{
          dispatch(login_signup_action.login_Failed(error))
        })
       }
     }
    //  Async Logout
    static asyncLogout(){
      console.log("firstasync")
      return(dispatch)=>{ 
        dispatch(login_signup_action.logout())
        console.log("asynlogout")
      firebase.auth().signOut().then(()=>{
        
          sessionService.deleteSession();
          sessionService.deleteUser();
          history.replace('/');
      }).catch((error)=>{
        console.log(error)
      })
    }
    }
}