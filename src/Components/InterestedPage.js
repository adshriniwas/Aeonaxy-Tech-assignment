import React, { useState } from 'react';
import { FaLessThan } from "react-icons/fa6";

const initInterests = [
    {
      profIcon: "interest1.svg",
      active: true,
      boldText: "Learning specific skills to advance my career",
    },
    {
      profIcon: "interest2.svg",
      active: false,
      boldText: "Exploring new topics I'm interested in",
    },
    {
      profIcon: "interest3.svg",
      active: false,
      boldText: "Refreshing my maths foundations",
    },
    { profIcon: "interest4.svg", active: false, boldText: "Exercising my brain to stay sharp" },
    { profIcon: "interest5.svg", active: false, boldText: "Something else" }
  ];

  

const InterestedPage = () => {

    const [interests, setInterests] = useState(initInterests);

    const handleClick = (i)=> {
        let newItem = 
        setInterests((state)=>{
            {
                return(state.map((item,ind)=>{
                    if(i==ind){
                        item.active = true;
                    }else{
                        item.active = false;
                    }
                    return item;
                }))
            }
        });
    }

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
                    style={{ width: "25%" }}
                ></div>
            </div>
        </div>
        {/* start of title and subtitle  */}
        <div className="w-full max-w-xl text-center m-auto">
          <div className="text-3xl font-bold mt-9">
            Which are you most interested in?
          </div>
          <p className="mt-7 text-sm text-gray-600">
            Choose just one. This will help us get you started (But won't limit your experience)
          </p>
        </div>
        {/* start of user list  */}
        <div className="mt-10 w-full max-w-lg m-auto">
          {interests.map((interest, ind) => {
            return (
              <div key={ind} onClick={()=>handleClick(ind)} className={`${interest.active==true? "border-yellow-800" : "border-gray-300"} px-4 py-3 m-2 border rounded-md hover:border-gray-500 hover:shadow-md cursor-pointer  flex items-center`}>
                <div>
                  <img
                    className="w-9 h-9"
                    src={interest.profIcon}
                    alt={interest.boldText}
                  />
                </div>
                <div className="ml-5">
                  <span className="font-sm">{interest.boldText}</span>
                </div>
              </div>
            );
          })}
          
        </div>

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

export default InterestedPage