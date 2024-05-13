import React from 'react';
import { Link } from 'react-router-dom';
import LayoutDeslogado from '../Layouts/LayoutDeslogado'

export default function HomePage() {
    return (
        <LayoutDeslogado>
            <a href="">Login</a>
            <br />
            <a href="">Registro</a>
        </LayoutDeslogado>
    );
}