import React from 'react';
import BannerItems from './BannerItems';
import img1 from '../../../../Assets/BannerImages/img1.png'
import img2 from '../../../../Assets/BannerImages/img2.png'
import img3 from '../../../../Assets/BannerImages/img3.png'
import img4 from '../../../../Assets/BannerImages/img4.png'
import img5 from '../../../../Assets/BannerImages/img5.png'

const Banner = () => {
    // Obj of Array for carousel 
    const bannerData = [
        {
            image: img1,
            prev: 5,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 1
        }
    ]
    return (
        <div>
            <div className="carousel w-full py-8">
                {
                    bannerData.map(slide => <BannerItems
                        key={slide.id}
                        slide={slide}
                    />)
                }
            </div>
        </div>
    );
};

export default Banner;