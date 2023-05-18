import React from 'react';
import headerImg from '/toys-2.jpg'

const Header = () => {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 ">
                <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-8 lg:grid-cols-12 ">
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="text-center md:text-left md:max-w-2xl mb-4 text-2xl font-extrabold tracking-tight leading-none md:text-7xl dark:text-white uppercase ">
                            Find the best toys For <br /> <span className='text-orange-400 tracking-wide'>your children</span>
                        </h1>
                        <p className="max-w-2xl mb-6 font-semibold text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400 tracking-widest">We delever boxs of fantastic toys straight to your doors..</p>
                        <button className="inline-flex items-center justify-center px-5 py-3 mb-4 mr-3 text-base font-bold text-center text-orange-400 rounded-full border-2">
                            Get your toys
                            <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="lg:mt-0 lg:col-span-5 sm:flex-col lg:flex">
                        <img className='rounded md:rounded-l-3xl' src={headerImg} alt="mockup" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;