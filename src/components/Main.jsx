import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'


const Main = () => {
    return (
        <div className="pt-20" id='main'>
            <div className="flex gap-12 relative z-[1] justify-center ">
                <img className="w-[40px] h-[40px]]" src="/azure.png" alt="" />
                <img className="w-[40px] h-[40px] " src="/html.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/css33.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/js.png" alt="" />
            </div>
            <div className="pt-5 flex gap-12 relative z-[1] justify-center ">

                <img className="w-[40px] h-[40px]" src="/kubernetes.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/express.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/mongo.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/docker.png" alt="" />
            </div>
            <div className="pt-5 flex gap-12 relative z-[1] justify-center">

                <img className="w-[40px] h-[40px]" src="/git.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/bootstrap.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/react.png" alt="" />
                <img className="w-[40px] h-[40px]" src="/node.png" alt="" />

            </div>
            <img
                className="w-screen h-[450px] object-cover object-left scale-x-[1] pt-5 "
                src="/screenshot.jpg"
                alt="remotework"
            />
            <div className="w-full h-[700px] absolute top-0 left-0 bg-white/50  backdrop-blur-sm">
                <div className="max-w-[500px] mt-20 h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-3xl font-bold  text-gray-800">I'm Alejandro Ocaña</h1>
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