import React from 'react'
import WorkItem from './WorkItem'

const data = [
    {
        year: '2023',
        company: 'Ironhack Spain',
        title: 'Full Stack developer',
        duration: '(Bootcamp)',
        details: <>
            Consolidation of different code languages used in contemporary web programming. <br /> <br />
            React, JavaScript (ES6), Node.js, MongoDB, Express, HTML 5 & CSS 3 (Bootstrap, Tailwind).
        </>
    },
    {
        year: '2018 - 2023',
        company: 'GUEMISA',
        title: 'Proyect Manager & Web Developer',
        duration: '5 years',
        details: <>
            Project manager of the company receiving reports from different departments: logistics,
            sales, marketing, quality, and carrying out the supervision and development of projects,
            taking into account the company's criteria and short- and long - term objectives.<br /><br />
            In addition
            to functions as a web developer out of the company's necessity, using various technologies such: <br />
            JavaScript, HTML, ReactJs, NodeJs, Express, MongoDB, Bootstrap, Tailwind.
        </>
    },
    {
        year: '2016 - 2018',
        company: <>TUV Austria <br /></>,
        title: <>INY International Coordinator <br />/ Project Manager </>,
        duration: '2 years',
        details: <>
            International coordination of inspections in manufacturing industries. <br />
            Production control according to customer criteria or regulations based on materials. <br />
            Supervision of distribution chain and manufacturing procedures. <br />
            ISO regulations.
        </>
    },
    {
        year: '2014 - 2016',
        company: 'Bureau Veritas',
        title: <>INY International Coordinator <br />/ Project Manager </>,
        duration: '2 years',
        details: <>
            Coordination of Inspection and Activation of Engineering Projects (EPC).<br></br>
            Management and logistical coordination of teams at national and international levels.<br></br>
            Supplier Homologation.<br></br>
            Selection and hiring, negotiation of prices and conditions with non-exclusive collaborators.<br></br>
            Quality document management for projects.<br></br>
            Monitoring of orders in the factory (Activation), shipment, and transportation document management.<br></br>
            Tracking of KPIs and preparation of monitoring reports.<br></br>
            Reporting to management on the progress of SWE objectives.<br></br>
            Procurement Key User for Spain and Portugal.
        </>
    },

]
const Work = () => {
    console.log(data);
    return (

        <div id="work" className="max-2-[1040px] n-auto md:pl-20 p-5 py-5 ">
            <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>
                Work
            </h1>
            {data.map((item, idx) => (
                <WorkItem
                    key={idx}
                    year={item.year}
                    company={item.company}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                />
            ))}
        </div>

    )
}

export default Work
