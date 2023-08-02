import React, { useEffect, useState } from 'react'

const Main = () => {
    const [count, setCount] = useState(1859)
    const [click, setClick] = useState(false)
    const [isClicked, setIsClicked] = useState(false);

    // console.log("*** DEBUG", count)

    const handleHex = () => {
        localStorage.setItem('isClicked', true);
    };
    const removeHex = () => {
        localStorage.removeItem('isClicked');
    };
    const getHex = () => {
        return JSON.parse(localStorage.getItem('isClicked'));
    }

    useEffect(() => {
        if (isClicked) { return }
        let temp;
        try {
            temp = getHex();
            if (temp.length !== 0) {
                // console.log("returning", temp)
                setIsClicked(temp);
                return
            }
        } catch (error) {
            console.error("error", error)
        }
        // if (!temp) {
        //     localStorage.setItem('isClicked', JSON.stringify(isClicked));
        // }
    }, [isClicked]);

    useEffect(() => {
        if (isClicked) {
            setClick(true);
            handleHex();
        }
    }, [isClicked]);

    

    async function fetchCounter() {
        // console.log("called")
        try {
          const response = await fetch('/api/count');
          const data = await response.json();
         
          setCount(data.count)
        } catch (error) {
          console.error('Error fetching counter:', error);
        }
    }
      
    useEffect(()=>{
        fetchCounter();
    },[click])

    async function increaseCounter() {
        // console.log(count);
        setClick(true)
        try {
        await fetch('/api/count?action=increase', { method: 'GET' });
        fetchCounter();
        setIsClicked(true);
        } catch (error) {
        console.error('Error increasing counter:', error);
        }
    }

    async function decreaseCounter() {
        try {
        await fetch('/api/count?action=decrease', { method: 'GET' });
        fetchCounter();
        } catch (error) {
        console.error('Error decreasing counter:', error);
        }
    }
    // const getCount = async () => {

    //     try {
    //         var requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow'
    //         };

    //         const res = await fetch(`${process.env.NEXT_PUBLIC_COUNT_API}`, requestOptions)
    //         const data = await res.json()
    //         // console.log("fetched result", data.value)
    //         setCount(data.value)

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // const increase = async () => {
    //     setClick(true);
    //     if (isClicked) return;

    //     try {
    //         var requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow'
    //         };

    //         const res = await fetch(`${process.env.NEXT_PUBLIC_INCREASE_API}`, requestOptions)
    //         const data = await res.json()
    //         // console.log("fetched result", data.value)
    //         setCount(data.value)
    //         setIsClicked(true);

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }
    // const decrease = async () => {

    //     try {
    //         var requestOptions = {
    //             method: 'GET',
    //             redirect: 'follow'
    //         };

    //         const res = await fetch('https://api.countapi.xyz/update/fmscampaign/bapaop/?amount=-1', requestOptions)
    //         const data = await res.json()
    //         // console.log("fetched result", data.value)
    //         setCount(data.value)

    //     } catch (error) {
    //         console.log(error)
    //     }

    // }

    // useEffect(() => {
    //     getCount();
    // }, [])


    return (
        <div className='w-full h-fit  -mt-10 lg:-mt-24 xl:-mt-40 max-w-7xl mx-auto text-gray-300 '>
            <div className='flex flex-col items-center justify-center px-0 lg:px-32 xl:px-44 bg-cover z-50 bg-[url("/bg.png")] w-full h-[28rem] '>
                {/* <p className='font-black text-4xl xl:text-6xl text-white text-center'>ELECT THE BEST FLIM AND MUSIC SOCIETY CANDIDATES</p> */}
                <p className='font-bold text-4xl xl:text-6xl text-white text-center'>Elect the best FILM AND MUSIC SOCIETY candidates</p>
                <div className='w-16 my-8 h-1 bg-red-500'></div>
                <p className=' text-center' style={{ fontSize: "17px", lineHeight: "25px", }}>
                    You can bring the change....cast your valuable vote and elect the best suited FMS candidate....You can vote for two candidates from each Society from each year. So now it is your responsibility to drive the change!!
                </p>
                <div className='mt-6 relative'>
                    <button onClick={increaseCounter} disabled={isClicked} className={`px-3 py-2 rounded-lg w-64 hover:opacity-80 ${!click ? "bg-[#FF4C29]" : "bg-gray-400"} font-medium text-black`}><span>{!click ? "Support by Liking here 😃" : "Thanks for Liking 😊"}</span>  <span> {click && "|"} {click && (count)}</span>
                    {/* onClick={increase} */}
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Main