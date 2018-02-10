import React, { Component } from 'react';
import { connect } from 'react-redux';
import LoginComponent from '../components/loginComponent';
import SignupMiddleware from '../store/middlewares/index'

class Login extends Component{
    constructor(props){
        super(props)
         this.state={
             email:'',
             password:'',
             loginTime:'',
             errormessage:false
         }
    }
    loginInputHandler(ev){
        ev.preventDefault();
        var date = new Date();
        this.setState({
            [ev.target.name]:ev.target.value.toLowerCase(),
            loginTime:date.toUTCString()
        })
    }
    submitInputHandler(ev){
        let userEmailRequired = false;
        let userPasswordRequired = false;
        let atpos = this.state.email.indexOf("@");
        let dotpos = this.state.email.lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=this.state.email.length){
            userPasswordRequired = true;
            console.log("Email incorrect")
            return this.setState({errormessage:"Please Type Correct Email Address"})
        }else if(userPasswordRequired === false){
            if(this.state.password.length <= 1){
                console.log("Password incorrect")
                return  this.setState({errormessage:"Password is Required"})
            }
        }
        if(userEmailRequired===false ||userPasswordRequired===false){
            let loginData={
                email:this.state.email,
                password:this.state.password,
                loginTime:this.state.loginTime
            }
            console.log("Login Data",loginData)
            this.props.login(loginData)
        }else{
            console.log("Something wrong")
            return this.setState({errormessage:"Something Went Wrong Try Again later."})
        }
    }
    render(){
        return(
            <div>
                <LoginComponent isState={this.state} isloginInputHandler={this.loginInputHandler.bind(this)} issubmitInputHandler={this.submitInputHandler.bind(this)} login_signup_reducer={this.props.login_signup_reducer}/>
            </div>
        )
    }
}
// Redux Map State To Props
function mapStateToProps(state){
    return{
        login_signup_reducer:state.login_signup_reducer
    }
}
// Redux Map Dispacth To Props
function mapDispatchToProps(dispatch){
    return{
        login:(loginData)=>{
            dispatch(SignupMiddleware.asyncLogin(loginData))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Login);