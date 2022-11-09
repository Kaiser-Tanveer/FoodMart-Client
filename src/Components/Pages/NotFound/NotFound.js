import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import useTitle from '../../../DynamicTitle/DynamicTitle';

const NotFound = () => {
    useTitle('Not Found')
    return (
        <div className='restricted text-white pb-52 pt-12'>
            <h1 className='text-6xl font-bold text-primary'>Oops!!!</h1>
            <div className='flex mx-auto justify-center items-center py-5'>
                <h3 className='text-3xl font-bold'>4<span className='text-primary'>0</span>4|</h3>
                <p className='text-xl'><span className='text-4xl font-semibold'> N</span>ot Found</p>
            </div>
            <p>The page you are trying to redirect <br /> is not Available</p>
            <button className='btn btn-primary mt-8'><Link to='/'>Return Home</Link></button>
        </div>
    );
};

export default NotFound;