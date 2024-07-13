// index.jsx (ou Routes.jsx)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyRoute from './MyRoute'; // Se você ainda quiser usar MyRoute
import Login from '../pages/Auth/Login/Login';
import HomePage from '../pages/Index';

import Registro from '../pages/Auth/Registro/Registro';
import Dashboard from '../pages/Dashboard';
import ForgotPassword from '../pages/Auth/ForgotPassword';
import Pomodoro from '../pages/Pomodoro';
import Agenda from '../pages/Agenda';
import AreaPostagens from '../pages/AreaPostagens';
import DashboardAdm from '../pages/Admin/DashboardAdm';
import Notas from '../pages/Admin/Notas';
import MateriaPage from '../pages/Materias/MateriaPage'
import Profile from '../pages/Profile'
import GradeNotas from '../pages/Admin/GradeNotas'



export default function Rotas() {

    return (

        //IMPLEMENTAR O /DASHBOARD COMO PRIVADO
        <Routes> {/* Use o componente Routes para definir suas rotas */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/pomodoro" element={<Pomodoro />} />
            <Route path="/dashboard/agenda" element={<Agenda />} />
 
            <Route path="/dashboard/perfil" element={<Profile />} />
            <Route path="/dashboard/postagens" element={<AreaPostagens />} />
                {/* Rota dinâmica para página de matéria */}
                <Route path="/dashboard/postagens/:nomeMateria" element={<MateriaPage />} />


            <Route path="/admin/dashboard" element={<DashboardAdm />} />
            <Route path="/admin/notas" element={<Notas />} />
            <Route path='admin/notas/gradenotas' element={<GradeNotas/>} />

        </Routes>



    );
}
