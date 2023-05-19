import React from 'react';
import useTitle from '../../hooks/useTitle';
import Header from '../../Components/Header/Header';
import ToyGallery from '../../Components/ToyGallery/ToyGallery';
import ShopbyCategory from '../../Components/ShopbyCategory/ShopbyCategory';
import BuyToys from '../../Components/BuyToys/BuyToys';
import TrendingToys from '../../Components/TrendingToys/TrendingToys';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header />
            <TrendingToys/>
            <ToyGallery />
            <ShopbyCategory />
            <BuyToys />
        </div>
    );
};

export default Home;