import React from 'react'

const Header = () => {
    return (
        <div className=' w-full overflow-hidden flex flex-col pb-8 md:pb-12 lg:pb-20 xl:pb-28 '>
            <div className='flex flex-[0.3] items-center flex-col -mt-3 relative '>
                <div className="flex -mx-4 ticker-left items-center" style={{ color: "#FF4C29", opacity: "80%", fontSize: "178px", lineHeight: "150px", fontWeight: 700, textTransform: "lowercase" }}>
                    <div className='flex items-center w-max'>
                        <h1 className='text-[4rem] lg:text-[7.5rem] '>&nbsp;!BE READY FOR THE CHANGE!    !CAST YOUR VALUABLE VOTE!    !DATE- 4/08/23, TIME - 6:30 - 8 PM!</h1>
                    </div>
                    <div className='flex items-center w-max'>
                        <h1 className='text-[4rem] lg:text-[7.5rem] '>&nbsp;!BE READY FOR THE CHANGE!    !CAST YOUR VALUABLE VOTE!    !DATE- 4/08/23, TIME - 6:30 - 8 PM!</h1>
                    </div>
                    <div className='flex items-center w-max'>
                        <h1 className='text-[4rem] lg:text-[7.5rem] '>&nbsp;!BE READY FOR THE CHANGE!    !CAST YOUR VALUABLE VOTE!    !DATE- 4/08/23, TIME - 6:30 - 8 PM!</h1>
                    </div>
                    {/* <div className='flex items-center w-max'>
                        <h1 className='text-[4rem] lg:text-[7.5rem] '>&nbsp;!BE READY FOR THE CHANGE!    !CAST YOUR VALUABLE VOTE!    !DATE- 24/08/22, TIME- 6-9 PM!</h1>
                    </div>
                    <div className='flex items-center w-max'>
                        <h1 className='text-[4rem] lg:text-[7.5rem] '>&nbsp;!BE READY FOR THE CHANGE!    !CAST YOUR VALUABLE VOTE!    !DATE- 24/08/22, TIME- 6-9 PM!</h1>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Header