import React from 'react'

const YourAnswersPage = () => {
  return (
    <>
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className="px-8 py-8 w-full flex flex-col items-center max-w-6xl">

            <div className="text-3xl text-center font-bold">
                Learning Paths based on your answers.
            </div>
            <p className="my-4 text-sm text-center text-gray-600">
                Choose one to get started. You can switch anytime.
            </p>
            {/* starting of learning items block  */}
            <div className='w-full flex flex-wrap justify-center'> 
                {/* item 1  */}
                <div className='flex flex-col justify-center items-center mt-10 mx-5 border border-gray-300 rounded-md pl-6 pr-4 py-6 relative'>
                    <div className='bg-yellow-500 px-3 py-1 rounded-full  uppercase text-sm absolute -top-3.5'>Most Popular</div>
                    <div className='flex flex-wrap items-center '>
                        <div className='w-[200px] mx-auto mt-3 text-gray-600'><span className='font-bold text-black'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability</div>
                        <div className='pl-3 mx-auto'><img className='w-[180px]' src='answers1.png'/></div>
                    </div>
                </div>
                {/* item 2  */}
                <div className='flex flex-col items-center mt-10 mx-5 border border-gray-300 rounded-md pl-6 pr-4 py-6'>
                    {/* <div className='bg-yellow-500 px-3 py-1 rounded-full  uppercase text-sm absolute -top-3.5'>Most Popular</div> */}
                    <div className='flex flex-wrap items-center '>
                        <div className='w-[200px] mx-auto mt-3 text-gray-600'><span className='font-bold text-black'>Foundational Math</span> Build your foundational skills in algebra, geometry, and probability</div>
                        <div className='pl-3 mx-auto'><img className='w-[180px]' src='answers1.png'/></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default YourAnswersPage