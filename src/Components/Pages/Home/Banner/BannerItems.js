import React from 'react';
import './BannerItems.css'

const BannerItems = ({ slide }) => {
    const { image, id, prev, next } = slide;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='banner-img'>
                <img src={image} className="w-full rounded-xl" alt='' />
            </div>
            <div className="absolute flex transform -translate-y-1/2 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
            <div className="absolute flex transform -translate-y-1/2 left-24 top-1/3">
                <h1 className='text-white text-6xl font-bold hidden md:block'>Affordable<br />
                    Price for Car <br />
                    Service
                </h1>
            </div>
            <div className="absolute w-2/5 flex transform -translate-y-1/2 left-24 top-1/3 lg:top-1/2">
                <p className='md:hidden lg:block text-xl text-white'>There are many variant of passages of available<span className='hidden lg:inline'>, But majority have suffered alteration in som forms</span></p>
            </div>
            <div className="absolute w-2/5 flex transform -translate-y-1/2 left-24 top-3/4">
                <button className="btn btn-warning mr-5">Warning</button>
                <button className="btn btn-outline btn-warning">Warning</button>
            </div>
        </div>
    );
};

export default BannerItems;