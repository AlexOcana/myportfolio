import React from "react";
import ProjectItem from "./ProjectItem";
import ProjectImg1 from "/proyecto1dom.png"
import ProjectImg2 from "/proyecto2.jpeg"
import ProjectImg3 from "/proyecto3.png"
const Projects = () => {
    return (

        <div id="projects" className="max-2-[1040px] n-auto md:pl-20 p-4">
            <h1 className='text-4xl font-bold text-center text-[#001b5e]'>
                Projects
            </h1>
            <p className="text-center mb-4 mt-2">
                Step into our digital gallery where innovation
                meets creation. Explore a collection of diverse
                projects that showcase our commitment to excellence.
                From sleek websites to cutting-edge applications,
                each project is a testament to our passion for
                pushing boundaries and bringing ideas to life.
            </p>
            <div className=" sm:grid-cols-3 gap-5 lg:flex md:flex sm:flex-row">
                <ProjectItem img={ProjectImg1} title='DOM VideoGame Proyect' link='https://alexocana.github.io/PROYECTO-VIDEOJUEGO/' />
                <ProjectItem img={ProjectImg2} title='HBS Proyect VideoGames API' link='https://github.com/AlexOcana/PROYECTO-VIDEOJUEGO' />
                <ProjectItem img={ProjectImg3} title='REACT App for GYM' link='https://gym4life.netlify.app' />
            </div>
        </div >
    )
}

export default Projects