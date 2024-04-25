import React from 'react'
import { BiVector } from 'react-icons/bi'
import { BsLightning } from 'react-icons/bs'
import { DiFirebase, DiPython } from 'react-icons/di'
import { FaAws, FaDocker, FaFigma, FaFlask, FaGit, FaGitAlt, FaJava, FaNodeJs, FaReact } from 'react-icons/fa6'
import { SiArduino, SiCplusplus, SiExpress, SiFirebase, SiJavascript, SiKeras, SiMongodb, SiMysql, SiNumpy, SiPandas, SiScikitlearn, SiTypescript, SiWindows } from 'react-icons/si'
import { TbApi, TbBrandNextjs } from 'react-icons/tb'

export default function ExpertisePage() {
    return (
        <div className='m-5'>
            <h1 className='flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-teal gap-2'><span><BsLightning /></span>Expertise</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:ml-9 gap-4'>
                {/* Programming language */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>Programming Languages</h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                        <SiJavascript />
                        <SiTypescript />
                        <DiPython />
                        <SiArduino />
                        <FaJava />
                        <SiCplusplus />
                    </div>
                </div>
                {/* Dev Framework */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>Development Frameworks</h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                        <FaReact />
                        <TbBrandNextjs />
                        <FaNodeJs />
                    </div>
                </div>
                {/* ML framework */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>ML Frameworks</h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                        <SiScikitlearn />
                        <SiKeras />
                    </div>
                </div>
                {/* ML utility */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>ML Utility Tools</h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                        <SiPandas />
                        <SiNumpy />
                    </div>
                </div>
                {/* Database */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>Database MS</h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                        <SiMysql />
                        <SiMongodb />
                    </div>
                </div>
                {/* Cloud Services */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>Cloud Services</h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                        <FaAws />
                        <SiFirebase />
                    </div>
                </div>
                {/* Graphics */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>Graphics </h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                       <FaFigma />
                       <BiVector />
                    </div>
                </div>
                {/* Others */}
                <div className='card flex flex-col h-full'>
                    <h2 className='text-lg font-semibold text-navy hover:text-white'>Others</h2>
                    <div className='grid grid-cols-3 gap-5 text-3xl'>
                        <FaGitAlt />
                        <FaDocker />
                        <TbApi />
                        <SiWindows />
                    </div>
                </div>
            </div>
        </div>
    )
}
