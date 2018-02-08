import React, { Component } from 'react';
import { Router,Route,Link } from 'react-router-dom';
import history from './history';
import Navbar from '../navbars'
import Login from '../containers/login';
import Signup from '../containers/signup';
 class Routers extends Component{
     render(){
         return(
             <Router history={history}>
             <div>
                 <Navbar />
                 <Route exact path="/" component={Login} />
                 <Route path='/signup' component={Signup} />
                 </div>
             </Router>
         )
     }
 }
 export default Routers;