import * as types from '../types';
import axios from 'axios';


export const selectSubject = (subjectId) => {
    return{
        type: types.SELECT_SUBJECT,
        payload: { subjectId },
    }
}

export const clearSubject = () => {
    return{
        type: types.CLEAR_SUBJECT,
    }
}

