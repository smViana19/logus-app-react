// index.jsx (ou Routes.jsx)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login/Login';
import LandingPage from '../pages/LandingPage/LandingPage.jsx';
import Registro from '../pages/Auth/Registro/Registro';
import Dashboard from '../pages/Dashboard/Dashboard.jsx';
import ForgotPassword from '../pages/Auth/ForgotPassword/ForgotPassword.jsx';
import Pomodoro from '../pages/Pomodoro/Pomodoro.jsx';
import Schedule from '../pages/Schedule/Schedule.jsx';
import PostsArea from '../pages/PostsArea/PostsArea.jsx';
import AdminDashboard from '../pages/Admin/AdminDashboard.jsx';
import Subject from '../pages/Subject/Subject.jsx';
import Profile from '../pages/Profile/Profile.jsx';
import { AtividadeProvider } from '../context/AtividadeContext';
import SendTaskSubject from '../pages/Subject/SendTaskSubject.jsx';
import MainLayout from '@/components/Layout/MainLayout.jsx';
import AdminInstitutional from '../pages/Admin/AdminInstitutional/AdminInstitutional';
import AdminSeries from '../pages/Admin/AdminInstitutional/AdminSeries/AdminSeries';
import AddPageBlog from '../pages/Admin/AddPageBlog';
import StudentDetail from '../pages/Admin/StudentDetail';
import AdminGradeDetails from '../pages/Admin/AdminGradeDetails';
import AdminStudentDetails from '../pages/Admin/AdminStudentDetails';

export default function Rotas() {

  return (

    <Routes> {/* Use o componente Routes para definir suas rotas */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />


      <Route path="/dashboard" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/dashboard/pomodoro" element={<Pomodoro />} />
        <Route path="/dashboard/perfil" element={<Profile />} />
        <Route path="/dashboard/postagens" element={<PostsArea />} />
        <Route path="/dashboard/postagens/:nomeMateria" element={<Subject />} />
        <Route path="/dashboard/postagens/:nomeMateria/:nomeAtiv" element={<AtividadeWrapper />} />
        <Route path="/dashboard/agenda" element={<Schedule />} />

      </Route>
      <Route element={<MainLayout />}>
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/institucional" element={<AdminInstitutional />} />
        <Route path="/admin/turmas" element={<AdminSeries />} />
        <Route path='/admin/blog/criar' element={<AddPageBlog />} />
        <Route path="/admin/registro" element={<Registro />} />
        <Route path="/admin/students/:id" element={<StudentDetail />} />
        <Route path="/admin/turmas/:id" element={<AdminGradeDetails />} />
        <Route path="/admin/alunos/:id" element={<AdminStudentDetails />} />

      </Route>
    </Routes >


  );
}


const AtividadeWrapper = () => {
  return (
    <AtividadeProvider>
      <SendTaskSubject />
    </AtividadeProvider>
  );
};