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
import { AtividadeProvider } from '../context/AtividadeContext';
import SendTaskSubject from '../pages/Subject/SendTaskSubject.jsx';
import MainLayout from '@/components/Layout/MainLayout.jsx';
import Settings from '../pages/Settings/Settings'
import AdminInstitutional from '../pages/Admin/AdminInstitutional/AdminInstitutional';
import AdminReport from '../pages/Admin/AdminReport/AdminReport';
import AdminTeachers from '../pages/Admin/AdminTeachers/AdminTeachers';
import AdminStudents from '../pages/Admin/AdminStudents/AdminStudents';
import AdminTurmas from '../pages/Admin/AdminTurmas/AdminTurmas';
import AdminSeries from '../pages/Admin/AdminInstitutional/AdminSeries/AdminSeries';
import AdminPosts from '../pages/Admin/AdminPosts/AdminPosts';
import AdminBlog from '../pages/Admin/AdminBlog/AdminBlog';
import AddPageBlog from '../pages/Admin/AdminBlog/AddPageBlog';

export default function Rotas() {

  return (

    <Routes> {/* Use o componente Routes para definir suas rotas */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/registro" element={<Registro />} />

      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/pomodoro" element={<Pomodoro />} />
        <Route path="/dashboard/perfil" element={<Profile />} />
        <Route path="/dashboard/postagens" element={<PostsArea />} />
        <Route path="/dashboard/postagens/:nomeMateria" element={<Subject />} />
        <Route path="/dashboard/postagens/:nomeMateria/:nomeAtiv" element={<AtividadeWrapper />} />
        <Route path="/dashboard/agenda" element={<Schedule />} />
        <Route path="/dashboard/settings" element={<Settings />} />

      </Route>
      <Route path='/admin' element={<MainLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/alunos" element={<AdminStudents />} />
        <Route path="/admin/professores" element={<AdminTeachers />} />
        <Route path="/admin/relatorios" element={<AdminReport />} />
        <Route path="/admin/institucional" element={<AdminInstitutional />} />
        <Route path="/admin/institucional/postagens" element={<AdminPosts />} />
        <Route path="/admin/institucional/series" element={<AdminSeries />} />
        <Route path="/admin/institucional/turmas" element={<AdminTurmas />} />
        <Route path='/admin/blog' element={<AdminBlog />}/>
        <Route path='/admin/blog/add' element={<AddPageBlog />}/>

      </Route>


    </Routes>


  );
}


const AtividadeWrapper = () => {
  return (
    <AtividadeProvider>
      <SendTaskSubject />
    </AtividadeProvider>
  );
};