import React from 'react'
import computer from '../assets/computer.jpg'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'


export const Main = () => {
  return (
    <section id='main'>
        <img className='w-full h-screen object-cover object-right' src={computer} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 flex items-center bg-slate-50/40 justify-center '>
            <div className=' flex flex-col justify-center items-center  '>
                <h1 className='sm:text-5xl text-4xl font-bold text-[#001b5e]'>I'm Wilson Joseph</h1>
                <h2 className='flex :sm:text-3xl text-2xl p-4 text-[#001b5e] font-semibold'>I am a   
                 <TypeAnimation
                    sequence={[
                        'Developer',
                        2000, 

                        'Digital Marketter',
                        2000,

                        'Data Analyst',
                        2000
                    ]}
                    wrapper="span"
                    cursor = {true}
                    speed={30}
                    style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px'}}
                    repeat={Infinity}
                    />

                </h2>
                <div className='flex justify-between pt-4 max-w-[200px] w-full'>
                    <FaFacebook size={25} className='text-[#001b5e]'/>
                    <FaTwitter size={25} className='text-[#001b5e]'/>
                    <FaInstagram size={25} className='text-[#001b5e]'/>
                    <FaLinkedin size={25} className='text-[#001b5e]'/>
                </div>
            </div>
        </div>
    </section>
  )
};