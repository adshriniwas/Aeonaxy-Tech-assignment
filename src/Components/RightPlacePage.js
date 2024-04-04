import React from 'react'
import { FaLessThan } from "react-icons/fa6";

const RightPlacePage = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center">
        <div className="px-8 pt-12 w-full max-w-6xl justify-center">
            {/* start of progress bar  */}
            <div className='flex items-center'>
                <div className='mb-4 mr-3'>
                    <FaLessThan/>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1.5 mb-4 dark:bg-gray-300">
                    <div
                        className="bg-[#3EB489] h-1.5 rounded-full dark:bg-[#3EB489]"
                        style={{ width: "33%" }}
                    ></div>
                </div>
            </div>
            {/* start of aside content  */}
            <div className='mt-10 m-auto max-w-4xl flex flex-wrap justify-center items-center'>
                <div className='w-md'><img src='rightPlaceImg.png'/></div>
                <div className='w-[400px] py-10'>
                    <div className="text-3xl text-center lg:text-start font-bold">
                        You're in the right place
                    </div>
                    <div className="mt-7 text-sm text-center lg:text-start text-gray-600">
                        Brilliant gets you hands-on to help improve your professional skills and knowledge. You will interact with concepts
                        and solve fun problems in math, science and computer science
                    </div>
                </div>
            </div>
            {/* start of continue button  */}
            <div className="my-5 flex justify-center">
                <a
                    className="block px-7 py-2 rounded-md bg-black text-white"
                    href="#"
                >
                    Continue
                </a>
            </div>

        </div>
    </div>
  )
}

export default RightPlacePage