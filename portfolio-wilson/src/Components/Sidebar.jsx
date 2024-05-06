import React, { useState } from "react";
import { AiOutlineMenu,AiOutlineHome,AiOutlineProject,AiOutlineMail} from "react-icons/ai";
import {GrProjects} from 'react-icons/gr'
import {BsPerson} from 'react-icons/bs'

export const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleNAv = () => {
    setNav(!nav);
    document.addEventListener("click",(()=>{

    }))
  };
  return (
    <div>
      <AiOutlineMenu size={35}
        onClick={() => handleNAv()}
        className="fixed top-4 right-4 z-[99] md:hidden rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer w-16"
      />
      {
        nav ? 
            (<div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden ">

            <a onClick={() => handleNAv()} href="#main" className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "><AiOutlineHome className="size-{20}"/><span className="pl-4">Home</span></a>

            <a onClick={() => handleNAv()} href="#work" className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "><AiOutlineProject className="size-{20}"/><span className="pl-4">Work</span></a>

            <a onClick={() => handleNAv()} href="#projects" className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "><GrProjects className="size-{20}"/><span className="pl-4">Projects</span></a>

            <a onClick={() => handleNAv()} href="#contact" className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "><AiOutlineMail className="size-{20}"/><span className="pl-4">Contact</span></a>
            </div>):(
              ''
            )}

           <div className="md:block hidden fixed top-[25%] z-10">
              <div className="flex flex-col">
              
                <a href="#main" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                <AiOutlineHome size={20}/>
                </a>
                <a href="#work" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                <GrProjects size={20}/>
                </a>
                <a href="#projects" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                <AiOutlineProject size={20}/>
                </a>
                <a href="#contact" className=" rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150">
                <AiOutlineMail size={20}/>
                </a>
              </div>
           </div>
        </div>
  );
};
