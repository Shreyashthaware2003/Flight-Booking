import React from 'react'
import { useState } from 'react';

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

                    <div className="flex justify-center items-center py-4 px-4 h-[300px] md:h-[450px]">
                        <div className="w-full max-w-[900px] h-40 md:h-64 bg-gray-200 rounded-full relative overflow-hidden shadow-lg">
                            <video
                                src="/video.mp4"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                loop
                                autoPlay
                                muted>
                            </video>
                        </div>
                        <div className='absolute bottom-[270px] md:bottom-28'>
                            <img src="src/assets/takeOff.png" className='w-[700px] md:w-[900px] px-4' alt="" />
                        </div>
                    </div>

                    <div className="flex flex-col justify-center items-center border-2 border-gray-200 rounded-md py-10 px-4 mx-20">
                        <div className="flex flex-nowrap justify-center items-center bg-[#f0f4f4] rounded-full">
                            <div className="flex flex-nowrap gap-4 px-6 py-2">
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

                    <div className='flex flex-col justify-center items-center'>


                    </div>

                </div>
            </div>

        </>
    )
}

export default Home