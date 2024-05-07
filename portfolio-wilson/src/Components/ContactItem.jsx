import React from 'react'
import {useRef}  from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_b9343il', 'template_7s29w4z', form.current, {
        publicKey: 'aSA3I4-TvePYqJSDF',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contact" className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
        <form action="" method='post' encType='multipart/formdata' ref={form} onSubmit={sendEmail}>
          <div className='grid md:grid-cols-2 gap-4 w-full py-3'>
            <div className='flex flex-col'>
              <label htmlFor="name" className='uppercase text-sm py-2'>Name</label>
              <input type="text" placeholder='Enter Your Name' name='name' id='name'className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#001b5e]'/>
            </div>
            <div className='flex flex-col'>
              <label htmlFor="phone" className='uppercase text-sm py-2'>PhoneNo</label>
              <input placeholder='Enter Your PhoneNo' type="tel" id="phone" name="phone"className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#001b5e]'/>
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor="email" className='uppercase text-sm py-2'>Email</label>
              <input type="email" placeholder='Enter Your Email' name='email' id='email'className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#001b5e]'/>
            </div>
            <div className='flex flex-col py-2'>
              <label htmlFor="subject" className='uppercase text-sm py-2'>Subject</label>
              <input type="text" placeholder='Enter Your Email' name='subject' id='subject'className='border-2 rounded-lg p-3 flex border-gray-300 focus:outline-none focus:border-[#001b5e]'/>
            </div>
            <div className='flex flex-col flex-grow py-2'>
              <label htmlFor="message" className='uppercase text-sm py-2'>Message</label>
            
            </div>
              <textarea name="message" id="message" rows={10} className='border-2 rounded-lg p-2 border-gray-300 focus:outline-none focus:border-[#001b5e] md:col-span-2'></textarea>
          </div>
          <button className='bg-[#001b5e] text-gray-200 mt-4 w-full p-4 rounded-lg'>
              Send Message
          </button>
            
        </form>
    </section>
  )
}
