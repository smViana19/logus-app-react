import React from 'react';
import { Link } from 'react-router-dom';
import { FaCircle, FaPowerOff, FaUserAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../store/modules/auth/actions'
import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png'

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
        <div>
            <nav className="flex justify-around py-4">
                <ul>
                    <li><img className='w-32' src={logo} alt="" /></li>
                </ul>
                <ul className='flex gap-16'>
                    <li className='text-lg border-r-gray-500 border-r w-16 text-center h-8'>Home</li>
                    <li className='text-lg w-8 px-6 text-center'>Funcionalidades</li>
                </ul>
            
                    <ul className='flex gap-16' >
                        <li className='text-lg'>
                            {isLoggedIn ? (
                                <Link onClick={handleLogout} to='#'>
                                    <FaPowerOff />
                                </Link>
                            ) : (
                                <Link to="/login">
                                    Login
                                </Link>
                            )}
                        </li>
                        <li className='text-lg'>
                            {isLoggedIn ? (
                                <Link to="/dashboard">Dashboard</Link>
                            ) : (
                                <Link to="/registro">Cadastrar</Link>
                            )}
                            {isLoggedIn && (<FaCircle size={24} color='#66ff33' />)}
                        </li>
                    </ul>
            </nav>


        </div>
    );
}
