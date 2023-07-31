import React from 'react'
import { useRouter } from 'next/router'
import nit from '../../assets/nit.png'
import Image from 'next/image';
import tarini from '../../assets/tarini-1.png'
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
                        <p>Meet <span className='text-red-500'>{capitalizeFirstLetter("tarini")}</span>, an aspiring student, </p>
                        <p>always helpful and dedicated towards work, down to earth!</p>
                    </div>
                    <div className='w-16 my-8 h-1 bg-red-500'></div>
                    <p className='text-4xl text-white mb-4 font-medium'>Manifesto</p>
                    <div className='flex flex-col items-start justify-start space-y-2'>
                        <p className='text-lg text-gray-300 '>     - A well-structured financial plan should be devised for various clubs and festivals, aligning with their specific needs and requirements.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            -  Ensuring smooth functioning of club activities and maintaining a positive relationship with the Student Activities Committee (SAC).
                        </p>
                        <p className='text-lg text-gray-300 '>
                            - During the current session, our aim is to elevate the Celebrity Night to new heights and showcasing Roots and Jashn in a magnificent and grandiose fashion.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            - I am committed to fostering a multicultural environment by showcasing cultural events from various states of India.
                        </p>
                        <p className='text-lg text-gray-300 '>
                            - My goal is to take the Film and Music Society to the next level of vibrancy.
                        </p>
                        {/* <p className='text-lg text-gray-300 '>
                            - A transparent Budget Allocation.
                        </p> */}
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
                    <p className='font-tuesday md:text-7xl  text-5xl  mt-20'>Tarini Prasad Sahu</p>
                </div>
                <img src={tarini.src} className=' flex-[0.5] h-[0rem] z-50 xl:h-[100rem]  -mt-24 -mr-20' />

                {/* <div className='flex-[0.5] flex items-center justify-center w-[50rem] h-[100rem] -mt-24 -mr-16 relative'>
                    <Image src="/vaibhav.png" layout='fill' />
                </div> */}
            </div>
        </div>
    )
}

export default Name