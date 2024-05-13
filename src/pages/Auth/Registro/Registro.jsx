import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import isEmail from "validator/lib/isEmail";
import { get } from "lodash";

import '../../../css/style.css'
import InputLabel from '../../../components/Inputs/InputLabel';
import TextInput from '../../../components/Inputs/TextInput';
import BtnPrincipal from "../../../components/Botoes/BtnPrincipal";
import LayoutDeslogado from '../../../Layouts/LayoutDeslogado';

import axios from "../../../../services/axios";
import history from '../../../../services/history';

export default function Registro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            toast.warn('O nome deve ter entre 3 e 255 caracteres.');

        }
        if (!isEmail(email)) {
            toast.error('Email inválido');

        }

        if (password.length < 6 || password.length > 50) {
            toast.warn('Senha deve ter entre 6 a 50 caracteres');

        }
        if (password !== confirmPassword) {
            toast.warn('A senha e a confirmação de senha não coincidem.');

        }

        if (formErrors) return;
        try {
            await axios.post('/users', {
                nome,
                password,
                email,
            })
            toast.success('Registrado com sucesso!');
            history.push('/login')
            
        } catch (err) {

            const errors = get(err, 'response.data.errors', []);

            errors.map(error => toast.error(error));

        }

    }
    return (
        <>
            <ToastContainer />

            <LayoutDeslogado>

                <form onSubmit={handleSubmit}>
                    <div>
                        <InputLabel htmlFor="nome" value="Nome" />

                        <TextInput
                            type="text"
                            value={nome}
                            onChange={e => setNome(e.target.value)}
                            placeholder="Digite seu nome"
                        />


                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Digite seu email"
                        />


                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Senha" />

                        <TextInput
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />


                    </div>

                    <div className="mt-4 ">
                        <InputLabel htmlFor="password_confirmation" value="Confirmar senha" />

                        <TextInput
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="Confirme sua senha"
                        />


                    </div>
                    <div className="flex justify-center mt-5">

                        <a
                            className=" text-sm text-gray-500 hover:text-gray-900"
                        >
                            Ja possui uma conta? <span className='font-bold text-roxoPrincipal hover:underline'>Entrar</span>
                        </a>
                    </div>
                    <div className="flex items-center justify-center mt-5">



                        <BtnPrincipal type='submit'>
                            Cadastrar
                        </BtnPrincipal>

                    </div>

                </form>
            </LayoutDeslogado>

        </>

    );
}



