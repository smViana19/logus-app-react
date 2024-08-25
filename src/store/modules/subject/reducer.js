import * as types from '../types';


const initialState = {
    selectedSubjectId: null,
}

const subjectReducer = (state = initialState, action) => {
    switch (action.type){
        case 'SELECT_SUBJECT':
            return{
                ...state,
                selectedSubjectId: action.payload.subjectId
            }

        case 'CLEAR_SUBJECT':
            return{
                ...state,
                selectedSubjectId: null,
            }
            default:
                return state
    }
}

export default subjectReducer;