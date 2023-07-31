import React from 'react'

const Faq = () => {
    return (
        <div className='w-full text-white max-w-7xl mx-auto pb-24'>
            <p className='text-center text-4xl font-semibold'>Frequently Asked Questions</p>
            <div className=''>
                <div className='grid grid-cols-1 xl:grid-cols-4  mt-8 w-full'>
                    <div className='flex flex-col items-start mx-2 justify-start'>
                        <p className='font-semibold '>When is the SAC Election ?</p>
                        <p className='text-gray-300'>SAC Election for the session 2023-24 will be held on 4.08.2023 (Friday) . </p>
                    </div>
                    <div className='flex flex-col items-start  mx-2 justify-start'>
                        <p className='font-semibold '>What is the time slot for voting ?</p>
                        <p className='text-gray-300'>Time: 6:30 PM - 8:00 PM</p>
                    </div>
                    <div className='flex flex-col items-start  mx-2 justify-start'>
                        <p className='font-semibold '>Is the election online ?</p>
                        <p className='text-gray-300'>Yes, its online.</p>
                    </div>
                    <div className='flex flex-col items-start  mx-2 justify-start'>
                        <p className='font-semibold '>How to vote in NITRIS ?</p>
                        <p className='text-gray-300'>Open NITRIS then go to SAC Eloection then go to vote and vote your candidate</p>
                    </div>
                    <div className='flex flex-col items-start  mx-2 justify-start'>
                        <p className='font-semibold '>Do we have privacy to whom we cast our vote ?</p>
                        <p className='text-gray-300'>Yes.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq