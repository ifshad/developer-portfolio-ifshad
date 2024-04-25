import Image from 'next/image'
import React from 'react'
import { FaArrowRight, FaBook, FaClock, FaFlask, FaLocationPin } from 'react-icons/fa6'
import thesis from '@/public/Images/thesis-output.jpeg'

export default function ResearchActPage() {
    return (
        <div className='flex flex-col gap-2 m-4'>
            <h1 className='flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-teal gap-2'><span><FaFlask /></span>Research Activities</h1>
            {/* Thesis */}
            <div className='card  md:ml-9'>
                <div className='card-img'>
                    <Image src={thesis} width={100} alt='Thesis image output' />
                </div>
                <div className='card-title flex flex-col items-start'>
                    <h1>Design & Implementation Of Speech Emotion Analyzer Using NLP</h1>
                    <h2 className='text-base'>Analyzes speech for emotion, aiding sentiment analysis.</h2>
                    <ol className='text-base'>
                        <li className='flex gap-2'><FaArrowRight />Converted speech signals to text, clean and normalize data.</li>
                        <li className='flex gap-2'><FaArrowRight />Extracted linguistic, acoustic, and prosodic features.</li>
                        <li className='flex gap-2'><FaArrowRight />Trained machine learning or deep learning models to classify emotions.</li>
                    </ol>
                </div>
                <div className='card-content'>
                    <p className='flex items-center gap-2'><span><FaLocationPin /></span> RUET,Rajshahi</p>
                    <p className='flex items-center gap-2'><span><FaClock /></span> 2024</p>
                    <p className='flex items-center gap-2'><span><FaBook /></span> Supervised by: Md. Hafiz Ahmed, Asst. Prof, RUET</p>
                </div>
            </div>
            {/* Case study */}
            <div className='card  md:ml-9'>
                <div className='card-img'>
                    <Image src={thesis} width={100} alt='Thesis image output' />
                </div>
                <div className='card-title flex flex-col items-start'>
                    <h1>Towards Deep Learning-Based Efficient Speech Enhancement: An
                        Overview</h1>
                    <h2 className='text-base'>Explores advancements in deep learning techniques for enhancing speech quality, aiming to improve speech processing systems.</h2>
                    <ol className='text-base'>
                        <li className='flex gap-2'><FaArrowRight /> Examines deep learning methods in speech enhancement.</li>
                        <li className='flex gap-2'><FaArrowRight />Surveys various deep learning architectures for the task.</li>
                        <li className='flex gap-2'><FaArrowRight />Offers insights and potential research directions.</li>
                    </ol>
                </div>
                <div className='card-content'>
                    <p className='flex items-center gap-2'><span><FaLocationPin /></span> RUET,Rajshahi</p>
                    <p className='flex items-center gap-2'><span><FaClock /></span> 2023</p>
                    <p className='flex items-center gap-2'><span><FaBook /></span> Supervised by: Md. Hafiz Ahmed, Asst. Prof, RUET</p>
                </div>
            </div>
        </div>
    )
}
