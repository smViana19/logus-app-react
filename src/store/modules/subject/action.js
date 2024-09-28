import * as types from '../types';


export function subjectRequest(payload) {
  return {
    type: types.SUBJECT_REQUEST,
    payload,
  };
}

export const selectSubject = (subjectId) => {
  return {
    type: types.SELECT_SUBJECT,
    payload: { subjectId },
  };
};

export const clearSubject = () => {
  return {
    type: types.CLEAR_SUBJECT,
  };
};

