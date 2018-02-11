import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import history from '../../routers/history';

class HomeComponent extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                {(this.props.session.authenticated)?(
            <DocumentTitle title="Home">
            <h1>Home</h1>
            </DocumentTitle>
             ) :
             history.replace('/')
             }
            </div>
        )
    }
}
export default HomeComponent;