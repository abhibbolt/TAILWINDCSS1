import React from 'react'
import { FaBars } from "react-icons/fa6";

const Header = () => {
    return (
        <div className='flex justify-between'>
            <div className='flex items-center justify-center gap-2'>
                <img src="./src/assets/Logo.svg" alt="Logo" />
                <button className='bg-gradient-to-r from-orange-400 to-red-400 text-white px-2 py-1 rounded-3xl'>Hotsterr is hiring</button>
            </div>
            <ul className='hidden lg:flex justify-between items-center font-lato text-gray-400 gap-6'>
                <li><a href="#">Plans</a></li>
                <li><a href="#">Find Domain</a></li>
                <li><a href="#">Why Hoster</a></li>
            </ul>
            <div className='hidden lg:flex justify-center items-center font-lato gap-6'>
                <a href="#" className='text-gray-400 '>Sign In</a>
                <button className='bg-gradient-to-r from-orange-400 to-blue-400 text-white px-2 py-1 rounded-3xl'>Join Waitlist</button>
            </div>
            <div className='lg:hidden'>
                <FaBars />
            </div>
        </div>
    )
}

export default Header