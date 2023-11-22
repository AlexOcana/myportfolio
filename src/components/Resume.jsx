import React from 'react'
import MeImg from '/yo4.jpeg'
import EducationItem from './EducationItem'

const info = [
    {
        year: '2023',
        school: 'Ironhack Spain',
        title: 'Full Stack developer',
        duration: '(Bootcamp)',
        details: <>
            Consolidation of different code languages used in contemporary web programming. <br /> <br />
            React, JavaScript (ES6), Node.js, MongoDB, Express, HTML 5 & CSS 3 (Bootstrap, Tailwind).
        </>
    },
    {
        year: '2010-2014',
        school: 'UCM',
        title: 'Physical Education',
        duration: '4 years',
        details: <>
            Graduate in Physical Education. <br />
            English certification C1 (Cambridge Collegue)
        </>
    }
]

const Resume = () => {
    return (
        <>
            <div className="flex-col justify-center items-center mt-5 " id='resume'>
                <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                    About Me
                </h1>
                <div className='items-center justify-center flex flex-col md:flex-row lg:flex-row md:gap-10 lg:gap-10'>
                    <img className="items-center rounded-full w-[35%] h-[20%]" src={MeImg} alt="photoOfMe" />
                    <div className="py-2">
                        <p className="text-left max-w-[60ch] p-5">

                            I am Alejandro Ocaña, a Full Stack developer, whose educational foundation
                            lies in Physical Education. However, my journey has been a passionate pursuit
                            of technology. Throughout my career, I have actively sought opportunities within
                            the Information Technology and Engineering sectors. My primary goal is to maintain
                            a commitment to lifelong learning and contribute to both personal and professional growth.
                            <br />
                            <br />
                            If you are in search of a dedicated and passionate Full Stack developer to complement
                            your team or spearhead your project, I am wholeheartedly ready to join your ranks and
                            contribute to your company's success.
                            <br /><br />
                            How can I help you achieve your goals?
                        </p>

                    </div>
                </div>
            </div>


            <div id="work" className="max-2-[1040px] n-auto md:pl-20 p-5 py-5 ">
                <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                    Education
                </h1>
                {info.map((item, idx) => (
                    <EducationItem
                        key={idx}
                        year={item.year}
                        school={item.school}
                        title={item.title}
                        duration={item.duration}
                        details={item.details}
                    />
                ))}

            </div>
        </>

    )

}


export default Resume