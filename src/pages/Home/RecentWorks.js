import React from 'react';
import RecentWork from './RecentWork';

const RecentWorks = () => {
    return (
        <section className='mt-[150px]'>
            <h2 className='text-3xl text-center font-bold'>My Recent Work</h2>
            <p className='text-xl text-center mt-[20px]'>Here are a few design projects I've worked on recently.</p>
            <div className='grid grid-cols-3 gap-[25px] mx-[100px] mt-[100px]'>
                <RecentWork></RecentWork>
                <RecentWork></RecentWork>
                <RecentWork></RecentWork>
                <RecentWork></RecentWork>
                <RecentWork></RecentWork>
                <RecentWork></RecentWork>
            </div>
        </section>
    );
};

export default RecentWorks;