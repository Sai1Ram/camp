import React from 'react'
import Candidate from './Candidate'
import { useRouter } from 'next/router'
import two from '../assets/2.jpg'
import rohan from '../assets/rohan.jpg'
import sudhanshu from '../assets/sudhanshu.jpg'
import prasanjit from '../assets/prasanjit.jpg'
import gagan from '../assets/gagan-1.jpg'
import tarini from '../assets/tarini.jpg'
import sivananda from '../assets/sivananda.jpg'
import sandip from '../assets/sandip.jpg'
import priyanka from '../assets/priyanka.jpg'
import rajalaxmi from '../assets/rajalaxmi.jpg'


const Candidates = () => {
    const router = useRouter();

    return (
        <div className='max-w-[85rem]  min-h-screen mx-auto mt-20 xl:-mt-12 '>
            <div className='flex flex-col xl:flex-row items-center justify-around'>
                <div className='flex flex-col items-center justify-start'>
                    <p className='text-white font-bold xl:text-4xl text-2xl text-left w-full'>2nd Year UG Constituency </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:space-x-6'>
                        <button onClick={() => router.push('/name/siva')}>
                            <Candidate title="Sivananda Sahu" id="01" img={sivananda} />
                        </button>
                        <button onClick={() => router.push('/name/sandip')}>
                            <Candidate title="Sandip Kumar Tripathi" id="02" img={sandip} />
                        </button>
                    </div>
                </div>
                <div className=''>
                    <p className='text-white font-bold  xl:text-4xl text-2xl text-left'>3rd Year UG Constituency</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:space-x-6'>
                        <button onClick={() => router.push('/name/yubraj')}>
                            <Candidate title="Yubraj Panigrahi" id="01" img={two} />
                        </button>
                        <button onClick={() => router.push('/name/tarini')}>
                            <Candidate title="Tarini Prasad Sahu" id="02" img={tarini} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row items-center justify-around'>
                <div className='flex flex-col items-center justify-start'>
                    <p className='text-white   font-bold xl:text-4xl text-xl text-left w-full'>4th & 5th Year UG Constituency </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:space-x-6'>
                        <button onClick={() => router.push('/name/rohan')}>
                            <Candidate title="Rohan Kumar Sethi" id="01" img={rohan} />
                        </button>
                        <button onClick={() => router.push('/name/sudhanshu')}>
                            <Candidate title="Sudhanshu Sekhar Mohanty" id="02" img={sudhanshu} />
                        </button>
                    </div>
                </div>
                <div className=''>
                    <p className='text-white font-bold  xl:text-4xl text-2xl text-left'>Post Graduate Constituency</p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:space-x-6'>
                        <button onClick={() => router.push('/name/rajalaxmi')}>
                            <Candidate title="Rajalaxmi Swain" id="01" img={rajalaxmi} />
                        </button>
                        <button onClick={() => router.push('/name/gagan')}>
                            <Candidate title="Gagan Bihari Naik" id="02" img={gagan} />
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col xl:flex-row items-center justify-around'>
                <div className='flex flex-col items-center justify-start'>
                    <p className='text-white   font-semibold xl:text-4xl text-2xl text-left w-full'>Research Constituency </p>
                    <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 xl:space-x-6'>
                        <button onClick={() => router.push('/name/priyanka')}>
                            <Candidate title="Priyanka Panigrahi" id="01" img={priyanka} />
                        </button>
                        <button onClick={() => router.push('/name/prasanjit')}>
                            <Candidate title="Prasanjit Agasthi" id="02" img={prasanjit} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Candidates