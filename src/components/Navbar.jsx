import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram, FaTwitter} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/m-logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#1a131a] text-[#bc3b9b] font-bold'>
        <div>
            <img
            src={Logo}
            alt='logo'
            style={{ width: '80px' }}
            className='rounded-lg'
            />
        </div>

        {/* menu */}
        <div className='hidden md:flex'>
            <ul className='flex'>
                <li className='hover:text-[#288bb9]'>
                    <Link to='home' spy={true} smooth={true} offset={-5} duration={500}>
                    Home
                    </Link>
                </li>
                <li className='hover:text-[#288bb9]'>
                    <Link to='about' spy={true} smooth={true} offset={-5} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-[#288bb9]'>
                    <Link to='work' spy={true} smooth={true} offset={-5} duration={500}>
                    Work
                    </Link>
                </li>
                <li className='hover:text-[#288bb9]'>
                    <Link to='skills' spy={true} smooth={true} offset={-5} duration={500}>
                    Skills
                    </Link>
                </li>
                <li className='hover:text-[#288bb9]'>
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={500}>
                    Contact
                    </Link>
                </li>
            </ul>
        </div>

        {/* hamburger */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile menu */}
        <ul
            className={
            !nav
                ? 'hidden'
                : ' absolute top-0 left-0 w-full h-screen bg-[#121244] flex flex-col justify-center items-center'
            }
        >
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='home' spy={true} smooth={true} offset={-5} duration={500}>
                Home
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='about' spy={true} smooth={true} offset={-5} duration={500}>
                About
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='work' spy={true} smooth={true} offset={-35} duration={500}>
                Work
                </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='skills' spy={true} smooth={true} offset={-55} duration={500}>
                    Skills
                    </Link>
            </li>
            <li className='py-6 text-4xl'>
                <Link onClick={handleClick} to='contact' spy={true} smooth={true} offset={50} duration={500}>
                    Contact
                    </Link>
            </li>
        </ul>

        {/* social icons */}
        {/* when adding or removing social icons, adjust the percentage of the top in the first div of this section */}
        <div className='hidden lg:flex fixed flex-col top-[22%] left-0 text-[#fbf7f7]'>
            <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0A66C2]'>
                <a className='flex justify-between items-center w-full' href='/'>
                LinkedIn
                <FaLinkedin size={30} className='' />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a className='flex justify-between items-center w-full' href='/'>
                Github <FaGithub size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#26a7de]'>
                <a className='flex justify-between items-center w-full' href='/'>
                Twitter <FaTwitter size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#962fbf]'>
                <a className='flex justify-between items-center w-full' href='/'>
                Instagram <FaInstagram size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#f99094]'>
                <a className='flex justify-between items-center w-full' href='/'>
                Email <HiOutlineMail size={30} />
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#288bb9] '>
                <a className='flex justify-between items-center w-full' href='/'>
                Resume <BsFillPersonLinesFill size={30} />
                </a>
            </li>
            </ul>
        </div>
        </div>
    );
};
export default Navbar;
