import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopbyCategory.css'

const ShopbyCategory = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className='my-6'>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6 tracking-widest'>Toys Category</h1>
            <Tabs className='text-center '>
                <TabList className='flex justify-center items-center gap-2'>
                    <Tab className='border-2 rounded-lg '>
                        <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(1)}>
                            Sports Car
                        </button>
                    </Tab>
                    <Tab className='border-2 rounded-lg '>
                        <button className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(2)}>
                            Regular Car
                        </button>
                    </Tab>
                    <Tab className='border-2 rounded-lg '>
                        <button className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                            onClick={() => toggleTab(3)}>
                            Mini-Truck
                        </button>
                    </Tab>
                </TabList>
                {/* Tab-1 */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {/* side-1 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        {/* side-2 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* Tab-2 */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {/* side-1 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        {/* side-2 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* Tab-3 */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {/* side-1 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                        {/* side-2 */}
                        <div className="card card-side bg-base-100 shadow-xl">
                            <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">Watch</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>

            </Tabs>
        </div>
        // <div>
        //     <h1 className='text-center text-5xl uppercase text-orange-400 font-bold my-6'>Shop by Category</h1>
        //     <div className="container">
        //         <div className="bloc-tabs">
        //             <button
        //                 className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
        //                 onClick={() => toggleTab(1)}
        //             >
        //                 Tab 1
        //             </button>
        //             <button
        //                 className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
        //                 onClick={() => toggleTab(2)}
        //             >
        //                 Tab 2
        //             </button>
        //             <button
        //                 className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
        //                 onClick={() => toggleTab(3)}
        //             >
        //                 Tab 3
        //             </button>
        //         </div>

        //         <div className="content-tabs">
        //             <div
        //                 className={toggleState === 1 ? "content  active-content" : "content"}
        //             >
        //                 <h2>Content 1</h2>
        //                 <hr />
        //                 <p>
        //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        //                     praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
        //                     vel voluptatum?
        //                 </p>
        //             </div>

        //             <div
        //                 className={toggleState === 2 ? "content  active-content" : "content"}
        //             >
        //                 <h2>Content 2</h2>
        //                 <hr />
        //                 <p>
        //                     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        //                     voluptatum qui adipisci.
        //                 </p>
        //             </div>

        //             <div
        //                 className={toggleState === 3 ? "content  active-content" : "content"}
        //             >
        //                 <h2>Content 3</h2>
        //                 <hr />
        //                 <p>
        //                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
        //                     nostrum rerum laudantium totam unde adipisci incidunt modi alias!
        //                     Accusamus in quia odit aspernatur provident et ad vel distinctio
        //                     recusandae totam quidem repudiandae omnis veritatis nostrum
        //                     laboriosam architecto optio rem, dignissimos voluptatum beatae
        //                     aperiam voluptatem atque. Beatae rerum dolores sunt.
        //                 </p>
        //             </div>
        //         </div>
        //     </div>

        // </div>
    );
};

export default ShopbyCategory;