import firebase from 'firebase';
import history from '../../routers/history';
import login_signup_reducer from '../reducers/login_signup_reducers';

export default class login_signup_action{
      //Action Types
    static REGISTER = 'REGISTER';
    static REGISTER_SUCCESS = 'REGISTER_SUCCESS';
    static REGISTER_FAILED = 'REGISTER_FAILED'

    // static ichaneUserName = (value)=>{
    //       return {
    //         //   dispatch({type:'USERNAME',payload:value})
    //         type:'USERNAME',
    //         payload:value
    //       }
    //   }
    static register=()=>{
        return{
            type:'REGISTER'
        }
    }
    static register_success=()=>{
        return{
            type:'REGISTER_SUCCESS'
        }
    }
    static register_failed=(error)=>{
        return{
            type:'REGISTER_FAILED',
            payload:error.message
        }
    }
    //   static signupAction=(user)=>{
    //        console.log("user",user)
    //        //Adding Firebase to send recive
    //        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then((createdUser)=>{
    //            console.log("User Signup Sucessfully",createdUser.uid);
    //            delete user.password;
    //            user.uid = createdUser.uid;
    //            firebase.database().ref('chatapp/').set('users').then(()=>{
    //                firebase.database().ref('chatapp/').once('value').then((snap)=>{
    //                    let allUsers = snap.val();
    //                    let currentUserUid = firebase.auth().currentUser.uid;
    //                 //    dispatch({type:'ALLUSERS',payload:allUsers})
    //                 return{
    //                     type:'ALLUSERS',
    //                     payload:allUsers
    //                 }
    //                 //    dispatch({type:'CURRENTUSER',payload:currentUserUid})
    //                 return{
    //                     type:'CURRENTUSER',
    //                     payload:currentUserUid
    //                 }
    //                 //    firebase.database().ref('message/').once('value').then((messagesDta)=>{
    //                 //       let messages = messagesDta.val();
    //                 //       console.log(messages)
    //                 //    })
    //                })
    //            })
    //        })
    //   }
      //Login Action
    //   const loginAction=(user)=>{
        
    //   }
}
