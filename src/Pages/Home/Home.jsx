import React from 'react';
import useTitle from '../../hooks/useTitle';
import Header from '../../Components/Header/Header';
import ToyGallery from '../../Components/ToyGallery/ToyGallery';
import ShopbyCategory from '../../Components/ShopbyCategory/ShopbyCategory';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header />
            <ToyGallery />
            <ShopbyCategory/>
        </div>
    );
};

export default Home;