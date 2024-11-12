import React from 'react';
import data from '../../data.json';
import './HistorialCursos.css';
import Navbar from '../Navbar/Navbar';

const HistorialCursos = () => {
    const historialCursosOrdenado = [...data.historialCursos].sort((a, b) => {
        if (a.completado && !b.completado) return -1;
        if (!a.completado && b.completado) return 1;
        return b.progreso - a.progreso;
    });

    return (
        <>
            <Navbar />
            <h2 className='title-historial'>Historial de Cursos</h2>
            <ul className="historial-list">
                {historialCursosOrdenado.map(curso => (
                    <li key={curso.id} className="historial-item">
                        <div className="container-title-historial">
                            <h3>{curso.nombre}</h3>
                            {curso.completado ? (
                                <i className="bi bi-check-circle-fill icono-completado"></i>
                            ) : (
                                <button className="boton-reanudar">Reanudar curso</button>
                            )}
                        </div>
                        <div className="progreso-container">
                            <div className="progreso-bar">
                                <div
                                    className="progreso-fill"
                                    style={{ width: `${curso.progreso}%` }}
                                ></div>
                            </div>
                            <span className="progreso-porcentaje">{curso.progreso}%</span>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default HistorialCursos;
