import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MyReview from '../MyReview/MyReview';
import Reviews from '../Reviews/Reviews';

const Details = () => {
    const { description, title, img, price, review } = useLoaderData();
    return (
        <div className='lg:w-4/5 mx-auto'>
            <div className="hero min-h-screen bg-base-200 rounded-md">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h1 className="text-2xl font-bold py-6">Price: ৳<span className='text-primary'>{price}</span></h1>
                        <p>{description}</p>
                    </div>
                </div>
            </div>
            <Reviews />
            <MyReview />
        </div>
    );
};

export default Details;