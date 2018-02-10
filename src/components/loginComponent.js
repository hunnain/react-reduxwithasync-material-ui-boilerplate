import React, { Component } from 'react';
import './styles/styles.css';
import DocumentTitle from 'react-document-title'
import PropTypes from 'prop-types';//We used proptypes to integrate Styles with our class
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import { LinearProgress } from 'material-ui/Progress';//Loading material ui
import { FormLabel, FormControl, FormGroup, FormControlLabel, FormHelperText,} from 'material-ui/Form';
import Checkbox from 'material-ui/Checkbox';
import history from '../routers/history';//History push

// Material ui css
const styles = theme => ({
    root: theme.mixins.gutters({
      paddingTop: 16,
      paddingBottom: 16,
      marginTop: theme.spacing.unit * 3,
    }),
    button: {
        margin: theme.spacing.unit,
      },
  });
class LoginComponent extends Component{
    constructor(props){
      super(props)
      this.state={
          rememberme:false,
          snackbaropen:false,
          transition: null,
      }
      this.classes = props
    }
    rememberMeHandleChange = name => (event, checked) => {
        this.setState({ [name]: checked });
      };
      handleClose(){
        this.state = false
      }
    render(){
        return(
        <DocumentTitle title="Login Social App">
            <div className="logincontainer">
            {(this.props.isState.errormessage)?
                this.state.snackbaropen = true   
              :
              this.state.snackbaropen=false  
              }
               <Snackbar anchorOrigin={{ vertical:'bottom', horizontal:'right' }} open={this.state.snackbaropen} onMouseOver={this.handleClose.bind(this)} SnackbarContentProps={{ 'aria-describedby': 'message-id', }} message={<span id="formchecking">{this.props.isState.errormessage}</span>} />
               <h2>Welcome in Social App</h2>
               {(this.props.login_signup_reducer.error)?(
              this.state.snackbaropen = true
               )
              :
            //   this.state.snackbaropen=false
            ''
              }
              {console.log(this.props.login_signup_reducer.userAuth.email)}
              {/* Snackbar of Firebase error */}
              <Snackbar anchorOrigin={{ vertical:'top', horizontal:'left' }} open={this.state.snackbaropen} onClose={this.state.snackbaropen=false} SnackbarContentProps={{ 'aria-describedby': 'message-id', }} message={<span onClick={this.state.snackbaropen=false} id="firebaseformchecking">{this.props.login_signup_reducer.errorMessage}</span>} />

             <div className="loginForm">
                <h3 className="logintxt">Login</h3>
                <form>
                <TextField required label="Email" placeholder="Email" id="logininput" defaultValue="" className={this.classes.textField} onChange={this.props.isloginInputHandler} name="email"/>
                <TextField required type="password" label="Password" placeholder="Password" id="logininput" defaultValue="" className={this.classes.textField} onChange={this.props.isloginInputHandler} name="password"/>
                <FormControlLabel id="logininput" control={ <Checkbox checked={this.state.rememberme} onChange={this.rememberMeHandleChange('rememberme')}   /> } label="Remember Me" />
                <Button color="primary" id="logininput" onClick={this.props.issubmitInputHandler} className={this.classes.button}>Login</Button>
                </form>
             </div>
            </div>
        </DocumentTitle>
        )
    }
}
export default LoginComponent