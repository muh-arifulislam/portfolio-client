import React from 'react';
import image from '../../assests/images/profile.png';
import facebook from '../../assests/icons/facebook.png';
import twitter from '../../assests/icons/twitter.png';
import github from '../../assests/icons/github.png';
import linkedIn from '../../assests/icons/linkedin.png';
import image1 from '../../assests/images/Capture.JPG';
const Home = () => {
    return (
        <div>
            <section className='grid lg:grid-cols-3 grid-cols-1 lg:mx-[100px] mx-[20px]'>
                <div className='flex flex-col justify-center'>
                    <h4 className='text-[28px] font-bold'>Hello, I'am</h4>
                    <h2 className='text-5xl font-bold'>Ariful Islam</h2>
                    <p className='mt-[30px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim cumque ratione reprehenderit veniam soluta aut cum corrupti exercitationem quibusdam a?</p>
                    <div className='mt-[50px]'>
                        <button className=''><img src={facebook} className="w-10 mr-[5px]" alt="" /></button>
                        <button><img src={linkedIn} className="w-10 mr-[5px]" alt="" /></button>
                        <button><img src={github} className="w-10" alt="" /></button>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
                <div className='mx-[20px]'>
                    <div>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div className='p-2 bg-slate-300 rounded-md inline-block mt-[10px]'>
                            <h2 className='inline'>Front-End Developer</h2>
                        </div>
                    </div>
                    <div className='flex justify-end lg:my-[-20px] my-[20px]'>
                        <div>
                            <div>
                                <img src={image1} alt="" />
                            </div>
                            <div className='p-2 bg-slate-300 rounded-md inline-block mt-[10px]'>
                                <h2 className='inline'>Front-End Developer</h2>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div className='p-2 bg-slate-300 rounded-md inline-block mt-[10px]'>
                            <h2 className='inline'>Front-End Developer</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;