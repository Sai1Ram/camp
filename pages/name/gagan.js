import React from 'react'
import { useRouter } from 'next/router'
import nit from '../../assets/nit.png'
import Image from 'next/image';
import gagan from '../../assets/gagan.png'


const Name = () => {
    const router = useRouter();

    const capitalizeFirstLetter = (s) => {
        if (!s) return;
        let str = s.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className='bg-[#0a192f] min-h-screen pb-12 xl:pb-0 w-full text-white'>
            <button onClick={() => router.push('/')} className='text-2xl absolute top-5 left-8 xl:top-10 xl:left-24 z-[1000]'>back</button>
            <div className='max-w-7xl flex flex-col-reverse xl:flex-row relative  mx-auto pt-44 z-50'>
                <img src="/nit.png" className=' h-screen absolute inset-0 opacity-[5%] -ml-64 mt-' />
                <div className='flex-1 mx-3 xl:flex-[0.5] mt-8 xl:mt-0'>
                    <div className='text-4xl md:text-5xl text-left leading-[3.4rem] font-medium' >
                        <p>Meet <span className='text-red-500'>{capitalizeFirstLetter("gagan")}</span>, an aspiring student, </p>
                        <p>always helpful and dedicated towards work, down to earth!</p>
                    </div>
                    <div className='w-16 my-8 h-1 bg-red-500'></div>
                    <p className='text-4xl text-white mb-4 font-medium'>Manifesto</p>
                    <div className='flex flex-col items-start justify-start space-y-2'>
                        <p className='text-lg text-gray-300 '>     - Ensuring seamless operations of clubs and festivals while maintaining transparency will be a top priority.

                        </p>
                        <p className='text-lg text-gray-300 '>
                            - Establishing an inclusive club culture that welcomes both research and postgraduate students is an essential goal.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            - Encouraging clubs to frequently conduct in-house competitions will be actively promoted.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            - Plan a grander Cosmopolitan-The Multi-Ethnic Fest celebration to enhance NIT Rourkela's cultural diversity.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            - Revive ROOTS (Creative Confluence of NITR) after a considerable hiatus, providing a platform for the creative minds of NITR to flourish.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            - Prioritize transparent budget allocation for all events and activities.
                        </p>
                        {/* <p className='text-lg text-gray-300 '>.
                            - Look into the problems faced by the clubs related to SAC and to provide speedy solution to those problems.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            -	Work towards a transparent budget allocation process to the clubs.
                        </p>
                        <p className='text-lg text-gray-300 '>

                            -	Make Celebrity night more engaging and extraneous, by introduction of DJ night and numerous pre shows.
                        </p>
                        <p className='text-lg text-gray-300 '>

                            -	 Ramping up the food fest that gets conducted during the COSMO fest to a new scale.
                        </p> */}
                    </div>
                    <p className='text-2xl mt-10 font-semibold text-red-500'>
                        I donot just speak the change, I make the change!
                    </p>
                    <p className='font-tuesday md:text-7xl  text-5xl  mt-20'>Gagan Bihari Nayak</p>
                </div>
                <img src={gagan.src} className=' flex-[0.5] h-[0rem] z-50 xl:h-[100rem] -mt-24 -mr-20' />
            </div>
        </div>
    )
}

export default Name