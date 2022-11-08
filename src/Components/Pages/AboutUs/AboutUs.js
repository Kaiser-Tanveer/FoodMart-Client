import React from 'react';
import jhnkrPP from '../../../Assets/about/Jhnkrpp.png';
import mypp from '../../../Assets/about/mypp.png';
import gates from '../../../Assets/about/bilGates.png';

const AboutUs = () => {
    return (
        <div className='lg:w-4/5 mx-auto py-20'>
            <h1 className='text-5xl font-bold py-10'>About Us</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="mx-10 bg-slate-300 rounded-full mt-10">
                        <img src={jhnkrPP} alt="Advisor" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Jhankar Mahbub</h2>
                        <h2 className="card-title text-sm">Post: Advisor</h2>
                        <p>I love all the guys of in this firm very much.</p>
                        <div className="card-actions">
                            <p></p>
                            <p></p>
                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="mx-10 mt-10 bg-slate-300 rounded-full">
                        <img src={mypp} alt="Founder" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Kaiser Tanveer</h2>
                        <h2 className="card-title text-sm">Post: Founder</h2>
                        <p>I have funded a healthy number wealth for this farm.</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>

                <div className="card bg-base-100 shadow-xl">
                    <figure className="mx-10 mt-10 bg-slate-300 rounded-full">
                        <img src={gates} alt="billGates" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Bill Gates</h2>
                        <h2 className="card-title text-sm">Post: Co-founder</h2>
                        <p>Now a days I am feeling like little bit needy of this firm. So I invested here.</p>
                        <div className="card-actions">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;