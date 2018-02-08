import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import registerServiceWorker from './registerServiceWorker';
var config = {
  apiKey: "AIzaSyB7HiXtnvwUvMamP8KbIg76LSPSXYjB4M0",
  authDomain: "react-redux-7e2f7.firebaseapp.com",
  databaseURL: "https://react-redux-7e2f7.firebaseio.com",
  projectId: "react-redux-7e2f7",
  storageBucket: "react-redux-7e2f7.appspot.com",
  messagingSenderId: "671627665113"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
