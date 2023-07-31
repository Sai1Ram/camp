import Image from 'next/image'
import React from 'react'

const Candidate = ({ title, img, id }) => {
    return (
        <div className='h-[27rem] lg:h-[32rem] xl:h-[27rem] w-[16rem] md:w-[18rem] lg:w-[20rem] xl:w-[16rem] my-8 mx-auto rounded-md overflow-hidden transition ease-in-out delay-150 hover:-translate-y-[0.05rem] hover:scale-105 duration-300'>
            <Image src={img} widht="200px" />
            <div className='mt-4 relative h-24 w-32 flex items-center justify-center !text-[#0d203c] ' style={{ fontSize: "130px", lineHeight: "88px", color: "#f7f7f7", fontWeight: "700" }}>
                {id}
                <div className='absolute inset-0 flex items-start justify-center flex-col w-64'>
                    <p className='font-bold text-3xl text-white text-left'>{title}</p>
                    <div className='w-16 mt-2 h-1 bg-[#FF4C29]'></div>
                </div>
                {/* <p>Click here to know more</p> */}
            </div>
            <p className='px-2 py-1 rounded-lg w-52 mt-1 mx-auto hover:opacity-80 bg-[#FF4C29] font-medium text-black'>Click here</p>
        </div>
    )
}

export default Candidate