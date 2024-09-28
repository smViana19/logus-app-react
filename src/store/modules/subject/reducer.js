import * as types from '../types';


const initialState = {
  selectedSubjectId: null,
  isLoading: true,
  subjects: [],
  error: null,
};

const subjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SUBJECT_REQUEST: {
      return {
        ...state,
        isLoading: true,
        error: null,
      };
    }
    case types.SUBJECT_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        subjects: action.payload.subjects,
      };
    }
    case types.SUBJECT_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    case types.SELECT_SUBJECT:
      return {
        ...state,
        selectedSubjectId: action.payload.subjectId,
      };

    case types.CLEAR_SUBJECT:
      return {
        ...state,
        selectedSubjectId: null,
      };
    default:
      return state;
  }
};

export default subjectReducer;