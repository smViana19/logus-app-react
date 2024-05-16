import React from 'react';
import { Link } from 'react-router-dom';
import LayoutDeslogado from '../Layouts/LayoutDeslogado'
import { FaCircle, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions'
import { useNavigate } from "react-router-dom";


export default function HomePage() {

    const navigate = useNavigate();
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);


    const handleLogout = e => {
        e.preventDefault();
        dispatch(actions.loginFailure());
        navigate('/');
    }
    return (
        <LayoutDeslogado>
            {isLoggedIn ? (
                <Link onClick={handleLogout} to='#'>
                    <FaPowerOff />
                </Link>) : (
                <Link to="/login">
                    <FaUserAlt />
                </Link>
            )}

            <br />
            <Link to="/registro">Registro</Link>
            <br />
            <Link to="/dashboard">Dashboard</Link>

            {isLoggedIn && (<FaCircle size={24} color='#66ff33' />)}

        </LayoutDeslogado>
    );
}