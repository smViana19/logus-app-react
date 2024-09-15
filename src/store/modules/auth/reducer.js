import * as types from '../types';

const initialState = {
    isLoggedIn: false,
    token: false,
    user: {},
    isLoading: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }

        case types.LOGIN_SUCESS: {
            const newState = { ...state };
            newState.isLoggedIn = true;
            newState.token = action.payload.token;
            newState.user = action.payload.user;
            newState.isLoading = false
            return newState;
        }
        case types.LOGIN_FAILURE: {
            return {
                ...initialState,
                isLoading: false,
            };
        }
        default: {
            return state;
        }
    }
}
