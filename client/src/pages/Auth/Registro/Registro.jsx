import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import isEmail from "validator/lib/isEmail";
import { get } from "lodash";

import '../../../css/style.css'
import InputLabel from '../../../components/Inputs/InputLabel';
import TextInput from '../../../components/Inputs/TextInput';
import BtnPrincipal from "../../../components/Botoes/BtnPrincipal";
import Logo from '../../../components/Logo';
import { Link } from "react-router-dom";

import axios from "../../../../services/axios";
import { useNavigate } from "react-router-dom";
import UserRoleSelector from "../../../components/UserSelectorRole";



export default function Registro() {
    // const id = useSelector(state => state.auth.user.id);
    // const nomeStorage = useSelector(state => state.auth.user.nome);
    // const emailStorage = useSelector(state => state.auth.user.email);

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    // useEffect(() => {
    //     if (!id) return;
    //     setNome = (nomeStorage);
    //     setEmail = (emailStorage);
    // }, [emailStorage, id, nomeStorage]);

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
                role,
            })
            toast.success('Registrado com sucesso!');
            navigate('/login');

        } catch (err) {

            const errors = get(err, 'response.data.errors', []);

            errors.map(error => toast.error(error));

        }

    }
    return (


        <div className="flex sm:mx-auto sm:w-full flex-1 flex-col justify-center px-0 py-12 lg:px-16 bg-white rounded-xl">

            <div className="sm:mx-auto ">
                <Logo className='w-40' />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Crie sua conta
                </h2>
            </div>

            <ToastContainer />

            <form onSubmit={handleSubmit} className="w-3/4 m-auto">
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

                <div className="flex gap-16 mb-16">
                    <div className="mt-4 w-full">
                        <InputLabel htmlFor="password" value="Senha" />
                        <TextInput
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Digite sua senha"
                        />
                    </div>

                    <div className="mt-4 w-full">
                        <InputLabel htmlFor="password_confirmation" value="Confirmar senha" />
                        <TextInput
                            type="password"
                            value={confirmPassword}
                            onChange={e => setConfirmPassword(e.target.value)}
                            placeholder="Confirme sua senha"
                        />
                    </div>
                </div>
                <UserRoleSelector role={role} setRole={setRole} />
                <div className="flex items-center justify-center mt-5">
                    <BtnPrincipal type='submit'>
                        Cadastrar
                    </BtnPrincipal>
                </div>
                <div className="flex justify-center mt-5">
                    <span className="text-sm text-gray-500">Já possui uma conta?{' '}
                        <Link to="/login" className="font-bold text-txtTitulo hover:underline">
                            Entrar
                        </Link>
                    </span>
                </div>
            </form>
        </div>

    );
}



