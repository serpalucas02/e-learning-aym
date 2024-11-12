import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HistorialCursos from './components/HistorialCursos/HistorialCursos';
import Home from './components/Home/Home';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/historial" element={<HistorialCursos />} />
        </Routes>
    );
};

export default App;
