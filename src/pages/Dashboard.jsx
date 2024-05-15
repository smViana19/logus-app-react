import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function Dashboard() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return (
        <>
        <h1>Dashboard</h1>
        </>
            
        
    );
}