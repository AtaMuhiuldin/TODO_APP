// import {showAll} from '../reducers/listReducer';
// import {showSingle} from '../reducers/singleReducer';
import {combineReducers} from 'redux';
import authReducer from './authReducer';
import todoRootReducer from './todoRootReducer';

const rootReducer = combineReducers({
   auth: authReducer,
   todo: todoRootReducer
});

export default rootReducer;

