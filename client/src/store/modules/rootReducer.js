import {combineReducers } from 'redux';
import auth from './auth/reducer';
import subjectReducer from './subject/reducer';

const rootReducer = combineReducers({
    auth,
    subject: subjectReducer,
});



export default rootReducer;