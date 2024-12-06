import React from 'react'
import '../App.css'
import { useState } from 'react';
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { LuBookmarkCheck } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home() {

    const [activeClass, setActiveClass] = useState('Business Class'); // Default active class

    const renderClassData = () => {
        switch (activeClass) {
            case 'Economy':
                return <p className="text-center mt-4">Economy Class: Affordable and comfortable travel.</p>;
            case 'Business Class':
                return <p className="text-center mt-4">Business Class: Luxury and premium services.</p>;
            case 'Fast Class':
                return <p className="text-center mt-4">Fast Class: Speedy boarding and travel perks.</p>;
            default:
                return null;
        }
    };



    return (
        <>
            <div className='max-w-[1200px] mx-auto pt-40 md:pt-48 pb-6'>
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-center'>
                        <div className='max-w-[600px]'>
                            <h1 className='text-4xl md:text-6xl font-semibold text-center tracking-wide'>Create Ever-lasting Memories With Us</h1>
                        </div>
                    </div>

                    <div className="flex relative justify-center items-center py-4 px-4 h-[300px] md:h-[450px]">
                        <div className="w-full max-w-[900px] h-40 md:h-64 bg-gray-200 rounded-full relative overflow-hidden shadow-lg">
                            <video
                                src="./video.mp4"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                loop
                                autoPlay
                                muted>
                            </video>
                        </div>
                        <div className='absolute top-12 md:top-4'>
                            <img src="./src/assets/takeOff.png" className='w-[700px] md:w-[900px] px-4' alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center border-2 border-gray-200 rounded-2xl py-10 px-4 mx-4 md:mx-20">
                        <div className="flex flex-nowrap justify-center items-center bg-[#f0f4f4] rounded-xl md:rounded-full">
                            <div className="flex flex-col md:flex-row gap-4 px-6 py-2">
                                <span
                                    onClick={() => setActiveClass('Economy')}
                                    className={`${activeClass === 'Economy'
                                        ? 'bg-blue-600 text-white cursor-pointer'
                                        : 'hover:cursor-pointer hover:bg-blue-600 hover:text-white'
                                        } duration-300 px-4 py-2 rounded-full w-36 text-center`}
                                >
                                    Economy
                                </span>
                                <span
                                    onClick={() => setActiveClass('Business Class')}
                                    className={`${activeClass === 'Business Class'
                                        ? 'bg-blue-600 text-white cursor-pointer'
                                        : 'hover:cursor-pointer hover:bg-blue-600 hover:text-white'
                                        } duration-300 px-4 py-2 rounded-full w-36 text-center`}
                                >
                                    Business Class
                                </span>
                                <span
                                    onClick={() => setActiveClass('Fast Class')}
                                    className={`${activeClass === 'Fast Class'
                                        ? 'bg-blue-600 text-white cursor-pointer'
                                        : 'hover:cursor-pointer hover:bg-blue-600 hover:text-white'
                                        } duration-300 px-4 py-2 rounded-full w-36 text-center`}
                                >
                                    Fast Class
                                </span>
                            </div>
                        </div>
                        {/* Render data for the active class */}
                        {renderClassData()}
                    </div>

                    <div className='flex flex-col justify-center items-center pt-24 md:pt-20 pb-10 px-4'>
                        <span className='uppercase text-center' style={{ letterSpacing: '0.8em' }}>travel <br className='flex md:hidden' /> support</span>
                        <span className='font-semibold text-3xl tracking-wider py-4 text-center'>Plan your travel with confindence</span>
                        <span className='text-gray-400 tracking-wide text-lg text-center'>Find help with booking and travel plans, see what to expect along the journey!</span>
                    </div>

                    <div className='grid grid-cols-1 md:grid-cols-2  md:py-20 px-4 items-center'>
                        <div>
                            <div className='flex flex-col justify-center items-start gap-2 px-4 md:px-20 py-4'>
                                <div className='px-2 py-1 bg-blue-600 rounded-full w-10 text-center text-white'>01</div>
                                <span className='text-xl md:text-2xl font-semibold'>Travel requirements for Dubai</span>
                                <p className='text-gray-400 py-1'>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2 px-4 md:px-20 py-4'>
                                <div className='px-2 py-1 bg-orange-600 rounded-full w-10 text-center text-white'>02</div>
                                <span className='text-xl md:text-2xl font-semibold'>Multi-risk travel insurance</span>
                                <p className='text-gray-400 py-1'>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                            </div>
                            <div className='flex flex-col justify-center items-start gap-2 px-4 md:px-20 py-4'>
                                <div className='px-2 py-1 bg-fuchsia-600 rounded-full w-10 text-center text-white'>03</div>
                                <span className='text-xl md:text-2xl font-semibold'>Travel requirements by detination</span>
                                <p className='text-gray-400 py-1'>Find help with booking and travel plans, see what to expect along the journey to your favourite destinations!</p>
                            </div>
                        </div>
                        <div className='flex justify-center items-center py-10 md:py-0'>
                            <img src="src/assets/Images-Grid.png" alt="" />
                        </div>
                    </div>

                </div>
            </div>
            <div className='w-full bg-[#f0f4f4] flex flex-col justify-center items-center py-20 gap-16 md:gap-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 '>
                    <div className='max-w-[300px] md:max-w-[500px] '>
                        <h1 className='text-3xl md:text-4xl font-semibold text-center md:text-start'>Travel to make memories all around the world</h1>
                    </div>
                    <div className='flex justify-center md:justify-end items-center '>
                        <button className='bg-blue-600 hover:bg-blue-700 duration-300 text-white px-4 py-2 rounded-full font-medium'>View All</button>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row justify-center items-center gap-20'>
                    <div className='bg-white w-64 py-10 rounded-full flex flex-col justify-center items-center'>
                        <div className='bg-blue-600 text-white py-4 px-4 rounded-full text-xl my-10'>
                            <HiOutlineCalendarDateRange />
                        </div>
                        <div className='py-10'>
                            <h1 className='text-lg font-semibold tracking-wide'>Book & Relax</h1>
                        </div>
                    </div>
                    <div className='bg-white w-64 py-10 rounded-full flex flex-col justify-center items-center'>
                        <div className='bg-orange-600 text-white py-4 px-4 rounded-full text-xl my-10'>
                            <AiOutlineSafetyCertificate />
                        </div>
                        <div className='py-10'>
                            <h1 className='text-lg font-semibold tracking-wide'>Smart Checklist</h1>
                        </div>
                    </div>
                    <div className='bg-white w-64 py-10 rounded-full flex flex-col justify-center items-center'>
                        <div className='bg-fuchsia-600 text-white py-4 px-4 rounded-full text-xl my-10'>
                            <LuBookmarkCheck />
                        </div>
                        <div className='py-10'>
                            <h1 className='text-lg font-semibold tracking-wide'>Save More</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className='max-w-[1200px] mx-auto gap-10 md:gap-20 py-20 flex flex-col md:flex-row items-center'>
                <div className=' max-w-[340px] md:max-w-[800px] flex flex-col justify-start'>
                    <h1 className='font-semibold text-3xl flex justify-start px-4 md:px-8 py-4 tracking-wide'>Unaccompanied Minor Lounge</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-8 py-4 gap-x-14 gap-y-4'>
                        <div className='w-full md:w-60 text-lg'>
                            <h1>Help through the airpot</h1>
                            <p className='text-gray-400'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                        </div>
                        <div className='w-60 text-lg'>
                            <h1>Priority Boarding</h1>
                            <p className='text-gray-400'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                        </div>
                        <div className='w-60 text-lg'>
                            <h1>Care on the flight</h1>
                            <p className='text-gray-400'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                        </div>
                        <div className='w-60 text-lg'>
                            <h1>Chauffeur-drive service</h1>
                            <p className='text-gray-400'>You can also call airlines from your phone and book a flight ticket to one of your favorite destinations.</p>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <img src="src/assets/Images-Grid2.png" alt="" />
                </div>
            </div>

            <div className='max-w-[1200px] mx-auto flex flex-col justify-center items-center py-10'>
                <h1 className='text-3xl md:text-4xl font-semibold tracking-wide text-center'>Top travelers of this month!</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center py-20 gap-10 md:gap-20">

                    <div className="relative w-56 h-80 overflow-hidden group cursor-pointer duration-300">
                        <img
                            src="src/assets/NewYork.png"
                            className="rounded-full w-full h-full object-cover"
                            alt="New York"
                        />
                        <div className="absolute bottom-4 left-[90px] w-12 h-12 p-1 bg-gray-300 rounded-full flex justify-center items-center shadow-md z-50 animate-bounceSlow">
                            <img
                                src="src/assets/user(2).png"
                                className="rounded-full w-full h-full object-cover "
                                alt="User"
                            />
                        </div>

                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-center">Explore New York</p>
                        </div>
                    </div>


                    <div className="relative w-56 h-80 group overflow-hidden">
                        <img
                            src="src/assets/paris.jpg"
                            className="rounded-full w-full h-full object-cover"
                            alt="Paris"
                        />
                        <div className="absolute bottom-4 left-[90px] w-12 h-12 b p-1 bg-gray-300 rounded-full flex justify-center items-center shadow-md z-50 animate-bounceSlow">
                            <img
                                src="src/assets/user(1).png"
                                className="rounded-full w-full h-full object-cover"
                                alt="User"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-center">Explore Paris</p>
                        </div>
                    </div>
                    <div className="relative w-56 h-80 group cursor-pointer duration-300 overflow-hidden">
                        <img
                            src="src/assets/london.png"
                            className="rounded-full w-full h-full object-cover"
                            alt="London"
                        />
                        <div className="absolute bottom-4 left-[90px] w-12 h-12 p-1 bg-gray-300 rounded-full flex justify-center items-center shadow-md z-50 animate-bounceSlow">
                            <img
                                src="src/assets/user(3).png"
                                className="rounded-full w-full h-full object-cover"
                                alt="User"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-center">Explore London</p>
                        </div>

                    </div>
                    <div className="relative w-56 h-80 group cursor-pointer duration-300 overflow-hidden">
                        <img
                            src="src/assets/dubai.png"
                            className="rounded-full w-full h-full object-cover"
                            alt="Dubai"
                        />
                        <div className="absolute bottom-4 left-[90px] w-12 h-12  p-1 bg-gray-300 rounded-full flex justify-center items-center shadow-md z-50 animate-bounceSlow">
                            <img
                                src="src/assets/user(4).png"
                                className="rounded-full w-full h-full object-cover"
                                alt="User"
                            />
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 text-white flex justify-center items-center rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-center">Explore Dubai</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-[#f0f4f4] flex flex-col justify-center items-center w-full pt-20'>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-3xl font-semibold tracking-wide text-center px-4'>Subscribe Newsletters & get Latest News</h1>
                    <div className='w-full py-6 relative flex justify-center items-center px-4'>
                        <input type="email" placeholder='Enter your email address' className='w-full px-4 py-3 rounded-full relative' />
                        <button className='absolute right-6 bg-blue-600 font-semibold text-white rounded-full px-3 text-sm md:text-base md:px-4 py-1 md:py-2'>Subscribe Now</button>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 pt-16 px-4 gap-10 md:gap-20 w-full md:w-[1200px]'>
                    <div className='w-56'>
                        <img src="src/assets/air-company-logo.png" className='w-14' alt="" />
                        <p className='text-gray-400 py-4'>Your mind should be stronger than your feelings, fly!</p>
                        <div className='flex items-center flex-nowrap gap-4'>
                            <a href="https://www.linkedin.com/in/shreyash-thaware-168718264/" target='_blank' className='border-2 border-gray-300 py-4 px-2 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer hover:-translate-y-4 duration-700'>
                                <FaLinkedinIn />
                            </a>
                            <a href="https://github.com/Shreyashthaware2003" target='_blank' className='border-2 border-gray-300 py-4 px-2 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer hover:-translate-y-4 duration-700'>
                                <FiGithub />

                            </a>
                            <a href="https://mail.google.com/mail/u/0/?fs=1&to=shreyashthaware284@gmail.com&tf=cm" target='_blank' className='border-2 border-gray-300 py-4 px-2 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer hover:-translate-y-4 duration-700'>
                                <SiGmail />
                            </a>
                            <a href="https://www.instagram.com/shrreyy.17/" target='_blank' className='border-2 border-gray-300 py-4 px-2 rounded-full text-gray-400 hover:bg-blue-600 hover:text-white cursor-pointer hover:-translate-y-4 duration-700 '>
                                <FaInstagram />
                            </a>
                        </div>
                    </div>

                    <div className='w-56 text-lg'>
                        <h1 className='px-0 md:px-4'>Information</h1>
                        <ul className='md:p-4 space-y-2 text-gray-400'>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Home</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Explore</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Travel</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Flight Status</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Check-In</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Manage your booking</li>
                        </ul>
                    </div>
                    <div className='w-56 text-lg'>
                        <h1 className='md:px-4'>Quick Guide</h1>
                        <ul className='md:p-4 space-y-2 text-gray-400'>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>FAQ</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>How to</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Features</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Baggage</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Route Map</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Our communities</li>
                        </ul>
                    </div>
                    <div className='w-56 text-lg'>
                        <h1 className='md:px-4'>Queries</h1>
                        <ul className='md:p-4 space-y-2 text-gray-400'>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Chauffuer</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Our partners</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Destination</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Careers</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Transportation</li>
                            <li className='cursor-pointer hover:text-blue-600 hover:translate-x-4 duration-700'>Programme Rules</li>
                        </ul>
                    </div>
                </div>
                    <hr className=' border border-black w-full mt-6' />
                    <span className='font-semibold py-6'>Developed by <a href="https://www.linkedin.com/in/shreyash-thaware-168718264/" className='text-blue-600 cursor-pointer hover:text-blue-700 duration-300'>Shreyash Thaware</a></span>
            </div >

        </>
    )
}

export default Home