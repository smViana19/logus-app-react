import LayoutDeslogado from '../../../Layouts/LayoutDeslogado'
import { useDispatch } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { get } from 'lodash';
import isEmail from "validator/lib/isEmail";
import InputLabel from '../../../components/Inputs/InputLabel';
import TextInput from '../../../components/Inputs/TextInput';
import InputError from '../../../components/Inputs/InputErro';
import Checkbox from '../../../components/Checkbox';
import BotaoPrincipal from '../../../components/Botoes/BtnPrincipal';
import * as actions from '../../../store/modules/auth/actions'

import { useState } from 'react';


export default function Login(props) {
    const dispatch = useDispatch();
    const prevPath = get(props, 'location.state.prevPath', '/dashboard')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        let formErrors = false;

        if (!isEmail(email) || password.length < 6 || password.length > 50) {
            toast.error('Email ou senha invalidos');
        }

        if (formErrors) return;
        dispatch(actions.loginRequest({ email, password, prevPath }));
    }

    return (
        <>
        <ToastContainer />
        <LayoutDeslogado>
            
            
            <form onSubmit={handleSubmit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        value={email}
                        type="email"
                        className="mt-1 block w-full"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Digite seu email"
                    />

                    <InputError message="" className="mt-2" />
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

                <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                        />
                        <span className="ms-2 text-sm text-gray-600">Lembre-me</span>
                    </label>
                </div>

                <div className="flex justify-center mt-5">
                    <BotaoPrincipal type="submit">
                        Login
                    </BotaoPrincipal>
                </div>
            </form>
        </LayoutDeslogado>
        </>
        
    );
}
