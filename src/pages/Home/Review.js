import React from 'react';
import image from '../../assests/images/pascal.png';
const Review = ({ children }) => {
    return (
        <div className='text-center lg:w-[50%] w-[90%] mx-auto'>
            <div class="avatar">
                <div class="w-24 rounded-full">
                    <img src={image} alt="" />
                </div>
            </div>
            <p className="text-xl">
                “Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.”
            </p>
            <h4 className="text-2xl">
                {children}
            </h4>
            <p>Creative Lead, Good Kind</p>
        </div>
    );
};

export default Review;