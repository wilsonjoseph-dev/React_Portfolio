import React from 'react'
import {WorkItem} from '../Components/WorkItem'

const data = [
  {
    year:2023,
    title:'Web development intern',
    duration:'2 month',
    details:
    'During my internship at ABC Company, I was immersed in the Web Development department, where I actively contributed to project management and coding tasks. Collaborating closely with my team, we tackled various web projects, aiming to enhance user experience and functionality. From designing user interfaces to implementing backend solutions, I gained hands-on experience across the development lifecycle. Additionally, I played a crucial role in ensuring the smooth deployment and maintenance of web applications, refining my problem-solving skills and attention to detail. These experiences not only deepened my technical expertise but also ignited my passion for creating impactful digital solutions, setting a strong foundation for my future career in web development'
},
  {
    year:2023,
    title:'digital marketting intern',
    duration:'2 month',
    details:
    'As a Digital Marketing Specialist at XYZ Company, I developed and executed strategies to drive online traffic and generate leads. Through optimized Google AdWords campaigns, I achieved a 30% increase in click-through rates and a 20% reduction in CPA. Additionally, my SEO efforts led to a 40% surge in website traffic within six months. Crafting engaging social media content and targeted email campaigns resulted in a 50% growth in followers and improved email open rates by 25% and click-through rates by 15%.'
},
  {
    year:2023,
    title:'Human Resources intern',
    duration:'3 month',
    details:
    'During my internship at HCL Technologies in Human Resources, I actively participated in event organization and exam conduction. Collaborating with my team, I contributed to planning and executing various events aimed at enhancing employee engagement and professional growth, while also ensuring the smooth and fair administration of exams. These experiences equipped me with valuable skills in project management, communication, and attention to detail, laying a strong foundation for my future career in HR.'
},
  {
    year:2022,
    title:'Human Resources Intern',
    duration:'1 month',
    details:
    'During my internship at HCL Technologies in Human Resources, I actively participated in event organization and exam conduction. Collaborating with my team, I contributed to planning and executing various events aimed at enhancing employee engagement and professional growth, while also ensuring the smooth and fair administration of exams. These experiences equipped me with valuable skills in project management, communication, and attention to detail, laying a strong foundation for my future career in HR.'
},
  
]




export const Work = () => {
  return (
    <section id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16' >
      <h1 className='text-4xl font-bold text-center text-[#001b5e] mb-8'>Work</h1>
      {data.map((item,index)=>(
        <WorkItem key ={index} year = {item.year} title ={item.title} duration = {item.duration} details={item.details}/>
))}
    </section>
  )
}
