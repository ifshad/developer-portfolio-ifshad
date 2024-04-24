import Image from 'next/image'
import React from 'react'
import ifshad from '@/public/Images/Ifshad_01.png'
import Link from 'next/link'
import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaDiscord } from 'react-icons/fa6'

export default function LeftPanel() {
    return (
        <div className='bg-teal p-3 h-screen'>
            <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-5 text-center">Ifshad Hasan Sharan</h1>
            <figure>
                <Image src={ifshad} alt="Ifshad Hasan Sharan" width={100} />
            </figure>
            <p>Quote here...</p>
            <ul className='flex gap-3 items-center'>
                <li className='text-base-100 hover:text-navy'><Link href="https://www.facebook.com/ifshadhasan.sharan"><BiLogoFacebookSquare size={30} /></Link></li>
                <li className='text-base-100 hover:text-navy'><Link href="https://www.linkedin.com/in/ifshad-hasan-sharan-50a6b1178/"><BiLogoLinkedinSquare size={30} /></Link></li>
                <li className='text-base-100 hover:text-navy'><Link href="/"><FaDiscord size={25} /></Link></li>
            </ul>
        </div>
    )
}
