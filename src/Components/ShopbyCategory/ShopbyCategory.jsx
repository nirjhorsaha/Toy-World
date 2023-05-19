import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './ShopbyCategory.css'

const ShopbyCategory = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    return (
        <div>
            <Tabs className='text-center '>
                <TabList className='flex justify-center items-center'>
                    <Tab>Title 1</Tab>
                    <Tab>Title 2</Tab>
                </TabList>
                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
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