import React from 'react';
import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';

const LogoutButton = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {

        dispatch(actions.loginFailure());
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;