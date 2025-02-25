import React, { useContext, useState } from 'react';
import './FormBG.css';
import { FaUser, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import { toast, Toaster } from 'react-hot-toast';
import { ColorRing } from 'react-loader-spinner';

const Register = () => {
    const { createUser, googleLogIn } = useContext(AuthContext);
    useTitle('Register');
    const location = useLocation();
    const navigate = useNavigate();    
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    
    const from = location.state?.from?.pathname || '/';

    const submitHandler = e => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const form = e.target;
        const name = `${form.fName.value} ${form.lName.value}`;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                setLoading(false);
                user.displayName = name;
                form.reset();
            })
            .catch(err => console.error(err))
    }
    return (
        <div className='formBG'>
            <div className="hero min-h-screen">
                <div className="hero-content grid lg:grid-cols-2 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <FaUser className='h-16 w-16 text-primary mx-auto' />
                        <h1 className="text-5xl font-bold text-primary text-center">Register now!</h1>
                        <p className="py-6 text-xl">to access all the services please, Register and Login first...</p>
                    </div>
                    <form onSubmit={submitHandler}>
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
                                    <button className="btn btn-primary flex items-center justify-center">
                                        {loading ? (
                                            <>
                                            <ColorRing
                                            visible={true}
                                            height="30"
                                            width="30"
                                            ariaLabel="color-ring-loading"
                                            wrapperStyle={{}}
                                            wrapperClass="color-ring-wrapper"
                                            colors={['#ffffff', '#ffffff', '#ffffff', '#ffffff', '#ffffff']}
                                            />
                                                <span className='mr-2 animate-pulse'>Loading ...</span>
                                            </>
                                        ) : (
                                            'Register'
                                        )}
                                    </button>
                                </div>
                                <div className='pt-10 grid grid-cols-3 items-center mx-auto'>
                                    <div>
                                        <hr className='w-full border border-primary' />
                                    </div>
                                    <button onClick={
                                        () => googleLogIn()
                                            .then(result => {
                                                const user = result.user;
                                                console.log(user);
                                                toast.success('Logged in Successfully!')
                                                navigate(from, { replace: true });
                                            })
                                            .then(err => console.error(err))
                                    } className='btn btn-primary btn-outline shadow-2xl'><FaGoogle /></button>
                                    <div>
                                        <hr className='w-full border border-primary' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Toaster />
        </div>
    );
};

export default Register;