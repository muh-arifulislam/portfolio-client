import React from 'react';
import RecentWork from './RecentWork';
import Fade from 'react-reveal/Fade';
const RecentWorks = () => {
    return (
        <section className='mt-[150px] lg:mx-[100px] mx-[20px]'>
            <div className='grid lg:grid-cols-2 grid-cols-1
             lg:gap-[100px] gap-[50px]  mt-[100px]'>
                <Fade left big cascade>
                    <div className='flex flex-col lg:gap-[100px] gap-[50px]'>
                        <div>
                            <h2 className='lg:text-3xl  font-bold'>My Creative Works,
                                <br />
                                Selected Projects.
                            </h2>
                            <p className='lg:text-xl mt-[20px]'>Here are a few design projects I've worked on recently.</p>
                            <button className="btn btn-outline btn-primary rounded-full lg:mt-[50px] mt-[30px] px-[30px]">Explore More</button>
                        </div>
                        <div>
                            <RecentWork></RecentWork>
                        </div>
                    </div>
                </Fade>
                <Fade right big cascade>
                    <div className='flex flex-col lg:gap-[100px] gap-[50px]'>
                        <div>
                            <RecentWork></RecentWork>
                        </div>
                        <div>
                            <RecentWork></RecentWork>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default RecentWorks;