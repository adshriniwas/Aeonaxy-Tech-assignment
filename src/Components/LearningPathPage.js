import React from 'react'

const LearningPathPage = () => {
  return (
    <>
    <div className="min-h-screen w-full flex flex-col justify-center items-center">
        <div className="px-8 py-8 w-full flex flex-col items-center max-w-3xl">

            <div className='w-20 h-20 border-[12px] border-yellow-500 rounded-full'></div>
            <div className="text-xl text-center font-bold my-9">
                Finding learning path recomendations for you based on your responses
            </div>
        </div>
    </div>
    <div className="bg-black h-[1.5px]"></div>
    </>
  )
}

export default LearningPathPage