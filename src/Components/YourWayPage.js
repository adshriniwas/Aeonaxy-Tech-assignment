import React, { useState } from 'react'
import { FaLessThan } from "react-icons/fa6";
import Rating from '@mui/material/Rating';

const YourWayPage = () => {

    const [value, setValue] = useState(5);
  return (
    <>
    <div className="min-h-screen w-full flex flex-col items-center">
        <div className="px-8 pt-12 w-full max-w-6xl justify-center">
            {/* start of progress bar  */}
            <div className='flex items-center'>
                <div className='mb-4 mr-3 cursor-pointer'>
                    <FaLessThan/>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-1.5 mb-4 dark:bg-gray-300">
                    <div
                        className="bg-[#3EB489] h-1.5 rounded-full dark:bg-[#3EB489]"
                        style={{ width: "100%" }}
                    ></div>
                </div>
            </div>
            {/* start of aside content  */}
            <div className='mt-10 m-auto max-w-4xl flex flex-wrap justify-center items-center'>
                <div className='w-md'><img src='way1.png'/></div>
                <div className='w-[400px] py-10'>
                    <div className="text-3xl text-center lg:text-start font-bold">
                        You're on your way
                    </div>
                    
                    <div className='mt-6 text-center lg:text-start'>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            }}
                        />
                    </div>
                        
                    <div className="mt-2 italic text-sm text-center lg:text-start text-gray-600">
                        "Through its engaging and well-structured courses. Brilliant has taught me
                            mathematical concepts that I previously struggled to understand. I now feel
                            confident approaching both technical job interviews and real world problem 
                            solving situations."
                        
                        
                    </div>
                    <div className='mt-2 text-sm text-gray-600 italic text-center lg:text-start'>--Jacob S.</div>
                </div>
            </div>
            {/* start of continue button  */}
            <div className="my-5 flex justify-center">
                <div
                    className="block px-7 py-2 rounded-md bg-black text-white cursor-pointer"
                >
                    Continue
                </div>
            </div>

        </div>
    </div>
    <div className="bg-black h-[1.5px]"></div>
    </>
  )
}

export default YourWayPage