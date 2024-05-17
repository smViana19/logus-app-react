import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="flex justify-center w-full h-screen bg-purpleLightBg ">
            <div className='flex flex-col h-full'>
                <div className="flex justify-center">
                    {isLoggedIn ? (
                        <Link onClick={handleLogout} to='#'>
                            <FaPowerOff />
                        </Link>) : (
                        <Link to="/login">
                            Login
                        </Link>
                    )}
                </div>


                <br />
                {isLoggedIn ? (
                    <Link to="/dashboard">Dashboard</Link>
                ) : (
                    <Link to="/registro">Cadastrar</Link>
                )
                }

                {isLoggedIn && (<FaCircle size={24} color='#66ff33' />)}
            </div >
        </div>




    );
}