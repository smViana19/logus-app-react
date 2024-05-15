import React from 'react';
import { Link } from 'react-router-dom';
import LayoutDeslogado from '../Layouts/LayoutDeslogado'

export default function HomePage() {
    return (
        <LayoutDeslogado>
            <Link to="/login">Login</Link>
            <br />
            <Link to="/registro">Registro</Link>
            <br />
            <Link to="/dashboard">Dashboard</Link>
        </LayoutDeslogado>
    );
}