// MyRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';



export default function MyRoute({ component: Component, isClosed = false, ...rest }) {
   const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    
    if (isClosed && !isLoggedIn) {

        return <Navigate to="/login" replace />;
    }

    return (
        <>
            <Route {...rest} element={<Component />} />
        </>
    );
}

MyRoute.propTypes = {
    component: PropTypes.elementType.isRequired,
    isClosed: PropTypes.bool,
};
