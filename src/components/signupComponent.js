import React, { Component } from 'react';
import './styles/styles.css';
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types';//We used proptypes to integrate Styles with our class
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Radio,{ RadioGroup } from 'material-ui/Radio';
import { FormLabel, FormControl, FormControlLabel, FormHelperText } from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import { LinearProgress } from 'material-ui/Progress';//Loading material ui
import history from '../routers/history';//History push
//Material Css
const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: '100',
    },
    button: {
        margin: theme.spacing.unit,
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
      progress: {
        margin: `0 ${theme.spacing.unit * 2}px`,
      },
  });
class SignupComponent extends Component{
    constructor(props){
        super(props)
       this.state={
            snackbaropen:false,
            transition: null,
        }
        this.classes={props}
    } 
    handleClose(){
      this.state = false
    }
    render(){
        return(
            <div>
                <DocumentTitle title="Signup Social App">
                
                <div className="signupContainer">
                {(this.props.isState.errormessage)?
                this.state.snackbaropen = true   
              :
              this.state.snackbaropen=false  
              }
              <Snackbar anchorOrigin={{ vertical:'bottom', horizontal:'right' }} open={this.state.snackbaropen} onMouseOver={this.handleClose.bind(this)} SnackbarContentProps={{ 'aria-describedby': 'message-id', }} message={<span id="formchecking">{this.props.isState.errormessage}</span>} />
              {(this.props.login_signup_reducer.error)?
              this.state.snackbaropen = true
              :
              this.state.snackbaropen=false
              }
              {/* Snackbar of Firebase error */}
              <Snackbar anchorOrigin={{ vertical:'top', horizontal:'left' }} open={this.state.snackbaropen} onClose={this.state.snackbaropen=false} SnackbarContentProps={{ 'aria-describedby': 'message-id', }} message={<span onClick={this.state.snackbaropen=false} id="firebaseformchecking">{this.props.login_signup_reducer.errorMessage}</span>} />
                <h2>Welcome in Social App</h2>
                <h2>{this.props.isState.signuperrormessage}</h2>
                <div className="signupForm">
                {(this.props.login_signup_reducer.loading)? <LinearProgress variant="query" />:''}
                <h3 className="signuptxt">Signup</h3>
                <form method="POST"  className={this.classes.container} noValidate autoComplete="off" >
                <TextField required label="UserName" placeholder="UserName" id="signupinput" defaultValue="" className={this.classes.textField} helperText="Example: John" onChange={this.props.issignupInputHandler} name="userName"/>
                <TextField required label="Email" placeholder="Email" id="signupinput" defaultValue="" className={this.classes.textField} helperText="Example: abc@abc.com" onChange={this.props.issignupInputHandler} name="email"/>
                <TextField required type="password" label="Password" placeholder="Password" id="signupinput" defaultValue="" className={this.classes.textField} helperText="Atleast 6 Character Required" onChange={this.props.issignupInputHandler} name="password"/>
                <TextField id="signupinput" label="Birthday" type="date" className={this.classes.textField} InputLabelProps={{ shrink: true, }} onChange={this.props.issignupInputHandler} name="age" /> 
                <FormLabel id="signupchecboxtxt" component="legend">Gender</FormLabel>
                <RadioGroup aria-label="gender" name="gender" id="signupcheckbox" className={this.classes.group} value={this.props.isState.gender} onChange={this.props.issignupInputHandler} >
                  <FormControlLabel  value="male" control={<Radio />} label="Male" name="male"/>
                  <FormControlLabel  value="female" control={<Radio />} label="Female" name="female"/>
                </RadioGroup>
                <Button color="primary" onClick={this.props.issignupsubmit} id="signupinput" className={this.classes.button}>Signup</Button>
                </form>
                {/* If user registered is true so its directly go to login page */}
               {(this.props.login_signup_reducer.userRegistered)?
                 history.push('/'):
                 ''
              }
                </div>
                </div>
                </DocumentTitle>
            </div>
        )
    }
}
export default SignupComponent;