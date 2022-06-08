import React from 'react';
import image from '../../assests/images/profile.png';
import facebook from '../../assests/icons/facebook.png';
import twitter from '../../assests/icons/twitter.png';
import github from '../../assests/icons/github.png';
import linkedIn from '../../assests/icons/linkedin.png';
import image1 from '../../assests/images/Capture.JPG';
import { MailIcon, AtSymbolIcon } from '@heroicons/react/solid';
import backgroundImage from '../../assests/images/background.png';
import Fade from 'react-reveal/Fade';
import Services from './Services';
import RecentWorks from './RecentWorks';
const Home = () => {
    return (
        <div>
            <section style={{
                background: `url(${backgroundImage})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }} className='grid lg:grid-cols-3 grid-cols-1 lg:px-[100px] px-[20px]'>
                <div className='flex flex-col justify-center'>
                    <Fade left>
                        <h4 className='text-[28px] font-bold'>
                            <Fade left big cascade>
                                Hello, I'am
                            </Fade>
                        </h4>
                        <h2 className='text-5xl font-bold'>
                            <Fade left big cascade>
                                Ariful Islam
                            </Fade>
                        </h2>
                    </Fade>
                    <p className='mt-[30px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim cumque ratione reprehenderit veniam soluta aut cum corrupti exercitationem quibusdam a?</p>
                    <div className='flex items-center mt-[12px]'>
                        <MailIcon class="h-10 w-10 text-blue-500"></MailIcon>
                        <h4 className='text-lg font-bold ml-[5px]'>ariful.islam20234@gmail.com</h4>
                    </div>
                    <div className='mt-[30px]'>
                        <button className=''><img src={facebook} className="w-10 mr-[5px]" alt="" /></button>
                        <button><img src={linkedIn} className="w-10 mr-[5px]" alt="" /></button>
                        <button><img src={github} className="w-10" alt="" /></button>
                    </div>
                </div>
                <div>
                    <img src={image} alt="" />
                </div>
                <Fade right big cascade>
                    <div className='mx-[20px] flex flex-col justify-center'>
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
                                    <h2 className='inline'>Full Stack Developer</h2>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={image1} alt="" />
                            </div>
                            <div className='p-2 bg-slate-300 rounded-md inline-block mt-[10px]'>
                                <h2 className='inline'>Back-End Developer</h2>
                            </div>
                        </div>
                    </div>
                </Fade>
            </section>
            <Services></Services>
            <RecentWorks></RecentWorks>
        </div>
    );
};

export default Home;