import React from 'react';
import './FormBG.css';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Register = () => {
    return (
        <div className='formBG'>
            <div className="hero min-h-screen">
                <div className="hero-content grid lg:grid-cols-2 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <FaUser className='h-16 w-16 text-primary mx-auto' />
                        <h1 className="text-5xl font-bold text-primary text-center">Register now!</h1>
                        <p className="py-6 text-xl">to access all the services please, Register and Login first...</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="text" name='fName' placeholder="First Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="text" name='lName' placeholder="Last Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" />
                                <label className="label">
                                </label>
                                <p className='text-left'>Already have an account? <Link to='/logIn' className='link-hover text-primary'>Sign In</Link></p>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;