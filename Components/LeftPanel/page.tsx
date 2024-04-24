import Image from 'next/image'
import React from 'react'
import ifshad from '@/public/Images/Ifshad_01.png'
import Link from 'next/link'
import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from 'react-icons/bi'
import { FaDiscord } from 'react-icons/fa6'

export default function LeftPanel() {
    return (
        <div className='bg-teal p-3'>
            <div className='h-screen flex flex-col justify-around'>
                <div className='flex flex-col items-center'>
                    <h1 className="text-xl md:text-2xl lg:text-3xl text-white font-bold mb-5 text-center">Ifshad Hasan Sharan</h1>
                    <Image src={ifshad} alt="Ifshad Hasan Sharan" width={200} height={200} className='border-4 border-white rounded-full px-4' />
                    <p className='text-white text-center'>&quot;Success is not final, failure is not fatal: It is the courage to continue that counts.&quot; - Winston Churchill</p>
                </div>
                <ul className='flex gap-3 justify-center'>
                    <li className='text-base-100 hover:text-white'><Link href="https://www.facebook.com/ifshadhasan.sharan"><BiLogoFacebookSquare size={30} /></Link></li>
                    <li className='text-base-100 hover:text-white'><Link href="https://www.linkedin.com/in/ifshad-hasan-sharan-50a6b1178/"><BiLogoLinkedinSquare size={30} /></Link></li>
                    <li className='text-base-100 hover:text-white'><Link href="/"><FaDiscord size={25} /></Link></li>
                </ul>
            </div>
        </div>
    )
}
