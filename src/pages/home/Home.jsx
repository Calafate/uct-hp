import React from 'react';
import Carousel from '../../components/carousel/Carousel';
import Footer from '../../components/common/footer/Footer';
import Menu from '../../components/common/menu/Menu';
import NoticiasHome from '../../components/home/NoticiasHome';
import Objetivos from '../../components/home/Objetivos';
import ScrollButton from '../../components/common/scrollButton/ScrollButton';

function Home() {
    return (
        <div>
            <Menu />
            <Carousel />
            <h1>Unidad de Conocimiento Traslacional Hospitalaria Patagónica</h1>
            <Objetivos />
            <NoticiasHome />
            <ScrollButton />
            <Footer />
        </div>
    )
}

export default Home