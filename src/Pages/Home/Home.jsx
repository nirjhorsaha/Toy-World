import React from 'react';
import useTitle from '../../hooks/useTitle';
import Header from '../../Components/Header/Header';

const Home = () => {
    useTitle('Home');
    return (
        <div>
            <Header/>
        </div>
    );
};

export default Home;