import React from 'react'
import TextInput from '../../components/Inputs/TextInput'
import DefaultButton from '../../components/Buttons/DefaultButton.jsx'

export default function ForgotPassword() {


    return (
        <div className='bg-gray-100 w-full h-screen m-0 flex items-center'>
            <div className="flex mx-auto w-full max-w-3xl flex-1 flex-col justify-center px-8 py-16 bg-white rounded-xl shadow-sm">


                <h2 className="mt-4 mb-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Esqueceu sua senha?
                </h2>
                <p>Para garantir a segurança de seus dados, enviaremos um e-mail para redefinir sua senha. Por favor digite seu endereço de E-mail abaixo e verifique sua caixa de entrada. </p>
                <div className='mt-8 grid grid-cols-3 gap-4'>
                    <div className='col-span-2'>
                        <TextInput
                            
                            type="email"
                            onChange={e => setEmail(e.target.value)}
                            placeholder="Digite seu email">
                        </TextInput>
                    </div>
                    
                    <DefaultButton>
                        Enviar
                    </DefaultButton>
                </div>


                <span className="font-semibold text-gray-700 hover:text-violet-700 mt-4 transition duration-50 cursor-pointer">Reenviar E-mail</span>
            </div>
        </div>
    )
}
