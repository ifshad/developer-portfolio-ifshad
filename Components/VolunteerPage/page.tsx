import React from 'react'
import { FaHandshake } from 'react-icons/fa6'

export default function VolunteerPage() {
    return (
        <div className='flex flex-col gap-2 m-4'>
            <h1 className='flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-teal gap-2'><span><FaHandshake /></span>Voluntary Activities</h1>
            <div className='card md:ml-9 grid-cols-12'>
                <figure className='col-span-1 text-3xl'>

                </figure>
                <p className='col-span-1'>2019</p>
                <h2 className='font-semibold text-lg col-span-3'>Robotronics 1.0
                </h2>
                <p className='text-base font-medium col-span-6'>Volunteer, Decoration</p>
                <div className='col-span-1 text-end'>
                    <p>RUET</p>
                </div>
            </div>
        </div>
    )
}
