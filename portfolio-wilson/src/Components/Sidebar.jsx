import React, { useState, useEffect } from "react";
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { GrProjects } from "react-icons/gr";

export const Sidebar = () => {
  const [nav, setNav] = useState(false);
  const handleNAv = () => {
    setNav(!nav);
  };

  function handleMouseEnter(event) {
    const description = event.target.querySelector(".description");
    if (description) {
      description.style.opacity = "1";
    }
  }

  function handleMouseLeave(event) {
    const description = event.target.querySelector(".description");
    if (description) {
      description.style.opacity = "0";
    }
  }
  useEffect(() => {
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  return (
    <div>
      
        <AiOutlineMenu
          size={35}
          onClick={() => handleNAv()}
          className="fixed top-4 right-4 z-[99] md:hidden rounded-full  bg-gray-100 m-2 p-2 cursor-pointer w-16"
        />
      
      {nav ? (
        <div 
          className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden "
          onClick={() => handleNAv()}
        >
          <a
            onClick={() => handleNAv()}
            href="#main"
            className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineHome className="size-{20}" />
            <span className="pl-4">Home</span>
          </a>

          <a
            onClick={() => handleNAv()}
            href="#work"
            className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineProject className="size-{20}" />
            <span className="pl-4">Work</span>
          </a>

          <a
            onClick={() => handleNAv()}
            href="#projects"
            className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <GrProjects className="size-{20}" />
            <span className="pl-4">Projects</span>
          </a>

          <a
            onClick={() => handleNAv()}
            href="#contact"
            className="w-[55%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200 "
          >
            <AiOutlineMail className="size-{20}" />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="link rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150 relative"
          >
            <AiOutlineHome size={20} />
            <span className="description absolute left-[110%] top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-md shadow-md opacity-0 transition-opacity duration-300 w-28 pl-7">
              Home
            </span>
          </a>

          <a
            href="#work"
            className="link rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150 relative"
          >
            <GrProjects size={20} />
            <span className="description absolute left-[110%] top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-md shadow-md opacity-0 transition-opacity duration-300 w-28 pl-8">
              work
            </span>
          </a>
          <a
            href="#projects"
            className="link rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150 relative"
          >
            <AiOutlineProject size={20} />
            <span className="description absolute left-[110%] top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-md shadow-md opacity-0 transition-opacity duration-300 w-28 pl-5">
              projects
            </span>
          </a>

          <a
            href="#contact"
            className="link rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-150 relative"
          >
            <AiOutlineMail size={20} />
            <span className="description absolute left-[110%] top-1/2 transform -translate-y-1/2 bg-gray-100 p-2 rounded-md shadow-md opacity-0  w-28 pl-3">
              contact us
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
