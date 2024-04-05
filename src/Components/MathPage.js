import React, { useState } from "react";
import { FaLessThan } from "react-icons/fa6";

const initMathItems = [
    {
      profIcon: "math1.png",
      active: false,
      boldText: "Arithmetic",
      normalText: "Introductory"
    },
    {
      profIcon: "math2.png",
      active: true,
      boldText: "Basic Algebra",
      normalText: "Foundational"
    },
    {
      profIcon: "math3.png",
      active: false,
      boldText: "Intermediate Algebra",
      normalText: "Intermediate"
    },
    { profIcon: "math4.png",
      active: false, 
      boldText: "Calculus",
      normalText: "Advanced"
    }
    
  ];

const MathPage = () => {

    const [mathItem, setMathItem] = useState(initMathItems);

    const handleClick = (i)=> {
        setMathItem((state)=>{
            return(state.map((item,ind)=>{
                if(i===ind){
                    item.active = true;
                }else{
                    item.active = false;
                }
                return item;
            }))
        });
    }

  return (
    <>
    <div className="min-h-screen w-full flex flex-col items-center">
      <div className="px-8 pt-12 w-full max-w-6xl justify-center">
        {/* start of progress bar  */}
        <div className="flex items-center">
          <div className="mb-4 mr-3 cursor-pointer">
            <FaLessThan />
          </div>
          <div className="w-full bg-gray-300 rounded-full h-1.5 mb-4 dark:bg-gray-300">
            <div
              className="bg-[#3EB489] h-1.5 rounded-full dark:bg-[#3EB489]"
              style={{ width: "60%" }}
            ></div>
          </div>
        </div>
        {/* start of title and subtitle  */}
        <div className="w-full max-w-xl text-center m-auto">
          <div className="text-3xl font-bold mt-9">
            What is your math confort level?
          </div>
          <p className="mt-7 text-sm text-gray-600">
            Choose the highest level you feel confident in - you can always adjust later
          </p>
        </div>
        {/* start of math items  */}
        <div className="mt-16 w-full max-w-4xl flex flex-wrap justify-center m-auto ">
            {
                mathItem.map((item, ind)=> {
                    return(
                        <div key={ind} onClick={()=>handleClick(ind)} className={`flex flex-col justify-center items-center w-[200px] border ${item.active ? "border-yellow-800" : "border-gray-300"} cursor-pointer hover:shadow-md hover:border-gray-500 rounded-md pb-6 m-2`}>
                            <div ><img className="w-[200px]" src={item.profIcon}/></div>
                            <div className="text-sm">{item.boldText}</div>
                            <div className="text-md text-gray-400 mt-1">{item.normalText}</div>
                        </div>
                    )
                })
            }  
        </div>
        {/* start of continue button  */}
        <div className="mb-5 mt-14 flex justify-center">
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
  );
};

export default MathPage;
