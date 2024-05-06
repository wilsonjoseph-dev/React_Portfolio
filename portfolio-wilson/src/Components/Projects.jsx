import React from 'react'
import { ProjectItem } from './ProjectItem'
import CreativeWork from '../assets/CreativeWork.jpg'
import Marketting from '../assets/Marketting.jpg'
import BusinessSolution from '../assets/BusinessSolution.jpg'
import CreativeProcess from '../assets/CreativeProcess.jpg'
import CreativeProject from '../assets/CreativeProject.jpg'
import CreativeServices from '../assets/CreativeServices.jpg'
export const Projects = () => {
  return (
    <section id="projects" className='max-w-[1040px] m-auto md:pl-20 p-4 py-8'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
      <p className='text-center py-8'>Explore my Projects section—a showcase of my diverse endeavors and creative pursuits. From software development to artistry, each project reflects my passion and expertise. Delve into this portfolio for inspiration, innovation, and collaboration. Welcome to my world of creation!</p>
      <div className='grid sm:grid-cols-2 gap-12 '>
        <ProjectItem img = {CreativeWork} title = 'CreativeWork'/>
        <ProjectItem img = {Marketting} title = 'Marketiing'/>
        <ProjectItem img = {BusinessSolution} title = 'BusinessSolution'/>
        <ProjectItem img = {CreativeProcess} title = 'CreativeProcess'/>
        <ProjectItem img = {CreativeProject} title = 'CreativeProject'/>
        <ProjectItem img = {CreativeServices} title = 'CreativeServices'/>
      </div>

    </section>
  )
}
