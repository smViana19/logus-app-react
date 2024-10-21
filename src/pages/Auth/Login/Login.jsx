import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { get } from 'lodash';
import isEmail from 'validator/lib/isEmail';
import InputLabel from '../../../components/Inputs/InputLabel';
import TextInput from '../../../components/Inputs/TextInput';
import InputError from '../../../components/Inputs/InputErro';
import Logo from '../../../components/Logo/Logo.jsx';
import BotaoPrincipal from '../../../components/Buttons/DefaultButton.jsx';
import * as actions from '../../../store/modules/auth/actions';

import { Await, Link, useNavigate } from 'react-router-dom';
import React, { act, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


export default function Login(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const prevPath = get(props, 'location.state.prevPath', '/dashboard');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mySwal = withReactContent(Swal);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = false;

    if (email.length === 0 || password.length === 0) {
      mySwal.fire({
        title: 'Campos vazios',
        text: 'Preencha os campos em vazios.',
        icon: 'warning'
      })
      return
    }
    if (!isEmail(email) || password.length < 6) {
      mySwal.fire({
        title: 'Erro',
        text: 'Email ou senha inválidos.',
        icon: 'error'
      })
      return;
    }

    if (formErrors) return;
    dispatch(actions.loginRequest({ email, password, prevPath }));
    navigate(prevPath);

  };

  return (

    <div className="bg-gray-100 w-full h-screen m-0 flex items-center dark:bg-zinc-800">
      <ToastContainer />
      <ContainerMain
        className="flex mx-auto sm:max-w-xl flex-1 flex-col justify-center px-16 py-4 bg-white rounded-xl dark:bg-zinc-700">
        <div className="mx-auto w-40 dark:bg-zinc-700">
          <Logo />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-zinc-700 dark:text-zinc-100 ">
            Login
          </h2>
        </div>

        <div className="mt-10 ">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <InputLabel htmlFor="email" value="Email" className="dark:text-zinc-100" />
              <TextInput
                value={email}
                type="email"
                onChange={e => setEmail(e.target.value)}
                placeholder="Digite seu email"
                className=""
              />
              <InputError message="" className="mt-2" />
            </div>

            <div>
              <InputLabel htmlFor="password" value="Senha" className="dark:text-zinc-100" />
              <div>
                <TextInput
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Digite sua senha"
                />
              </div>
            </div>
            <div className="text-sm">
              <Link to="/forgot-password" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-purple-500">
                Esqueci minha senha
              </Link>

            </div>
            <div>
              <BotaoPrincipal type="submit" className='dark:text-zinc-100'>
                Login
              </BotaoPrincipal>
            </div>
          </form>

          <p className="mt-4 text-center text-sm text-gray-500 pb-2 dark:text-zinc-100">
            Ainda não possui cadastro? {'  '}
            <Link to="/registro" className="font-medium text-txtTitulo hover:underline dark:text-purple-500">
              Cadastre-se
            </Link>
          </p>
        </div>

      </ContainerMain>
    </div>

  );
}


const ContainerMain = styled.div`
    @media screen and (max-width: 768px) {
        margin: 0;
        height: 100vh;
        padding: 0 24px 0 24px;
    }
`;
