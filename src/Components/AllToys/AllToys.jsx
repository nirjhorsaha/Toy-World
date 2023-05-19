import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    useTitle('All Toys');
    const [allToys, setAllToys] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/alltoys')
            .then((res) => res.json())
            .then((result) => {
                setAllToys(result);
            });
    }, []);

    return (
        <div className='mb-6'>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6'>All Toys</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                {/* <label>
                                    <input type="checkbox" className="checkbox" />
                                </label> */}
                            </th>
                            <th>Seller</th>
                            <th>Toy</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* get all toys  */}
                        {
                            allToys.map((allToy) => (
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask w-48 h-32">
                                                    <img src={allToy.pURL} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{allToy.sName }</div>
                                                <div className="text-sm opacity-50">{allToy.sEmail }</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {allToy.tName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{allToy.subCategory }</span>
                                    </td>
                                    <td>{allToy.price} tk</td>
                                    <td className='text-center'>{allToy.aQuantity }</td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">details</button>
                                    </th>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;