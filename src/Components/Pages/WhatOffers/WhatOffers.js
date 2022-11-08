import React from 'react';
import farmbg from '../../../Assets/images/firmBG.png';

const WhatOffers = () => {
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content lg:w-4/5 mx-auto flex-col lg:flex-row-reverse">
                    <img src={farmbg} className="max-w-sm h-full rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">What we Offer!!!</h1>
                        <p className="py-6">How your food is grown or raised can have a major impact on your mental and emotional health as well as the environment. Organic foods often have more beneficial nutrients, such as antioxidants, than their conventionally-grown counterparts and people with allergies to foods, chemicals, or preservatives may find their symptoms lessen or go away when they eat only organic foods.

                            Organic produce contains fewer pesticides. Chemicals such as synthetic fungicides, herbicides, and insecticides are widely used in conventional agriculture and residues remain on (and in) the food we eat.

                            Organic food is often fresher because it doesn't contain preservatives that make it last longer. Organic produce is sometimes (but not always, so watch where it is from) produced on smaller farms nearer to where it is sold.

                            Organic farming tends to be better for the environment. Organic farming practices may reduce pollution, conserve water, reduce soil erosion, increase soil fertility, and use less energy. Farming without synthetic pesticides is also better for nearby birds and animals as well as people who live close to farms.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatOffers;