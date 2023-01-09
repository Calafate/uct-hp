import React from 'react';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Menu from '../components/Menu';
import NoticiasHome from '../components/NoticiasHome';

function Home() {
    return (
        <div>
            <Menu />
            <Carousel />
            <NoticiasHome />
            <Footer />
        </div>
    )
}

export default Home