import React from 'react';
import Service from './Service';
import Zoom from 'react-reveal/Zoom';
const Services = () => {
    return (
        <section>
            <div className='bg-primary pt-[50px] pb-[200px]'>
                <h2 className='text-3xl text-center'>Hi, I’m Matt. Nice to meet you.</h2>
                <p className='text-xl text-center w-[50%] mx-auto mt-[20px]'>
                    Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </p>
            </div>
            <div className='grid grid-cols-3 mt-[-100px] mx-[100px]'>
                <Zoom>
                    <Service></Service>
                </Zoom>
                <Zoom>
                    <Service></Service>
                </Zoom>
                <Zoom>
                    <Service></Service>
                </Zoom>
            </div>
        </section>
    );
};

export default Services;