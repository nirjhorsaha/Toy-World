import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import useTitle from '../../hooks/useTitle';

const SingleToyDetails = () => {
    useTitle('Toy Details');
    const { id } = useParams();

    const [singleToy, setSingleToy] = useState();

    useEffect(() => {
        fetch(`https://toys-server-tau.vercel.app/alltoys/${id}`)
            .then((res) => res.json())
            .then((data) => setSingleToy(data));
        // console.log(data);
    }, []);


    return (
        <div className='my-6'>
            <h1 className='text-center text-3xl font-bold mb-2'>{singleToy?.tName} - Details</h1>
            <div className='text-center'>
                <p className='text-base badge badge-ghost mb-4 font-bold'>Category: {singleToy?.subCategory}</p>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl border ">
                <figure>
                    <img className='w-96' src={singleToy?.pURL} alt="Album" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">Seller: {singleToy?.sName}</h2>
                    <p className='italic'>Seller E-mail: <span className='badge badge-ghost'>{singleToy?.sEmail}</span></p>
                    <p className='font-bold italic text-xl'>Toy Details: <span className='font-normal'>{singleToy?.details}</span></p>
                    <div class="grid md:grid-cols-3 gap-4 text-xl">
                        <div className='italic font-semibold'>Price: {singleToy?.price} Tk</div>
                        <div className='flex italic font-semibold'>Ratings:
                            <p>
                                <Rating
                                    style={{ maxWidth: 120 }}
                                    value={singleToy?.rating}
                                    readOnly
                                />
                            </p>
                        </div>
                        <div className='italic font-semibold'>Available Quantity: {singleToy?.aQuantity}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleToyDetails;