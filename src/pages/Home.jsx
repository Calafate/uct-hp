import React from 'react';
/* import Blog from '../components/Blog'; */
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Menu from '../components/Menu';



function Home() {
    return (
        <div>
            <Menu />
            <Carousel />
            {/* <Blog /> */}
            <Footer />
        </div>
    )
}

export default Home