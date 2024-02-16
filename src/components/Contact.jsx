import React from 'react';

const Contact = () => {
    return (
        <div
            name='contact'
            className='w-full h-dvh bg-[#1a131a] flex justify-center p-4'
        >
            {/* Could connect to GetForm.io or another provider */}
            {/* method='POST' & action='' should have the link to the form provider */}
            <form method='' action='' className='flex flex-col max-w-[600px] w-full'>
            <div className='mt-20 pb-4 text-[#bac7f0]'>
                <p className='text-4xl font-bold inline border-b-4 border-[#bc3b9b]'>
                Contact
                </p>
                <p className='py-8'>
                Send me a message on LinkedIn or use the form below to get in
                touch.
                </p>
            </div>
            <input
                type='text'
                placeholder='Name'
                name='name'
                className='rounded-md p-3 mb-2 bg-[#bac7f0] text-[#161718] placeholder-gray-500'
            />
            <input
                type='email'
                placeholder='Email'
                name='email'
                className='rounded-md p-3 mb-2 bg-[#bac7f0] text-[#161718] placeholder-gray-500'
            />
            <textarea
                name='message'
                rows='10'
                placeholder='Please type your message here'
                className='rounded-md p-3 mb-2 bg-[#bac7f0] text-[#161718] placeholder-gray-500'
            ></textarea>
            <button className='rounded-md p-3 mb-2 text-[#bc3b9b] text-bold w-[200px] border-2 border-[#bc3b9b] hover:scale-105 duration-300'>
                Let's Connect!{' '}
            </button>
            </form>
        </div>
    );
};
export default Contact;