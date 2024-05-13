// index.jsx (ou Routes.jsx)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MyRoute from './MyRoute'; // Se você ainda quiser usar MyRoute
import Login from '../pages/Auth/Login/Login';
import HomePage from '../pages/Index';

import Registro from '../pages/Auth/Registro/Registro';
import Dashboard from '../pages/Dashboard';


export default function Rotas() {

    return (
        
        <Router> {/* Use o componente Router para envolver suas rotas */}
            <Routes> {/* Use o componente Routes para definir suas rotas */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/registro" element={<Registro />} />
                <Route path="/dashboard" element={<MyRoute component={Dashboard} isClosed={true} />} />
            </Routes>
        </Router>


    );
}
