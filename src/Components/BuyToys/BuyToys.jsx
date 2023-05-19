import React from 'react';

const BuyToys = () => {
    return (
        <div className='my-6'>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6'>How to Buy?</h1>
            <div class="grid md:grid-cols-3 gap-4 text-center space-y-4 md:space-y-0 w-4/5 mx-auto">
                <div>
                    <img className='rounded-lg w-96' src="https://img.freepik.com/free-vector/kids-toys-design_24908-56648.jpg?w=740&t=st=1684506770~exp=1684507370~hmac=e5a58a9332bb0e2d4524b482afd5bb5f0b8186e0936fbfa67c49de3303183ef8" alt="" srcset="" />
                    <h1 className='text-2xl font-bold mt-6'>Choose a Toy</h1>
                    <p className='font-semibold'>Pick from over 500 of the latest must haved</p>
                </div>
                <div>
                    <img className='rounded-lg w-96' src="https://img.freepik.com/free-photo/father-son-playing-with-toy-cars_23-2148500801.jpg?w=740&t=st=1684507701~exp=1684508301~hmac=be8a8ab1e796f3d27689e74d4188e5686916fda45be18c6001a5b25a4276b404" alt="" srcset="" />
                    <h1 className='text-2xl font-bold mt-6'>Make play</h1>
                    <p className='font-semibold '>Kid discover that builds confidence & sparks magination </p>
                </div>
                <div>
                    <img className='rounded-lg w-96' src="https://img.freepik.com/free-photo/smiling-little-boy-playing-with-toy-cars_23-2148350682.jpg?w=740&t=st=1684507815~exp=1684508415~hmac=ee3d698039e1e71fe13d9206719e8c56d7ec89d1320ec223215974d1c5ee5e85" alt="" srcset="" />
                    <h1 className='text-2xl font-bold  mt-6'>Swap Toys</h1>
                    <p className='font-semibold '>Return any unloved toys and swap it for something else</p>
                </div>
            </div>
        </div>
    );
};

export default BuyToys;