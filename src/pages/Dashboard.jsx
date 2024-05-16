import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LayoutLogado from '../Layouts/LayoutLogado';


export default function Dashboard() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }
    return (
        <>
            <LayoutLogado

                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Tela Principal</h2>}
            >
            </LayoutLogado>
        </>


    );
}