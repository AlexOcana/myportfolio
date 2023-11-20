import React, { useState } from "react";
import { AiOutlineHome, AiOutlineMenu, AiOutlineProject, AiOutlineMail } from "react-icons/ai"
import { BsPerson } from 'react-icons/bs'
import { GrProjects } from 'react-icons/gr'

const SideNav = () => {

    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div>
            <AiOutlineMenu
                onClick={handleNav}
                className='fixed top-4 right-4 z-[99] md:hidden'
            />
            {
                nav ? (
                    <div className="fixed w-full h-full backdrop-blur-md bg-white/70 flex flex-col justify-center items-center z-20 gap-10">
                        <a onClick={handleNav}
                            href="#main"
                            className="w-[40%] flex gap-4"
                        >
                            <AiOutlineHome size={30} />
                            <span className=" text-2xl">Home</span>
                        </a>

                        <a onClick={handleNav}
                            href="#resume"
                            className="w-[40%] flex gap-4"
                        >
                            <BsPerson size={30} />
                            <span className=" text-2xl">About Me</span>
                        </a>

                        <a onClick={handleNav}
                            href="#work"
                            className="w-[40%] flex gap-4"
                        >
                            <GrProjects size={30} />
                            <span className=" text-2xl">Work</span>
                        </a>
                        <a onClick={handleNav}
                            href="#projects"
                            className="w-[40%] flex gap-4"
                        >
                            <AiOutlineProject size={30} />
                            <span className=" text-2xl">Proyects</span>
                        </a>

                        <a onClick={handleNav}
                            href="#contact"
                            className="w-[40%] flex gap-4"
                        >
                            <AiOutlineMail size={30} />
                            <span className=" text-2xl">Contact</span>
                        </a>
                    </div>

                ) : (
                    ''
                )}
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <AiOutlineHome size={20} />
                    </a>
                    <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <BsPerson size={20} />
                    </a>
                    <a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <GrProjects size={20} />
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <AiOutlineProject size={20} />
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-100 ease-in duration-300">
                        <AiOutlineMail size={20} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SideNav