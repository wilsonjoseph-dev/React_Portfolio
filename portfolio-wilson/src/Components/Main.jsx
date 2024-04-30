import React from 'react'
import computer from '../assets/computer.jpg'
import { TypeAnimation } from 'react-type-animation';
import {FaTwitter,FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'


export const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-screen object-cover object-left' src={computer} alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/70'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Iam Wilson Joseph</h1>
                <h2 className='flex :sm:text-3xl text-2xl p-4 text-gray-800 font-semibold'>I am a   
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
                    speed={40}
                    style={{ fontSize: '1em', display: 'inline-block',paddingLeft:'5px'}}
                    repeat={Infinity}
                    />

                </h2>
                <div className='flex justify-between pt-4 max-w-[200px] w-full'>
                    <FaFacebook size={25}/>
                    <FaTwitter size={25}/>
                    <FaInstagram size={25}/>
                    <FaLinkedin size={25}/>
                </div>
            </div>
        </div>
    </div>
  )
}

