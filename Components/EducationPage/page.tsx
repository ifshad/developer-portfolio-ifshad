import Image from 'next/image'
import React from 'react'
import ruet from '@/public/Images/ruet-monogram-2505-x-3000.png'
import amc from '@/public/Images/amc-logo.png'
import mzs from '@/public/Images/Logo_of_Mymensingh_Zilla_School.gif'
import { FaClock, FaGraduationCap, FaLocationPin } from 'react-icons/fa6'

export default function EducationPage() {
  return (
    <div className='flex flex-col gap-2 m-4'>
      <h1 className='flex items-center text-xl md:text-2xl lg:text-3xl font-semibold text-teal gap-2'><span><FaGraduationCap /></span>Educational Background</h1>
      <div className='card md:ml-9'>
        <Image src={ruet} alt='RUET logo' width={60} className='card-img'/>
        <div className='card-title flex flex-col items-start'>
            <h2>Rajshahi University of Engineering and Technology</h2>
            <p className='text-lg'>B.Sc. in Mechatronics Engineering</p>
        </div>
        <div className='card-content'>
            <p className='flex items-center gap-2'><span><FaLocationPin /></span> Rajshahi, Bangladesh</p>
            <p className='flex items-center gap-2'><span><FaClock /></span> 2019-2024</p>
        </div>
      </div>
      <div className='card md:ml-9'>
        <Image src={amc} alt='RUET logo' width={60} className='card-img'/>
        <div className='card-title flex flex-col items-start'>
            <h2>Ananda Mohan College Mymensingh</h2>
            <p className='text-lg'>Higher Secondary Certificate HSC</p>
        </div>
        <div className='card-content'>
            <p className='flex items-center gap-2'><span><FaLocationPin /></span> Mymensingh, Bangladesh</p>
            <p className='flex items-center gap-2'><span><FaClock /></span> 2016-2018</p>
        </div>
      </div>
      <div className='card md:ml-9'>
        <Image src={mzs} alt='RUET logo' width={60} className='card-img'/>
        <div className='card-title flex flex-col items-start'>
            <h2>Mymensingh Zilla School, Mymensingh</h2>
            <p className='text-lg'>Secondary School certificate SSC</p>
        </div>
        <div className='card-content'>
            <p className='flex items-center gap-2'><span><FaLocationPin /></span> Mymensingh, Bangladesh</p>
            <p className='flex items-center gap-2'><span><FaClock /></span> 2007-2016</p>
        </div>
      </div>
    </div>
  )
}
