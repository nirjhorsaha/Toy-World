import React from 'react';

const TrendingToys = () => {
    return (
        <div className='my-6'>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-4 tracking-widest'>Trending Toys</h1>
            <p className='text-center italic text-xl mb-4'>Hot and Happening: Get Your Hands on the Trendiest Toys of the Season!</p>
            <div class="grid md:grid-cols-3 gap-4 text-center space-y-4 md:space-y-0 w-4/5 mx-auto">
                <div>
                    <img className='w-96 rounded-3xl' src="https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870777.jpg?w=740&t=st=1684508705~exp=1684509305~hmac=b718b37157727ccde8b9dd0b7cf70583dd2b53a940551f272607db450fef964f" alt="" srcset="" />
                </div>
                <div>
                    <img className='w-96 rounded-3xl' src="https://img.freepik.com/free-photo/closeup-orange-wooden-toy-car-tracks-lights_181624-23893.jpg?w=740&t=st=1684508727~exp=1684509327~hmac=7011d241ba0523e320c69c1e7bc4b068dee87d57456e4f76eac828d83036702a" alt="" srcset="" />
                </div>
                <div>
                    <img className='w-96 rounded-3xl'  src="https://img.freepik.com/free-photo/close-up-small-cars-model-road-traffic-conception_1150-20152.jpg?w=740&t=st=1684508760~exp=1684509360~hmac=ac3f8cc2c0a02187c8edec59e54b9e3931631020b0785222c562df06f543372c" alt="" srcset="" />
                </div>
            </div>

        </div>
    );
};

export default TrendingToys;