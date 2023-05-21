import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom'

const AllToys = () => {
    useTitle('All Toys');
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch('https://toys-server-tau.vercel.app/alltoys')
            .then((res) => res.json())
            .then((result) => {
                setAllToys(result);
                // console.log(result);
            });
    }, []);

    const handleSearch = () => {
        fetch(`https://toys-server-tau.vercel.app/toys/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setAllToys(data);
            });
    };

    return (
        <div className='mb-6'>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6 tracking-widest'>All Toys</h1>
            <div className="overflow-x-auto w-full">
                {/* search field */}
                <div className="form-control">
                    <div className="input-group justify-center mb-4">
                        <input onChange={(e) => setSearchText(e.target.value)}
                            type="text" placeholder="Search Toys…" className="input input-bordered" />
                        <button onClick={handleSearch} className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
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
                                                    <img src={allToy?.pURL} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{allToy?.sName}</div>
                                                <div className="text-sm badge badge-ghost badge-sm">{allToy?.sEmail}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {allToy?.tName}
                                        <br />
                                        <span className="badge badge-ghost badge-sm">{allToy?.subCategory}</span>
                                    </td>
                                    <td>{allToy?.price} tk</td>
                                    <td className='text-center'>{allToy?.aQuantity}</td>
                                    <th>
                                        <Link to={`/${allToy._id}`}>
                                            <button className="btn btn-ghost btn-xs">details</button>
                                        </Link>
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