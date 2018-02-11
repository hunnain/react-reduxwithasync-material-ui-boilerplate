import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DocumentTitle from 'react-document-title'
import {Provider} from 'react-redux';
import store from './store'
import Routers from "./routers/index";
class App extends Component {
  render() {
    return (
      <div className="App">
      <DocumentTitle title='Social App'>
      <Provider store={store}>
        <Routers />
        </Provider>
        </DocumentTitle>
      </div>
    );
  }
}

export default App;
