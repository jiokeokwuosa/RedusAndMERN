import {combineReducers} from 'redux';
import exerciseReducer from './exerciseReducer';
import userReducer from './userReducer';

export default combineReducers({
    exercise: exerciseReducer,
    user:userReducer
});