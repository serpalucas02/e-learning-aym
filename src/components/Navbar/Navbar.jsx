import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {

    return (
        <nav>
            <Link to="/">Inicio</Link>
            <Link to="/historial">Historial de Cursos</Link>
        </nav>
    );
};

export default Navbar;
