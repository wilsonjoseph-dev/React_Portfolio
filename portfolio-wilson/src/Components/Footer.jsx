import React from 'react'

export const Footer = () => {
    const currentYear  = new Date().getFullYear()
  return (
    <footer className='md:pl-10 w-full h-8 flex justify-center items-center bg-slate-200 m-auto'>
        <p className='tracking-wide '>
        Copyright &#169; {currentYear} Wilson Joseph
        </p>
    </footer>
  )
}
