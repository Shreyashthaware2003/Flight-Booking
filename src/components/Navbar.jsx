import React from 'react'
import { SiConsul } from "react-icons/si";
import { BsPhoneVibrate } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

function Navbar() {
    return (
        <>
            <div className='flex flex-col flex-nowrap gap-2 fixed top-0 w-full z-50'>
                <div className='px-6 md:px-16 py-6 bg-[#f0f4f4]'>
                    <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center'>
                        <SiConsul className='font-medium text-lg' />
                        <div className='hidden md:flex justify-center items-center text-gray-500 gap-6 '>
                            <div className='flex justify-center items-center gap-2  hover:text-blue-600 hover:underline cursor-pointer '>
                                <BsPhoneVibrate />
                                <span className='text-sm font-medium'>Support</span>
                            </div>
                            <div className='flex justify-center items-center gap-2  hover:text-blue-600 hover:underline cursor-pointer '>
                                <AiOutlineGlobal />
                                <span className='text-sm font-medium'>Languages</span>
                            </div>
                        </div>
                        <div className='flex justify-end items-center gap-4 font-medium'>
                            <a href="#" className='hover:text-gray-500'>Sign In</a>
                            <a href="#" className='hover:text-gray-500'>Sign Out</a>
                        </div>
                    </div>
                </div>

                <div className='px-4 md:px-20'>
                    <div className='grid grid-cols-2 md:grid-cols-3 justify-center items-center'>
                        <div>
                            <img src="src/assets/air-company-logo.png" className='w-20 md:w-24' alt="plane" />
                        </div>
                        <div className='hidden md:flex'>
                            <ul className='flex flex-row flex-nowrap justify-center items-center gap-8 text-sm font-semibold tracking-wide'>
                                <li className='cursor-pointer hover:text-blue-600 text-gray-500'>Home</li>
                                <li className='cursor-pointer hover:text-blue-600 text-gray-500'>About</li>
                                <li className='cursor-pointer hover:text-blue-600 text-gray-500'>Offers</li>
                                <li className='cursor-pointer hover:text-blue-600 text-gray-500'>Seats</li>
                                <li className='cursor-pointer hover:text-blue-600 text-gray-500'>Destinations</li>
                            </ul>
                        </div>
                        <div className='hidden md:flex justify-end'>
                            <button className='bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-1 rounded-full text-center duration-300'>Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar