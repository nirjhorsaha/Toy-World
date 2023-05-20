import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

const ToyGallery = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <div className='mt-4 bg-gray-50 p-4 rounded-3xl'>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-4 tracking-widest'>Toys Gallery</h1>
            <p className='text-center italic text-xl mb-4'>Step into a World of Wonder: Explore Our Enchanting Toy Gallery!</p>
            <div class="grid md:grid-cols-3 gap-4 w-4/5 mx-auto">
                <div data-aos="zoom-in">
                    <img src="https://img.freepik.com/free-photo/toy-truck-with-christmas-trees_1252-293.jpg?w=740&t=st=1684407821~exp=1684408421~hmac=b71b9af1a44cc8661d99ebf46aaefbbd711d5805a5f10ab4ddcda907377ab46b" className='rounded-lg' alt="" srcset="" />
                </div>
                
                <div data-aos="zoom-in">
                    <img src="https://img.freepik.com/free-photo/close-up-to  y-car-with-easter-eggs_23-2149318378.jpg?w=740&t=st=1684408075~exp=1684408675~hmac=a6a7bb751d26b4e4ccb235f44644600ca644b66269c96feb238354d017a3dbda" className='rounded-lg' alt="" srcset="" />
                </div>
                <div data-aos="zoom-in">
                    <img src="https://img.freepik.com/free-photo/green-easter-car-with-copy-space_23-2149301292.jpg?w=740&t=st=1684408183~exp=1684408783~hmac=ff7411d4f7f9d717441750152b5b68820a54e5b32f3744763c68fcea331dc0d1" className='rounded-lg' alt="" srcset="" />
                </div>
                <div data-aos="zoom-in">
                    <img src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?w=740&t=st=1684408117~exp=1684408717~hmac=957c31ecf6b5920bc062d7021bcad36f8a5a3e908ba2d9918023ec39c270e0c3" className='rounded-lg' alt="" srcset="" />
                </div>
                <div data-aos="zoom-in">
                    <img src="https://img.freepik.com/free-photo/red-pickup-model-black-floor_1150-16350.jpg?w=740&t=st=1684408105~exp=1684408705~hmac=92d4b7c6fa764c5d1c30bed98489e81fa9dfb74b7e1878d2a682d12e11284c37" className='rounded-lg' alt="" srcset="" />
                </div>
                <div data-aos="zoom-in">
                    <img src="https://img.freepik.com/free-photo/closeup-old-mini-police-car-toy_181624-45993.jpg?w=740&t=st=1684408162~exp=1684408762~hmac=9948a66d6b3c409dffd83c6f32611dfac6bbfd66eb014c299aa00cc8331a39a9" className='rounded-lg' alt="" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default ToyGallery;