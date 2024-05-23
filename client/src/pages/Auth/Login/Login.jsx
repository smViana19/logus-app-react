import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { get } from 'lodash';
import isEmail from "validator/lib/isEmail";
import InputLabel from '../../../components/Inputs/InputLabel';
import TextInput from '../../../components/Inputs/TextInput';
import InputError from '../../../components/Inputs/InputErro';
import Logo from '../../../components/Logo'
import BotaoPrincipal from '../../../components/Botoes/BtnPrincipal';
import * as actions from '../../../store/modules/auth/actions'

import { Link, useNavigate } from "react-router-dom";
import React, { useState } from 'react';


export default function Login(props) {
    const dispatch = useDispatch();
    const prevPath = get(props, 'location.state.prevPath', '/dashboard')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault();
        let formErrors = false;

        if (!isEmail(email) || password.length < 6 || password.length > 50) {
            toast.error('Email ou senha invalidos');
            return
        }

        if (formErrors) {
            dispatch(actions.loginRequest({ email, password, prevPath }));
            navigate(prevPath)
            return;
        }

    }

    return (

        <div className='bg-gray-100 w-full h-screen m-0 flex items-center'>
            <ToastContainer />
            <div className="flex sm:mx-auto sm:w-full sm:max-w-xl flex-1 flex-col justify-center px-0 py-12 lg:px-16 bg-white rounded-xl">
                <div className="sm:mx-auto ">
                    <Logo/>
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-700">
                       Login
                    </h2>
                </div>

                <div className="mt-10 ">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                value={email}
                                type="email"
                                onChange={e => setEmail(e.target.value)}
                                placeholder="Digite seu email"
                            />
                            <InputError message="" className="mt-2" />
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <InputLabel htmlFor="password" value="Senha" />
                                <div className="text-sm">
                                    <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                    Esqueci minha senha
                                    </Link>
                                    
                                </div>
                            </div>
                            <div className="mt-2">
                                <TextInput
                                    type="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    placeholder="Digite sua senha"
                                />
                            </div>
                        </div>
                        <div className="inline-flex items-center">
                            <label className="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="check">
                                <input type="checkbox"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-400 checked:bg-violet-800 checked:before:bg-gray-400 hover:before:opacity-10"
                                    id="check" />
                                <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" cl="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                        stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <label className="mt-px text-gray-700 cursor-pointer select-none" htmlFor="check">
                                Lembre-me
                            </label>
                        </div>
                        <div>
                            <BotaoPrincipal type="submit">
                                Login
                            </BotaoPrincipal>
                        </div>
                    </form>

                    <p className="mt-10 text-center text- text-gray-500">
                        Ainda não possui cadastro?{' '}
                        <Link to="/registro" className="font-bold text-txtTitulo hover:underline">
                            Cadastre-se
                        </Link>
                    </p>
                </div>

            </div>
        </div>



    );
}
