import React, { useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { useLoaderData } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import 'react-photo-view/dist/react-photo-view.css';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import { useLoading } from '../../../Contexts/AuthProvider/DetailsLoadingProvider';

const Details = () => {
    const { description, title, img, price } = useLoaderData();
    const { loading, setLoading } = useLoading();
    useTitle('Service Details');

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [setLoading]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    return (
        <div className='w-4/5 mx-auto'>
            <div className="hero min-h-screen bg-base-200 rounded-lg mt-8 shadow-xl border">
                <div className="hero-content flex-col lg:flex-row">
                    <PhotoProvider>
                        <PhotoView src={img}>
                            <img src={img} className="max-w-sm rounded-lg shadow-2xl w-full" alt='' />
                        </PhotoView>
                    </PhotoProvider>
                    <div>
                        <h1 className="text-5xl font-bold">{title}</h1>
                        <h1 className="text-2xl font-bold py-6">
                            Price: ৳<span className='text-error'>{price}</span>
                        </h1>
                        <p className='text-justify'>{description}</p>
                    </div>
                </div>
            </div>
            <Reviews />
        </div>
    );
};

export default Details;
