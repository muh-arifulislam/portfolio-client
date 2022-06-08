import React from 'react';
import Review from './Review';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const Reviews = () => {
    return (
        <section className='mt-[150px]'>
            <h2 className='text-3xl text-center font-bold'>Testimonials</h2>
            <p className='text-xl text-center'>People I've worked with have said some nice things...</p>
            <div className='mt-[100px]'>
                <Carousel showThumbs={false} autoPlay infiniteLoop showArrows={true} >
                    <Review>arif islam</Review>
                    <Review>nam koitam na</Review>
                    <Review>tor kire</Review>
                </Carousel>
            </div>
        </section>
    );
};

export default Reviews;