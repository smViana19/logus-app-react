// index.jsx (ou Routes.jsx)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MyRoute from './MyRoute'; // Se você ainda quiser usar MyRoute
import Login from '../pages/Auth/Login/Login';
import LandingPage from '../pages/LandingPage/LandingPage.jsx';

import Registro from '../pages/Auth/Registro/Registro';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword.jsx';
import Pomodoro from '../pages/Pomodoro/Pomodoro.jsx';
import Schedule from '../pages/Schedule/Schedule.jsx';
import PostsArea from '../pages/PostsArea/PostsArea.jsx';
import AdminDashboard from '../pages/Admin/AdminDashboard/AdminDashboard.jsx';
import Subject from '../pages/Subject/Subject.jsx';
import Profile from '../pages/Profile/Profile.jsx';
import AdminSchoolGrade from '../pages/Admin/AdminGrade/AdminSchoolGrade.jsx';
import { AtividadeProvider } from '../context/AtividadeContext';
import Atividade from '../pages/Subject/Atividade';
import AdminSchool from '../pages/Admin/AdminSchool/AdminSchool.jsx';
import Layout from '@/components/Layout/Layout.jsx';


export default function Rotas() {

  return (

      <Routes> {/* Use o componente Routes para definir suas rotas */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/registro" element={<Registro />} />

        <Route path="/dashboard" element={<Layout />} >
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/pomodoro" element={<Pomodoro />} />
          <Route path="/dashboard/perfil" element={<Profile />} />

        </Route>




        <Route path="/dashboard/agenda" element={<Schedule />} />

        <Route path="/dashboard/postagens" element={<PostsArea />} />
        <Route path="/dashboard/postagens/:nomeMateria" element={<Subject />} />
        <Route path="/dashboard/postagens/:nomeMateria/:nomeAtiv" element={<AtividadeWrapper />} />


        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/notas/grade" element={<AdminSchool />} />
        <Route path="/admin/notas" element={<AdminSchoolGrade />} />

      </Routes>


  );
}


const AtividadeWrapper = () => {
  return (
      <AtividadeProvider>
        <Atividade />
      </AtividadeProvider>
  );
};