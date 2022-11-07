import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const foods = useLoaderData();
    return (
        <div>
            <h1>Total Foods: {foods.length}</h1>
        </div>
    );
};

export default Home;