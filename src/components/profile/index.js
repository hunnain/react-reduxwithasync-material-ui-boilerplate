import React, { Component } from 'react';
import DocumentTitle from 'react-document-title'
import history from '../../routers/history'
class ProfileComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
            {(this.props.session.authenticated)?(
                  <DocumentTitle title={this.props.session.user.username}>  
                  <div>
                      <h1>Welcome {this.props.session.user.username}</h1>
                      {/* {console.log("Prifile",this.props.session.user)} */}
                  </div>
                  </DocumentTitle>
            ) :
            history.replace('/')
            }

            </div>
        )
    }
}
export default ProfileComponent;