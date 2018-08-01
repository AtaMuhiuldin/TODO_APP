import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const middelWare = [thunk];
const initialState = {};



const store = createStore( 
    rootReducer, 
    initialState, 
    compose(
        applyMiddleware(...middelWare), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()     
    ) 
     
);


export default store;