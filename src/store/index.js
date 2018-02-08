import {createStore,applyMiddleware} from 'redux';
import rootReducers from './reducers/index'
import thunk from 'redux-thunk';
import logger from 'redux-logger';
const middleware = applyMiddleware(thunk);

const store = createStore(
    rootReducers,
    {},
    middleware
)
export default store;