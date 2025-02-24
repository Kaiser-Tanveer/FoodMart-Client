import React, { useContext, useState } from 'react';
import './FormBG.css';
import { FaUser } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import { toast, Toaster } from 'react-hot-toast';

const LogIn = () => {
    const { signIn } = useContext(AuthContext);
    useTitle('Login');

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false); // 🔥 Loading state

    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/';

    // Form submit handler 
    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true); // Start loading 🔄
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            const result = await signIn(email, password);
            console.log(result.user);
            toast.success('Logged in Successfully!');
            form.reset();
            navigate(from, { replace: true });
        } catch (err) {
            setError(err.message);
            console.log(err);
        } finally {
            setLoading(false); // Stop loading ✅
        }
    };

    return (
        <div className='formBG'>
            <div className="hero min-h-screen">
                <div className="hero-content grid lg:grid-cols-2 flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <FaUser className='h-16 w-16 text-primary mx-auto' />
                        <h1 className="text-5xl font-bold text-primary text-center">Login now!</h1>
                        <p className="py-6 text-xl">To access all the services, please login first...!!!</p>
                    </div>
                    <form onSubmit={submitHandler}>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    <p className='text-error pb-4'>{error}</p>
                                    <label className="label">
                                        <p className='text-left'>New here? <Link to='/register' className='link-hover text-primary'>Register</Link></p>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary flex items-center justify-center">
                                        {loading ? (
                                            <span className="loading loading-spinner text-white mx-auto b bg-primary">Loading...</span>
                                        ) : (
                                            'Login'
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Toaster />
                </div>
            </div>
        </div>
    );
};

export default LogIn;
