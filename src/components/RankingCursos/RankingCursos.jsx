import React, { useState } from 'react';
import data from '../../data.json';
import './RankingCursos.css';

const RankingCursos = () => {
    const [selectedCurso, setSelectedCurso] = useState(null);

    const openModal = (curso) => {
        setSelectedCurso(curso);
    };

    const closeModal = () => {
        setSelectedCurso(null);
    };

    const calcularPromedioEstrellas = (reseñas) => {
        if (reseñas.length === 0) return 0;
        const totalEstrellas = reseñas.reduce((acc, reseña) => acc + reseña.estrellas, 0);
        return totalEstrellas / reseñas.length;
    };

    const renderEstrellas = (promedio) => {
        const estrellasCompletas = Math.floor(promedio);
        const tieneMediaEstrella = promedio % 1 !== 0;

        return (
            <div className="estrellas">
                {Array.from({ length: estrellasCompletas }, (_, index) => (
                    <i key={index} className="bi bi-star-fill"></i>
                ))}
                {tieneMediaEstrella && <i className="bi bi-star-half"></i>}
                {Array.from({ length: 5 - estrellasCompletas - (tieneMediaEstrella ? 1 : 0) }, (_, index) => (
                    <i key={index + estrellasCompletas + 1} className="bi bi-star"></i>
                ))}
            </div>
        );
    };

    const cursosOrdenados = [...data.rankingCursos].sort((a, b) => {
        const promedioA = calcularPromedioEstrellas(a.reseñas);
        const promedioB = calcularPromedioEstrellas(b.reseñas);
        return promedioB - promedioA;
    });

    return (
        <>
            <h2 className="titulo-ranking">Ranking de Cursos</h2>
            <ul className="ranking-list">
                {cursosOrdenados.map((curso, index) => {
                    const promedioEstrellas = calcularPromedioEstrellas(curso.reseñas);
                    return (
                        <div key={curso.id} className='ranking-container'>
                            <li className="ranking-item" onClick={() => openModal(curso)}>
                                <span className="ranking-numero">{index + 1}</span>
                                <h3>{curso.nombre}</h3>
                                <p>{curso.descripcion}</p>
                                <div className="estrellas-container">
                                    {renderEstrellas(promedioEstrellas)}
                                </div>
                            </li>
                        </div>
                    );
                })}
            </ul>

            {selectedCurso && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="title-modal">
                            <h3>Reseñas de {selectedCurso.nombre}</h3>
                            <i className="bi bi-x close-icon" onClick={closeModal}></i>
                        </div>
                        <ul className="reseñas-list">
                            {selectedCurso.reseñas.map((reseña, index) => (
                                <li key={index} className="reseña-item">
                                    <p><strong>{reseña.usuario}</strong>:</p>
                                    <div className="estrellas-container">
                                        {renderEstrellas(reseña.estrellas)}
                                    </div>
                                    <p>{reseña.comentario}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </>
    );
};

export default RankingCursos;
