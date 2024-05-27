import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import NavLink from '../../components/NavLink'
import Logo from '../../components/Logo';
import { Link } from 'react-router-dom';
import MenuAdmin from '../../components/Navs/MenuAdmin';




export default function DashboardAdm() {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    /*
        if (!isLoggedIn) {
            return <Navigate to="/login" replace />;
        }*/
    return (
        <>
            <div className="min-h-screen bg-gray-50">
            <MenuAdmin/>

                <main>

                </main>

            </div>

        </>


    );
}