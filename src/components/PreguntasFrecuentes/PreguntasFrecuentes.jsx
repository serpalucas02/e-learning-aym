import React, { useState, useRef, useEffect } from 'react';
import data from '../../data.json';
import './PreguntasFrecuentes.css';

const PreguntasFrecuentes = () => {
    const { preguntasFrecuentes } = data;
    const [openIndex, setOpenIndex] = useState(null);
    const contentRefs = useRef([]);

    const toggleRespuesta = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    useEffect(() => {
        contentRefs.current.forEach((ref, index) => {
            if (ref) {
                ref.style.height = openIndex === index ? `${ref.scrollHeight}px` : '0px';
            }
        });
    }, [openIndex]);

    return (
        <div>
            <h2 className="titulo-faq">Preguntas Frecuentes</h2>
            <ul className="preguntas-list">
                {preguntasFrecuentes.map((pregunta, index) => (
                    <li key={pregunta.id} className="pregunta-item" onClick={() => toggleRespuesta(index)}>
                        <div className="pregunta-header">
                            <span>{pregunta.pregunta}</span>
                            <i className={`bi bi-chevron-down arrow ${openIndex === index ? 'rotate' : ''}`}></i>
                        </div>
                        <div
                            ref={(el) => (contentRefs.current[index] = el)}
                            className={`respuesta-item ${openIndex === index ? 'expanded' : ''}`}
                        >
                            {pregunta.respuesta}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PreguntasFrecuentes;
