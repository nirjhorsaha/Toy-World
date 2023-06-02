import React, { useContext } from 'react';
import useTitle from '../../hooks/useTitle';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
// const Swal = require('sweetalert2')

const AddToys = () => {
    useTitle('Add Toys');
    const { user } = useContext(AuthContext);
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data);

        fetch("https://toys-server-tau.vercel.app/addtoys", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result);
                if (result.insertedId) {
                    // alert('added successful');
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            });
    }
    // console.log(watch("example"));
    return (
        <div>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6 tracking-widest'>Add Toys</h1>
            <div className=''>
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
                        <input className="btn btn-wide btn-outline " type="submit" />

                    </div>
                </form>
            </div>

        </div>
    );
};

export default AddToys;