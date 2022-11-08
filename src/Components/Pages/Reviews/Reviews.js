import React from 'react';

const Reviews = () => {
    return (
        <div>
            <form>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 my-10'>
                    <input name="fName" type="text" placeholder="First Name" className="input input-bordered input-primary w-full" />
                    <input name="lName" type="text" placeholder="Last Name" className="input input-bordered input-primary w-full" />
                    <input name="phone" type="number" placeholder="Your Phone" className="input input-bordered input-primary w-full" />
                    <input name="email" type="email" placeholder="Your Email" className="input input-bordered input-primary w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-primary w-full mb-8" placeholder="Your Message" />
                <input type="submit" className='btn btn-primary text-white mb-10 flex mx-auto' value="Submit" />
            </form>
        </div>
    );
};

export default Reviews;