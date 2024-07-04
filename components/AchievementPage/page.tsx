import React, { ReactElement } from 'react'
import { BiSolidBadge } from 'react-icons/bi'
import { GiAchievement } from 'react-icons/gi'

export default function AchievementPage() {
    return (
        <div className='flex flex-col gap-2 m-4'>
            <h1 className='flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-teal gap-2'><span><GiAchievement /></span>Achievements</h1>
            <div className='card md:ml-9 grid-cols-12'>
                <figure className='col-span-1 text-3xl'>
                    <BiSolidBadge />
                </figure>
                <p className='col-span-1'>2023</p>
                <h2 className='font-semibold text-lg col-span-3'>IoT Training</h2>
                <p className='text-base font-medium col-span-6'>Bangabandhu Sheikh Mujib Hi-Tech Park</p>
                <div className='col-span-1 text-end'>
                    <p>Bangladesh</p>
                </div>
            </div>
            <div className='card md:ml-9 grid-cols-12'>
                <figure className='col-span-1 text-3xl'>
                    <BiSolidBadge />
                </figure>
                <p className='col-span-1'>2022</p>
                <h2 className='font-semibold text-lg col-span-3'>Industrial Attachment</h2>
                <p className='text-base font-medium col-span-6'>Bangladesh Industrial Assistance Technical Centre BITAC</p>
                <div className='col-span-1 text-end'>
                    <p>Bangladesh</p>
                </div>
            </div>
        </div>
    )
}
