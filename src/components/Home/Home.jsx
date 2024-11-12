import React from 'react';
import RankingCursos from '../RankingCursos/RankingCursos';
import PreguntasFrecuentes from '../PreguntasFrecuentes/PreguntasFrecuentes';
import Navbar from '../Navbar/Navbar';

const Home = () => {

    return (
        <>
            <Navbar />
            <RankingCursos />
            <PreguntasFrecuentes />
        </>
    );
};

export default Home;
