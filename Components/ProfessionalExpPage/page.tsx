import React from 'react'
import { BsHouse } from 'react-icons/bs'
import humufy from '@/public/Images/humufyLogo-removebg-preview.png'
import Image from 'next/image'
import { FaClock, FaLocationPin } from 'react-icons/fa6'

export default function ProfessionalExpPage() {
  return (
    <div className='flex flex-col gap-2 m-4'>
      <h1 className='flex items-center text-xl md:text-2xl lg:text-3xl font-semibold text-teal gap-2'><span><BsHouse /></span>Professional Experiences</h1>
      <div className='card md:ml-9'>
        <Image src={humufy} alt='RUET logo' width={60} className='card-img'/>
        <div className='card-title flex flex-col items-start'>
            <h2>Humufy</h2>
            <p className='text-lg'>Software Engineering Intern</p>
        </div>
        <div className='card-content'>
            <p className='flex items-center gap-2'><span><FaLocationPin /></span> Dhaka, Bangladesh</p>
            <p className='flex items-center gap-2'><span><FaClock /></span> March 2024- Present</p>
        </div>
      </div>
    </div>
  )
}
