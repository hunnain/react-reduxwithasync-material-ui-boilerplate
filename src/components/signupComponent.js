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
              <Snackbar anchorOrigin={{ vertical:'bottom', horizontal:'right' }} open={this.state.snackbaropen} onClose={this.state.snackbaropen=false} SnackbarContentProps={{ 'aria-describedby': 'message-id', }} message={<span id="message-id">{this.props.isState.errormessage}</span>} />
                <h2>Welcome in Social App</h2>
                <h2>{this.props.isState.signuperrormessage}</h2>
                <div className="signupForm">
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
                {/* <h2>{this.props.login_signup_reducer.errorMessage}</h2> */}
                {/* {console.log(this.props.login_signup_reducer.loading)} */}
                </div>
                </div>
                </DocumentTitle>
            </div>
        )
    }
}
export default SignupComponent;