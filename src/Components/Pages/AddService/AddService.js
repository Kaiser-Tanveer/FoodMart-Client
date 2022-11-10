import React from 'react';
import useTitle from '../../../DynamicTitle/DynamicTitle';
import toast, { Toaster } from 'react-hot-toast';

const AddService = () => {
    useTitle('Add service')

    const addServiceHandler = e => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const newService = {
            title,
            price,
            img,
            rating,
            description
        }
        console.log(newService);


        // Posting data to backEnd
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your Service has Added Successfully!!!')
                    form.reset();
                }
                return console.log(data);
            })
            .catch(err => console.error(err));
    }
    return (
        <div className='pt-10 w-4/5 mx-auto'>
            <h1 className='text-5xl font-bold'>Add New <span className='text-primary'>Service</span> Here..</h1>
            <form onSubmit={addServiceHandler}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                    <input name="title" type="text" placeholder="Service Name" className="input input-bordered input-primary w-full" />
                    <input name="price" type="number" placeholder="Service price" className="input input-bordered input-primary w-full" />
                    <input name="img" type="link" placeholder="Image URL" className="input input-bordered input-primary w-full" />
                    <input name="rating" type="text" placeholder="Rating" className="input input-bordered input-primary w-full" />
                </div>
                <textarea name="description" className="textarea textarea-primary w-full mb-8" placeholder="Service Description" />
                <input type="submit" className='btn btn-primary text-white mb-10 flex mx-auto' value="Submit" />
            </form>
            < Toaster />
        </div>
    );
};

export default AddService;