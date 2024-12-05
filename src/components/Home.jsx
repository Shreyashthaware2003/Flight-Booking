import React from 'react'

function Home() {
    return (
        <>
            <div className='max-w-[1200px] mx-auto pt-48'>
                <div className='flex flex-col justify-center'>
                    <div className='flex justify-center'>
                        <div className='max-w-[600px]'>
                            <h1 className='text-6xl font-semibold text-center tracking-wide'>Create Ever-lasting Memories With Us</h1>
                        </div>
                    </div>
                    <div className="flex justify-center items-center py-4 px-4 h-[450px]">
                        <div className="w-full max-w-[900px] h-64 bg-gray-200 rounded-full relative overflow-hidden shadow-lg">
                            <video
                                src="/video.mp4"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                                loop
                                autoPlay
                                muted>
                            </video>
                        </div>
                        <div className='absolute bottom-28'>
                            <img src="src/assets/takeOff.png" className='w-[900px]' alt="" />
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default Home