import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SignupMiddleware from '../store/middlewares/index'
import './styles.css'

import './styles.css'

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: 30,
    marginRight: 30,
  },
  titletext:{
    fontSize:25
  },
  navbtn:{
     textDecoration:"none"
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <div className={classes.menuButton}>
           <p className={classes.titletext}>Social App</p>
          </div>
          <Typography variant="title" color="inherit" className={classes.flex}>
          </Typography>
         {(props.session.authenticated)?
         (
           <div>
          <Link to="/home" id="navlink"><Button color="default">Home</Button></Link>
          <Link to="/profile" id="navlink"><Button color="default">Profile</Button></Link>
          <Button color="default" id="navlink" onClick={props.logout}>Logout</Button>
          </div>
          )
        :(
          <div>
        <Link to="/" id="navlink"><Button id="navbtn" className={classes.navbtn} color="default">Login</Button></Link>
        <Link to="/signup" id="navlink"><Button id="navbtn" color="default">Signup</Button></Link>
        </div>
        )
        }
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};
// Redux Map State To Props
function mapStateToProps(state){
  console.log("Navbar",state)
  return{
    login_signup_reducer:state.login_signup_reducer,
    session:state.session
  }
}
function mapDispatchToProps(dispatch){
  console.log("Dispatch",dispatch)
  return{
    logout:()=>{
    dispatch(SignupMiddleware.asyncLogout())
    }
  }
}
// export default compose(
//   withStyles(styles, { name: 'ButtonAppBar' }),
//   connect(mapStateToProps,mapDispatchToProps)
// )(ButtonAppBar);
export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(ButtonAppBar))