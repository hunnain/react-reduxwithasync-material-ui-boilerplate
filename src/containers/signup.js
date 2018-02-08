import React, { Component } from 'react';
import { connect } from 'react-redux';
import login_signup_action from '../store/actions/login_signup_action';
import SignupComponent from '../components/signupComponent';
import SignupMiddleware from '../store/middlewares/index'
class Signup extends Component {
    constructor(props){
        super(props)
        this.state={
            userName:'',
            email:'',
            password:'',
            age:undefined,
            gender:null,
            joiningdate:{},
            errormessage:false
        }
    }
signupInputHandler(ev){
    ev.preventDefault()
    
    this.setState({
        [ev.target.name]:ev.target.value
    })
}
signupsubmit(ev){
    let userNameRequired = false;
    let userEmailRequired = false;
    let userPasswordRequired = false;
    let userAgeRequired = false;
    let userGenderRequired = false;
    if(this.state.userName.length === 0){
        return (
            userNameRequired = true,
            this.setState({
                errormessage:"Please Type your UserName"
            })
        )
    }else if(userNameRequired === false){
        var atpos = this.state.email.indexOf("@");
        var dotpos = this.state.email.lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=this.state.email.length){
            userEmailRequired = true
            return this.setState({errormessage:"Please Type Correct Email Address"})
        }
    }if(userEmailRequired === false){
        if(this.state.password.length <= 5){
            userPasswordRequired= true
            return  this.setState({errormessage:"Password Should be atleast 6 Charachter"})
        }
    }if(userPasswordRequired === false){
        if(this.state.age === undefined ){
            userAgeRequired = true
            return  this.setState({errormessage:"Age is Required"})
        }
    }if(userAgeRequired === false){
       if(this.state.gender=== null){
           userGenderRequired = true
          return this.setState({errormessage:"Gender is Required"})
       }
    }
    if(userNameRequired===false || userEmailRequired===false ||userPasswordRequired===false || userAgeRequired===false || userGenderRequired===false){
      console.log("suvmit",this.state) 
      let sitejoindate = Date.parse(new Date());
      var d = new Date(sitejoindate);
      this.state.joiningdate = d;
      let userData ={
          email:this.state.email,
          password:this.state.password,
          username:this.state.userName,
          age:this.state.age,
          gender:this.state.gender,
          joiningdate:this.state.joiningdate
      }
      this.props.signup(userData);
    }else{
        return this.state.signuperrormessage = "Something Went Wrong"
    }
    
   
}
    render(){
        console.log(this.props.login_signup_reducer)
        return(
            <SignupComponent isState={this.state} issignupInputHandler={this.signupInputHandler.bind(this)} issignupsubmit={this.signupsubmit.bind(this)} login_signup_reducer={this.props.login_signup_reducer}/>
        )
    }
}

// Map State to Props
function mapStateToProp(state) {
    console.log(state.login_signup_reducer)
    return {
        login_signup_reducer : state.login_signup_reducer
    }
}
//Map Dispatch to Props
function mapDispatchToProps(dispatch){
    return{
        signup:(userInfo)=>{
            // dispatch(login_signup_action.signupAction(userInfo))
            dispatch(SignupMiddleware.asyncSignup(userInfo))
        }
    }
}
export default connect(mapStateToProp,mapDispatchToProps)(Signup);