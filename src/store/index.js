import {createStore,applyMiddleware,combineReducers} from 'redux';
import root from './reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk);

const store = createStore(
    root,
    {},    
    middleware
)
export default store;