import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Main = () => {
    return (
        <div className="pt-20 md:pt-10 lg:pt-5" id='main'>
            <div className="flex sm:flex-row md:flex-row lg:flex-row flex-col">
                <div className="flex flex-row gap-12 md:gap-9 lg:gap-4 md:pt-0 lg:pt-0 relative z-[1] justify-center lg:w-[33%]">
                    <img className="w-[60px] h-[50px] md:w-[60px] md:h-[40px]  lg:w-[110px] lg:h-[90px]  lg:ml-3" src="/azure.png" alt="" />
                    <img className="w-[40px] h-[40px]  lg:w-[80px] lg:h-[70px] " src="/html.png" alt="" />
                    <img className="w-[40px] h-[40px]  lg:w-[80px] lg:h-[70px]" src="/css33.png" alt="" />
                    <img className="w-[40px] h-[40px]  lg:w-[80px] lg:h-[70px]" src="/js.png" alt="" />
                </div>
                <div className="pt-5 md:pt-0 lg:pt-0 flex gap-6 md:gap-9 lg:gap-4 relative z-[1] justify-center lg:w-[33%]">

                    <img className="w-[40px] h-[40px] lg:w-[90px] lg:h-[70px]" src="/kubernetes.png" alt="" />
                    <img className="w-[40px] h-[40px] lg:w-[80px] lg:h-[70px]" src="/express.png" alt="" />
                    <img className="w-[40px] h-[40px] lg:w-[80px] lg:h-[70px]" src="/mongo.png" alt="" />
                    <img className="w-[40px] h-[40px] lg:w-[80px] lg:h-[70px]" src="/docker.png" alt="" />
                </div>
                <div className="pt-5 md:pt-0 lg:pt-0 flex  gap-12 md:gap-9 lg:gap-4 relative z-[1] justify-center lg:w-[33%]">

                    <img className="w-[40px] h-[40px] lg:w-[80px] lg:h-[70px]" src="/git.png" alt="" />
                    <img className="w-[40px] h-[40px] lg:w-[80px] lg:h-[70px]" src="/bootstrap.png" alt="" />
                    <img className="w-[40px] h-[40px] lg:w-[80px] lg:h-[70px]" src="/react.png" alt="" />
                    <img className="w-[40px] h-[40px] lg:w-[80px] lg:h-[70px]" src="/node.png" alt="" />
                </div>
            </div>
            <img
                className="w-screen h-[450px] lg:w-screen lg:h-[620px] object-cover object-left scale-x-[1] pt-5 "
                src="/screenshot.jpg"
                alt="remotework"
            />
            <div className="w-full h-[700px] lg:h-[740px] absolute top-0 left-0 bg-white/50  backdrop-blur-sm ">
                <div className="sm:max-w-[500px]lg:max-w-[700px] mt-20 h-full w-full flex flex-col justify-center items-center lg:justify-center">
                    <h1 className="sm:text-5xl text-3xl font-bold  lg:justify-center lg:text-center text-gray-800">I'm Alejandro Ocaña</h1>
                    <h2 className="flex sm:text-2xl text-2xl pt-4 text-gray-800">I'm a <TypeAnimation
                        sequence={[
                            'Web Developer', // Types 'One'
                            2000, // wait 1s 
                            'DevOps Tech', // Types 'One'
                            2000, // wait 1s 
                            'Coder', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'Tech Enthusiast',
                            2000,

                        ]}
                        wrapper="div"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', paddingLeft: '5px' }}
                    />
                    </h2>
                    <div className="flex gap-5 pt-6 max-w-[200px] w-full justify-center">

                        <a href="https://github.com/AlexOcana" target="_blank">
                            <FaGithub className="cursor-pointer" size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/aocmon/" target="_blank">
                            <FaLinkedinIn className="cursor-pointer" size={30} />
                        </a>

                    </div>
                </div>
            </div>

        </div>

    )
}

export default Main