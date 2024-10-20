import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import isEmail from 'validator/lib/isEmail';
import { get } from 'lodash';
import '../../../css/style.css';
import InputLabel from '../../../components/Inputs/InputLabel';
import TextInput from '../../../components/Inputs/TextInput';
import DefaultButton from '../../../components/Buttons/DefaultButton.jsx';
import Logo from '../../../components/Logo/Logo.jsx';
import axios from '../../../../services/axios';
import UserRoleSelector from '../../../components/RadioButton/RoleRadioButton.jsx';
import { generatePassword } from '../../../util';
import Spinner from '../../../components/Spinners/Spinner';
import withReactContent from 'sweetalert2-react-content';
import Swal from 'sweetalert2';


export default function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const [role, setRole] = useState('');
  const mySwal = withReactContent(Swal);

  async function handleSubmit(e) {
    setIsloading(true);
    e.preventDefault();
    let formErrors = false;

    if (nome.length < 3 || nome.length > 255) {
      formErrors = true;
      mySwal.fire({
        title: "Alerta",
        text: "Nome deve ter mais de 3 caracteres.",
        icon: "warning"
      });
      setIsloading(false)
    }
    if (!isEmail(email)) {
      formErrors = true;
      mySwal.fire({
        title: "Alerta",
        text: "Email inválido.",
        icon: "warning"
      });
      setIsloading(false)
    }

    if (formErrors) return;

    try {
      await axios.post('http://localhost:3000/users', {
        nome,
        password,
        email,
        role,
      }).then((response) => {
        console.log(response);
        mySwal.fire({
          title: "Sucesso",
          text: response.data.message,
          icon: 'success'
        });
      });
      setIsloading(false);
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);
      errors.forEach(error => toast.error(error));
    } finally {
      setIsloading(false)
    }
  }

  useEffect(() => {
    const generatedPassword = generatePassword();
    setPassword(generatePassword)
  }, [])

  if (isLoading) return <Spinner />;

  return (
    <div className="p-5 min-h-screen sm:ml-20 lg:ml-64 mt-24 ml-14 md:ml-64 transition-all duration-300 dark:bg-zinc-800">
      <div className="flex mx-auto max-w-4xl flex-1 flex-col justify-center py-12 lg:px-16 ">
        <div className="sm:mx-auto ">
          <Logo className="w-40 mx-auto" />
          <h2 className="mt-8 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Registre o novo usuário
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
              placeholder="Digite o nome"
            />
          </div>

          <div className="mt-4">
            <InputLabel htmlFor="email" value="Email" />
            <TextInput
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Digite o email"
            />
          </div>

          <div className="flex gap-8 mb-12">
            <div className="mt-4 w-full">
              <InputLabel htmlFor="password" value="Senha" />
              <TextInput
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="****"
                readOnly
              />
            </div>
          </div>
          <UserRoleSelector role={role} setRole={setRole} />
          <div className="flex items-center justify-center mt-8">
            <DefaultButton type="submit">
              Cadastrar
            </DefaultButton>
          </div>
        </form>
      </div>
    </div>

  );
}

