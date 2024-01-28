import React from 'react';
import backgroundImg from '../assets/backgroundImg.png';

const Work = () => {
    return (
        <div name='work' className='w-full h-auto bg-[#302854] text-[#bac7f0]'>
        {/* Container - remove height if necessary */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-dvh'>
                <div className=''>
                    <p className='text-4xl font-bold inline border-b-4 border-[#bc3b9b]'>
                        Work
                    </p>
                    <p className='py-8'>Take a look at some of my favorite projects.</p>
                </div>
                {/* Grid container for projects */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {/* Card - see index.css for customization */}
                    <div
                        style={{ backgroundImage: `url(${backgroundImg})` }}
                        className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div h-auto md:w-[320px] md:h-[250px]'
                    >
                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-semibold text-[#bac7f0] tracking-wider'>
                                Project
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-[#bac7f0] border-[#bac7f0] font-semibold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-[#bac7f0] border-[#bac7f0] font-semibold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                {/* Card - see index.css for customization */}
                <div
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                    className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div h-auto md:w-[320px] md:h-[250px]'
                >
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-semibold text-[#bac7f0] tracking-wider'>
                            Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-[#bac7f0] border-[#bac7f0] font-semibold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-[#bac7f0] border-[#bac7f0] font-semibold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Card - see index.css for customization */}
                <div
                    style={{ backgroundImage: `url(${backgroundImg})` }}
                    className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div h-auto md:w-[320px] md:h-[250px]'
                >
                    {/* Hover effects */}
                    <div className='opacity-0 group-hover:opacity-100 text-center'>
                        <span className='text-2xl font-semibold text-[#bac7f0] tracking-wider'>
                            Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-[#bac7f0] border-[#bac7f0] font-semibold text-lg'>
                                    Demo
                                </button>
                            </a>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-black text-[#bac7f0] border-[#bac7f0] font-semibold text-lg'>
                                    Code
                                </button>
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2nd row - better if background color for all components is the same due to height overflow */}
                {/* Maybe a better option to make a separate component per project type - front end, python, etc, w/only 3 projects per */}
                {/* Card - see index.css for customization */}
                </div>
            </div>
        </div>
    );
};
export default Work;