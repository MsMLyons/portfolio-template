import React from 'react';
import backgroundImg from '../assets/backgroundImg.png';

const AdditionalWork = () => {
    return (
        <div
        name='work'
        className='w-full h-[1160px] sm:h-[720px] md:h-[750px] lg:h-[850px] bg-[#288bb9] text-[#bac7f0]'
        >
        {/* Container - remove height if height in line above is customized based on screen size */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full'>
                <div className='mt-20'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#bc3b9b]'>
                        Additional Work
                    </p>
                    <p className='py-8'>Take a look at some of my favorite projects.</p>
                </div>
                {/* Grid container for projects */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Card - see index.css for customization */}
                    <div
                        style={{ backgroundImage: `url(${backgroundImg})` }}
                        className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div md:w-[270px] md:h-[200px] lg:w-[320px] lg:h-[250px]'
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
                        className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div md:w-[270px] md:h-[200px] lg:w-[320px] lg:h-[250px]'
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
                        className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div md:w-[270px] md:h-[200px] lg:w-[320px] lg:h-[250px]'
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
                        className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div md:w-[270px] md:h-[200px] lg:w-[320px] lg:h-[250px]'
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
                        className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div md:w-[270px] md:h-[200px] lg:w-[320px] lg:h-[250px]'
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
                        className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 group container rounded-md flex justify-center items-center mx-auto content-div md:w-[270px] md:h-[200px] lg:w-[320px] lg:h-[250px]'
                    >
                        {/* Hover effects */}
                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-2xl font-semibold text-[#bac7f0] tracking-wider'>
                                Project 1
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
                </div>
            </div>
        </div>
    );
};
export default AdditionalWork;
