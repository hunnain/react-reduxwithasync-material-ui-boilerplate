import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignupMiddleware from '../../store/middlewares/index';
import HomeComponent from '../../components/home/home'

class HomeContainer extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <div>
                <HomeComponent session={this.props.session}/>
            </div>
        )
    }
}
  // Redux Map State To Props
  function mapStateToProps(state){
    return{
        login_signup_reducer:state.login_signup_reducer,
        session:state.session
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
export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)