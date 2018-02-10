import React, { Component } from 'react';
import LoginComponent from '../components/loginComponent'
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
        this.setState({
            [ev.target.name]:ev.target.value.toLowerCase()
        })
    }
    submitInputHandler(ev){
        let userEmailRequired = false;
        let userPasswordRequired = false;
        let atpos = this.state.email.indexOf("@");
        let dotpos = this.state.email.lastIndexOf(".");
        if(atpos<1 || dotpos<atpos+2 || dotpos+2>=this.state.email.length){
            userPasswordRequired = true;
            return this.setState({errormessage:"Please Type Correct Email Address"})
        }else if(userPasswordRequired === false){
            if(this.state.password.length <= 1){
                return  this.setState({errormessage:"Password is Required"})
            }
        }
        if(userEmailRequired===false ||userPasswordRequired===false){
            
        }
    }
    render(){
        return(
            <div>
                <LoginComponent isState={this.state} isloginInputHandler={this.loginInputHandler.bind(this)}/>
            </div>
        )
    }
}
export default Login;