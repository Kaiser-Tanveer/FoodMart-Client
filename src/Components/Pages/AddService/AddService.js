import React, { useState, useContext } from 'react';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

const AddService = () => {
    useTitle('Add service');
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        img: '',
        rating: '',
        description: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const addServiceHandler = e => {
        e.preventDefault();
        setLoading(true);

        const newService = { ...formData };
        console.log(newService);

        // Posting data to backend
        fetch('https://food-mart-server.vercel.app/services', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Service has been added successfully!');
                    setFormData({ title: '', price: '', img: '', rating: '', description: '' });
                }
            })
            .catch(err => console.error(err))
            .finally(() => setLoading(false));
    };

    const isDisabled = !user || Object.values(formData).some(value => value.trim() === '');

    return (
        <div className='pt-10 w-4/5 mx-auto border border-primary border-opacity-25 shadow-lg shadow-gray-700 my-10 rounded-lg'>
            <h1 className='text-5xl font-bold'>Add New <span className='text-primary'>Service</span> Here..</h1>
            <form onSubmit={addServiceHandler} className='w-4/5 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                    <input name="title" type="text" placeholder="Service Name" className="input input-bordered input-primary w-full"
                        value={formData.title} onChange={handleChange} />
                    <input name="price" type="number" placeholder="Service price" className="input input-bordered input-primary w-full"
                        value={formData.price} onChange={handleChange} />
                    <input name="img" type="text" placeholder="Image URL" className="input input-bordered input-primary w-full"
                        value={formData.img} onChange={handleChange} />
                    <input name="rating" type="text" placeholder="Rating" className="input input-bordered input-primary w-full"
                        value={formData.rating} onChange={handleChange} />
                </div>
                <textarea name="description" className="textarea textarea-primary w-full mb-8" placeholder="Service Description"
                    value={formData.description} onChange={handleChange} />

                {/* Submit button */}
                <button type="submit" className={`btn btn-primary text-white mb-10 flex mx-auto ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                    disabled={isDisabled}>
                    {loading ? (
                        <span className="loading loading-spinner"></span>
                    ) : (
                        "Submit"
                    )}
                </button>
            </form>
            <Toaster />
        </div>
    );
};

export default AddService;
