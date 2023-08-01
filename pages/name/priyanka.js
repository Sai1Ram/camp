import React from "react";
import { useRouter } from "next/router";
import nit from "../../assets/nit.png";
import Image from "next/image";
import priyanka from "../../assets/priyanka.png";

const Name = () => {
  const router = useRouter();

  const capitalizeFirstLetter = (s) => {
    if (!s) return;
    let str = s.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="bg-[#0a192f] min-h-screen pb-12 xl:pb-0 w-full text-white">
      <button
        onClick={() => router.push("/")}
        className="text-2xl absolute top-5 left-8 xl:top-10 xl:left-24 z-[1000]"
      >
        back
      </button>
      <div className="max-w-7xl flex flex-col-reverse xl:flex-row relative  mx-auto pt-44 z-50">
        <img
          src="/nit.png"
          className=" h-screen absolute inset-0 opacity-[5%] -ml-64 mt-"
        />
        <div className="flex-1 mx-3 xl:flex-[0.5] mt-8 xl:mt-0">
          <div className="text-4xl md:text-5xl text-left leading-[3.4rem] font-medium">
            <p>
              Meet{" "}
              <span className="text-red-500">
                {capitalizeFirstLetter("priyanka")}
              </span>
              , an aspiring student,{" "}
            </p>
            <p>always helpful and dedicated towards work, down to earth!</p>
          </div>
          <div className="w-16 my-8 h-1 bg-red-500"></div>
          <p className="text-4xl text-white mb-4 font-medium">Manifesto</p>
          <div className="flex flex-col items-start justify-start space-y-2">
            <p className="text-lg text-gray-300 ">
              {" "}
              - Cultivating and Advocating for an Inclusive Club Culture.
            </p>
            <p className="text-lg text-gray-300 ">
              - Ensuring an Updated SAC Brochure with Information on Associated
              Clubs.
            </p>
            <p className="text-lg text-gray-300 ">
              - Fostering a Club Environment Inclusive of Postgraduate and
              Research Students.
            </p>
            <p className="text-lg text-gray-300 ">
              - Overseeing the Operations and Ensuring Smooth Functioning of the
              Clubs.
            </p>
            <p className="text-lg text-gray-300 ">
              - Establishing a Platform for Club&apos;s Concerns and Feedback.
            </p>
            <p className="text-lg text-gray-300 ">
              - Ensuring Seamless Communication between SAC and Clubs.
            </p>
            <p className="text-lg text-gray-300 ">
              - Reviving Dormant Clubs to Full Activity.
            </p>
            {/* <p className='text-lg text-gray-300 '>
                            - To Organize Celebrity Night, Cosmopolitan, Roots & JASHN with an incredible energy after a pause of 3 years.
                        </p>
                        <p className='text-lg text-gray-300 '>

                            -	Ensuring a Fair Budget Allocation among the Clubs.
                        </p> */}
            {/* <p className='text-lg text-gray-300 '>

                            -	 Ramping up the food fest that gets conducted during the COSMO fest to a new scale.
                        </p> */}
          </div>
          <p className="text-2xl mt-10 font-semibold text-red-500">
            I don&apos;t just speak the change, I make the change!
          </p>
          <p className="font-tuesday md:text-7xl  text-5xl  mt-20">
            Priyanka Panigrahi
          </p>
        </div>
        <img
          src={priyanka.src}
          className=" flex-[0.5] h-[0rem] z-50 xl:h-[100rem]  -mt-24 -mr-20"
        />

        {/* <div className='flex-[0.5] flex items-center justify-center w-[50rem] h-[100rem] -mt-24 -mr-16 relative'>
                    <Image src="/vaibhav.png" layout='fill' />
                </div> */}
      </div>
    </div>
  );
};

export default Name;
