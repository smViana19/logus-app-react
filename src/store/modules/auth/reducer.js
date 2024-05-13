import * as types from '../types';


const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

export default function (state = initialState, action)  {
  console.log(action.type);

  switch (action.type) {
case types.LOGIN_SUCESS: {
  const newState = {...state};
  newState.isLoggedIn = true;
  newState.token = action.payload.token;
  newState.user = action.payload.user;

  return newState;
}
case types.LOGIN_FAILURE: {
  const newState = { ...initialState};
  return initialState;
}
    default: {
        return state;
    }
      
  }
};