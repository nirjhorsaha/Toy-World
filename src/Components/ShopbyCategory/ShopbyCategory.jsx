import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopbyCategory.css'
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ShopbyCategory = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div className='my-6'>
            <h1 className='text-center text-5xl uppercase text-orange-400 font-bold mb-6 tracking-widest'>Toys Category</h1>
            <Tabs className='text-center '>
                <TabList className='flex justify-center items-center gap-2  mb-4'>
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
                    <div className='grid md:grid-cols-2 gap-4 mb-4'>
                        {/* side-1 */}
                        <div className="card card-side bg-base-100 shadow-xl w-96 md:w-auto">
                            <figure>
                                <img className='w-96' src="https://img.freepik.com/free-photo/close-up-people-stand-near-small-tree-footpath_1150-20134.jpg?w=740&t=st=1684564630~exp=1684565230~hmac=207d214a62f33d29ea9935eb942a8fa156079c56dea77659c363c2284438939b" alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">White Sports Car Pro!</h2>
                                <p className='font-bold italic'>Price 250 tk</p>
                                <div className="card-actions">
                                    <p> <span className='italic font-semibold'>Ratings:</span>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* side-2 */}
                        <div className="card card-side bg-base-100 shadow-xl w-96 md:w-auto">
                            <figure>
                                <img className='w-96' src="https://img.freepik.com/free-photo/toy-red-car-with-pinecone-top_1252-14.jpg?w=740&t=st=1684564450~exp=1684565050~hmac=c71f054ebb0afd27176ff0cc6d718ccf8c1e75ae3982e7f51e22003f504f115a" alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions">
                                    <p> <span className='italic font-semibold'>Ratings:</span>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={4}
                                            readOnly
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* Tab-2 */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-4 mb-4'>
                        {/* side-1 */}
                        <div className="card card-side bg-base-100 shadow-xl w-96 md:w-auto">
                            <figure>
                                <img className='w-96' src="https://img.freepik.com/free-photo/supply-chain-representation-with-yellow-van_23-2149853108.jpg?w=740&t=st=1684565715~exp=1684566315~hmac=870497d62c491016e7362cdae6467ca966508942d34692152c825fdefc6ccb56" alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions">
                                    <p> <span className='italic font-semibold'>Ratings:</span>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={3}
                                            readOnly
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* side-2 */}
                        <div className="card card-side bg-base-100 shadow-xl w-96 md:w-auto">
                            <figure>
                                <img className='w-96' src="https://img.freepik.com/free-photo/travel-elements-composition-with-letters_23-2147981842.jpg?w=740&t=st=1684565753~exp=1684566353~hmac=21b6ef5110d8a0078851883f59a49b09baef01a23871cbcf7149541e67c3abe1" alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions">
                                    <p> <span className='italic font-semibold'>Ratings:</span>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={5}
                                            readOnly
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </TabPanel>
                {/* Tab-3 */}
                <TabPanel>
                    <div className='grid md:grid-cols-2 gap-4'>
                        {/* side-1 */}
                        <div className="card card-side bg-base-100 shadow-xl w-96 md:w-auto">
                            <figure>
                                <img className='w-96' src="https://img.freepik.com/free-photo/red-pickup-model-black-floor_1150-16350.jpg?w=740&t=st=1684564425~exp=1684565025~hmac=daa55d78157698d26d9e2c14202ae9d6690422255b16e240417f994216081750" alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions">
                                    <p> <span className='italic font-semibold'>Ratings:</span>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={4}
                                            readOnly
                                        />
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* side-2 */}
                        <div className="card card-side bg-base-100 shadow-xl w-96 md:w-auto">
                            <figure>
                                <img className='w-96' src="https://img.freepik.com/free-photo/business-planning-concept-side-view-forklift-truck-stacking-wooden-blocks_176474-9256.jpg?w=740&t=st=1684564672~exp=1684565272~hmac=599149d32c6ad5c7551fb2a8614adbb36c537700149e8b680d9d6fd3802ebfd7" alt="Movie" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title">New movie is released!</h2>
                                <p>Click the button to watch on Jetflix app.</p>
                                <div className="card-actions">
                                    <p> <span className='italic font-semibold'>Ratings:</span>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={5}
                                            readOnly
                                        />
                                    </p>
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