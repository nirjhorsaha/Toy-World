import React from 'react';
import useTitle from '../../hooks/useTitle';
import Header from '../../Components/Header/Header';
import ToyGallery from '../../Components/ToyGallery/ToyGallery';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header />
            <ToyGallery/>
        </div>
    );
};

export default Home;