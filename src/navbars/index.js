import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
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
          <Link to="/"><Button id="navbtn" className={classes.navbtn} color="default">Login</Button></Link>
          <Link to="/signup"><Button color="default">Signup</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
