import React from 'react';

const About = () => {
    return (
        // Component container
        <div name='about' className='w-full h-dvh bg-[#288bb9] text-[#bac7f0]'>
            <div className='flex flex-col items-center w-full'>
                {/* Begin content headline */}
                <div className='max-w-[1000px] mt-36 w-full grid sm:grid-cols-2 sm:gap-8'>
                    <div className='pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#bc3b9b]'>
                        About
                        </p>
                    </div>
                {/* the following empty div serves to keep the grid even*/}
                <div></div>
                </div>
                {/* Repeatable container for content */}
                <div className='max-w-[1000px] w-full items-center grid sm:grid-cols-2 sm:gap-8'>
                    <div className=''>
                        <p className='m-2 pl-2'>
                        Hi, there. Nice to meet you. I hope you enjoy taking a look around
                        my portfolio. Lorem ipsum cat ipsum dog ipsum vacation ipsum good
                        food ipsum. Lorem ipsum cat ipsum dog ipsum vacation ipsum good
                        food ipsum.
                        </p>
                    </div>
                    <div>
                        <p className='m-2 pl-2'>
                        As a professional X, I ... lorem ipsum cat ipsum dog ipsum
                        vacation ipsum good food ipsum. Lorem ipsum cat ipsum dog ipsum
                        vacation ipsum good food ipsum. Lorem ipsum cat ipsum dog ipsum
                        vacation ipsum good food ipsum.
                        </p>
                    </div>
                </div>
                {/* Repeatable container for content */}
                <div className='max-w-[1000px] w-full items-center grid sm:grid-cols-2 sm:gap-8'>
                    <div className=''>
                        <p className='m-2 pl-2'>
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        </p>
                    </div>
                    <div>
                        <p className='m-2 pl-2'>
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        Lorem ipsum cat ipsum dog ipsum vacation ipsum good food ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;
