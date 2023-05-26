import React from 'react';
import Banner from './Banner';
import Feature from './Feature';
import Categories from './Categories';
import Product from './Product';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            <Categories></Categories>
            <Product></Product>
        </div>
    );
};

export default Home;