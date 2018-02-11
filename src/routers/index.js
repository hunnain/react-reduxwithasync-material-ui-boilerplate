import React, { Component } from 'react';
import { Router,Route,Link } from 'react-router-dom';
import history from './history';
import Navbar from '../navbars'
import Login from '../containers/login';
import Signup from '../containers/signup';
import HomeContainer from '../containers/home/home';
import ProfileContainer from '../containers/profile/index'
import { sessionService } from 'redux-react-session';
 class Routers extends Component{
     render(){
         return(
             <Router history={history}>
             <div>
                 <Navbar />
                 <Route exact path="/" component={Login} />
                 <Route path='/signup' component={Signup} />
                 <Route path='/home' onEnter={sessionService.checkAuth} component={HomeContainer} />
                 <Route path='/profile' component={ProfileContainer} />
                 </div>
             </Router>
         )
     }
 }
 export default Routers;