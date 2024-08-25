import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import isEmail from "validator/lib/isEmail";
import { get } from "lodash";
import styled from "styled-components";
import '../../../css/style.css';
import InputLabel from '../../../components/Inputs/InputLabel';
import TextInput from '../../../components/Inputs/TextInput';
import DefaultButton from "../../../components/Buttons/DefaultButton.jsx";
import Logo from '../../../components/Logo/Logo.jsx';
import { Link, useNavigate } from "react-router-dom";
import axios from "../../../../services/axios";
import UserRoleSelector from "../../../components/RadioButton/RoleRadioButton.jsx";

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
    //     setNome(nomeStorage);
    //     setEmail(emailStorage);
    // }, [emailStorage, id, nomeStorage]);

    async function handleSubmit(e) {
        e.preventDefault();
        let formErrors = false;

        if (nome.length < 3 || nome.length > 255) {
            formErrors = true;
            toast.warn('O nome deve ter entre 3 e 255 caracteres.');
        }
        if (!isEmail(email)) {
            formErrors = true;
            toast.error('Email inválido');
        }

        if (password.length < 6 || password.length > 50) {
            formErrors = true;
            toast.warn('Senha deve ter entre 6 a 50 caracteres');
        }
        if (password !== confirmPassword) {
            formErrors = true;
            toast.warn('A senha e a confirmação de senha não coincidem.');
        }

        if (formErrors) return;

        try {
            await axios.post('http://localhost:3000/users', {
                nome,
                password,
                email,
                role,
            }).then((response) => {
                console.log(response)
            })
            toast.success('Registrado com sucesso!');
            navigate('/login');
        } catch (err) {
            const errors = get(err, 'response.data.errors', []);
            errors.forEach(error => toast.error(error));
        }
    }

    return (
        <ContainerGray className="bg-gray-100 py-8">
            <ContainerMain className="flex mx-auto max-w-4xl flex-1 flex-col justify-center py-12 lg:px-16 bg-white rounded-xl">
                <div className="sm:mx-auto ">
                    <Logo className='w-40 mx-auto' />
                    <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Crie sua conta
                    </h2>
                </div>

                <ToastContainer />

                <form onSubmit={handleSubmit} className="mt-6">
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

                    <div className="flex gap-8 mb-12">
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
                    <div className="flex items-center justify-center mt-8">
                        <DefaultButton type='submit'>
                            Cadastrar
                        </DefaultButton>
                    </div>
                    <div className="flex justify-center mt-5">
                        <span className="text-sm text-gray-500">Já possui uma conta?{' '}
                            <Link to="/login" className="font-bold text-txtTitulo hover:underline">
                                Entrar
                            </Link>
                        </span>
                    </div>
                </form>
            </ContainerMain>
        </ContainerGray>
    );
}

const ContainerGray = styled.div`
    @media screen and (max-width: 768px) {
        padding: 0 ;
    }
`;

const ContainerMain = styled.div`
    @media screen and (max-width: 768px) {
        margin: 0;
        padding: 32px 24px 0 24px;
    }
`;
