import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const User = [
  {
    profIcon: "avatar1.svg",
    boldText: "Student",
    normalText: "or soon to be enrolled",
  },
  {
    profIcon: "avatar2.svg",
    boldText: "Professional",
    normalText: "pursuing a career",
  },
  {
    profIcon: "avatar3.svg",
    boldText: "Parent",
    normalText: "of a school-age child",
  },
  { profIcon: "avatar4.svg", boldText: "Lifelong learner", normalText: "" },
  { profIcon: "avatar5.svg", boldText: "Teacher", normalText: "" },
  { profIcon: "avatar6.svg", boldText: "Other", normalText: "" },
];

const Intro = () => {
  return (
    <>
    <div id="intro" className="min-h-screen w-full flex flex-col items-center">
      <div className="px-8 pt-12 w-full max-w-6xl justify-center">
        {/* start of progress bar  */} 
        <div className="w-full bg-gray-300 rounded-full h-1.5 mb-4 dark:bg-gray-300">
            <div
                className="bg-[#3EB489] h-1.5 rounded-full dark:bg-[#3EB489]"
                style={{ width: "10%" }}
            ></div>
        </div>
        {/* start of title and subtitle  */}
        <div className="w-full max-w-lg text-center m-auto">
          <div className="text-3xl font-bold mt-9">
            Which describes you best?
          </div>
          <p className="mt-7 text-sm text-gray-600">
            This will help us personalize your experience
          </p>
        </div>
        {/* start of user list  */}
        <div className="mt-10 w-full max-w-lg m-auto">
          {User.map((user, ind) => {
            return (
              <div key={ind} className="px-4 py-3 m-2 border rounded-md hover:border-gray-500 hover:shadow-md cursor-pointer border-gray-300 flex items-center">
                <div>
                  <img
                    className="w-9 h-9"
                    src={user.profIcon}
                    alt={user.boldText}
                  />
                </div>
                <div className="ml-5">
                  <span className="font-sm">{user.boldText}</span>{" "}
                  <span className="text-gray-600">{user.normalText}</span>
                </div>
              </div>
            );
          })}
          
        </div>

        <div className="my-5 flex justify-center">
          <AnchorLink
            href="#interested"
            className="block px-7 py-2 rounded-md hover:bg-black hover:text-white bg-gray-300 cursor-pointer"
          >
            Continue
          </AnchorLink>
        </div>
      </div>
    </div>
    <div className="bg-black h-[1.5px]"></div>
    </>
  );
};

export default Intro;
