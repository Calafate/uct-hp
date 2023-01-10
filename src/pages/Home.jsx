import React from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import NoticiasHome from '../components/NoticiasHome';
import Objetivos from '../components/Objetivos';

function Home() {
    return (
        <div>
            <Menu />
            <Carousel />
            <Objetivos />
            <NoticiasHome />
            <Footer />
        </div>
    )
}

export default Home