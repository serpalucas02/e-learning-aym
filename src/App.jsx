import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HistorialCursos from './components/HistorialCursos/HistorialCursos';
import RankingCursos from './components/RankingCursos/RankingCursos';
import PreguntasFrecuentes from './components/PreguntasFrecuentes/PreguntasFrecuentes';

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <Link to="/">Inicio</Link>
                    <Link to="/historial">Historial de Cursos</Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/historial" element={<HistorialCursos />} />
                </Routes>
            </div>
        </Router>
    );
};

const Inicio = () => (
    <div>
        <RankingCursos />
        <PreguntasFrecuentes />
    </div>
);

export default App;
