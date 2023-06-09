import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'

const UpdateToyDetails = () => {
    useTitle('Update Toy');
    const { user } = useContext(AuthContext);
    const { id } = useParams();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);

        fetch(`https://toys-server-tau.vercel.app/alltoys/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    }
    return (
        <div>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6 tracking-widest'>Update Toy Details</h1>
            <div >
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='grid md:grid-cols-3 gap-4 '>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Picture URL</span>
                            </label>
                            <input type='text' className='input input-bordered w-full ' placeholder='Picture URL'
                                {...register("pURL", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Seller Name</span>
                            </label>
                            <input type='text' className='input input-bordered w-full ' placeholder='Seller Name'
                                {...register("sName", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Seller E-mail</span>
                            </label>
                            <input type='text' className='input input-bordered w-full ' placeholder='Seller E-mail' value={user?.email}
                                {...register("sEmail", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Toy Name</span>
                            </label>
                            <input type='text' className='input input-bordered w-full ' placeholder='Toy Name'
                                {...register("tName", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type='number' className='input input-bordered w-full ' placeholder='Price'
                                {...register("price", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Rating</span>
                            </label>
                            <input type='number' className='input input-bordered w-full ' placeholder='Rating'
                                {...register("rating", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Available Quantity</span>
                            </label>
                            <input type='number' className='input input-bordered w-full ' placeholder='Available Quantity'
                                {...register("aQuantity", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Details</span>
                            </label>
                            <input type='text' className='input input-bordered w-full ' placeholder='Details'
                                {...register("details", { required: true })} />
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                        <div>
                            <label className="label">
                                <span className="label-text font-semibold">Sub-category</span>
                            </label>
                            <select {...register("subCategory")}>
                                <option value="Regular-Car">Regular-Car</option>
                                <option value="Sports-Car">Sports-Car</option>
                                <option value="Mini-Truck">Mini-Truck</option>
                            </select>
                            {errors.exampleRequired && <span>This field is required</span>}
                        </div>
                    </div>
                    <div className='text-center my-4'>
                        <input className="btn btn-wide btn-outline " type="submit" value="Update Toy" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateToyDetails;