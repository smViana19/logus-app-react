// index.jsx (ou Routes.jsx)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyRoute from './MyRoute'; // Se você ainda quiser usar MyRoute
import Login from '../pages/Auth/Login/Login';
import HomePage from '../pages/Index';

import Registro from '../pages/Auth/Registro/Registro';
import Dashboard from '../pages/Dashboard';


export default function Rotas() {

    return (
        
         //IMPLEMENTAR O /DASHBOARD COMO PRIVADO
            <Routes> {/* Use o componente Routes para definir suas rotas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/dashboard" element={<Dashboard/>} /> 
                
            </Routes>
        


    );
}
