import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        // the name property on this div is used for react smooth scroll
        <div name='home' className='w-full h-screen bg-[#302854]'>
        {/* Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-[#f99094]'>
                <p className='text-[#bc3b9b] my-1'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Name Name</h1>
                <h2 className='text-2xl sm:text-4xl font-bold text-[#288bb9] '>
                I'm a Professional
                </h2>
                <p className='py-4 max-w-[700px] text-[#bac7f0]'>
                I do a lot of cool professional things. ChatGPT says I'm really good
                at what I do.
                </p>
                <div>
                    <button className='group border-2 rounded-lg border-[#f99094] hover:border-[#bc3b9b] hover:text-[#bc3b9b] hover:bg-[#1a131a] p-2 my-2 flex items-center'>
                        <Link to='about' spy={true} smooth={true} offset={-5} duration={500}>
                            <div className='flex items-center'>
                                <span>
                                    Learn More
                                </span>
                                <span className='group-hover:rotate-90 duration-300 ml-2'>
                                    <HiArrowNarrowRight />
                                </span>
                            </div>
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Home;
