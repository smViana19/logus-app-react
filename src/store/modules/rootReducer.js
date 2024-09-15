import {combineReducers } from 'redux';
import auth from './auth/reducer';
import subjectReducer from './subject/reducer';
import materialReducer from './submit/reducer';

const rootReducer = combineReducers({
    auth,
    subject: subjectReducer,
    material: materialReducer,
});



export default rootReducer;