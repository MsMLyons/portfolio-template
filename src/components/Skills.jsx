import React from 'react';
import HTML from '../assets/html.png';

const Skills = () => {
    return (
        <div name='skills' className='w-full h-dvh bg-[#288bb9] text-[#bac7f0]'>
        {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-dvh'>
                <div className=''>
                    <p className='text-4xl font-bold inline border-b-4 border-[#bc3b9b]'>
                        Skills
                    </p>
                    <p className='py-8'>
                        These are some of the technologies and tools I enjoy working with.
                    </p>
                </div>
                {/* Icon container */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                    <div className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 font-bold'>HTML</p>
                    </div>
                    <div className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 font-bold'>HTML</p>
                    </div>
                    <div className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 font-bold'>HTML</p>
                    </div>
                    <div className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 font-bold'>HTML</p>
                    </div>
                    <div className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 font-bold'>HTML</p>
                    </div>
                    <div className='shadow-lg shadow-[#1a131a] hover:scale-110 duration-500 rounded-md'>
                        <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                        <p className='my-4 font-bold'>HTML</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Skills;