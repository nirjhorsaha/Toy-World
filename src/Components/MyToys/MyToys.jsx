import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { AiOutlineDelete } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom'


const MyToys = () => {
    useTitle('My Toys');
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/mytoys/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setMyToys(data);
            });
    }, [user]);

    const handleDelete = id => {
        const proceed = confirm('Are You sure you want to delete');
        if (proceed) {
            fetch(`http://localhost:5000/mytoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successful');
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6 tracking-widest'>My Toys</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full mb-6">
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
                    {
                        myToys.map((myToy) => (
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
                                                <img src={myToy?.pURL} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{myToy?.sName}</div>
                                            <div className="text-sm badge badge-ghost badge-sm">{myToy?.sEmail}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {myToy?.tName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{myToy?.subCategory}</span>
                                </td>
                                <td>{myToy?.price} tk</td>
                                <td>{myToy?.aQuantity}</td>
                                <th >
                                    <Link to={`/${myToy._id}`}>
                                        <button className="btn btn-ghost">details</button>
                                    </Link>
                                    {/* delete button */}
                                    <button onClick={() => handleDelete(myToy._id)}
                                        className="btn btn-ghost "><AiOutlineDelete />
                                    </button>
                                    {/* modified button */}
                                    <Link to={`/${myToy._id}`}>
                                        <button className="btn btn-ghost"> <HiOutlinePencilAlt /> </button>
                                    </Link>
                                </th>
                            </tr>
                        ))
                    }
                </table>
            </div>
        </div>
    );
};

export default MyToys;