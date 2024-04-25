"use client";
import Image from "next/image";
import React from "react";
import ifshad from "@/public/Images/Ifshad_01.png";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export default function SelfBanner() {
  return (
    <div className="container mt-10 w-full flex justify-center">
      <div className="flex flex-col w-3/5">
        <h1 className="text-3xl md:text-5xl text-navy font-bold mb-5 text-center">
          Ifshad Hasan Sharan
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-grey mb-5 text-justify">
          I am a versatile web developer with expertise in front-end engineering, backed by a background in mechatronics engineering. I excel in building responsive, user-friendly websites and applications using modern technologies like React, Next.js, and TailwindCSS. My focus lies in translating complex requirements into intuitive user interfaces, ensuring seamless interactions across devices. I thrive in fast-paced environments, continuously refining my skills and delivering cutting-edge solutions. With a keen eye for design and usability, I collaborate closely with stakeholders to create meaningful digital experiences.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <Link href="/contact" className="text-grey hover:text-navy flex items-center border-2 border-teal rounded-lg p-3 gap-2"><MdCall /><span>Contact Me</span></Link>
          <button className="btn flex items-center gap-2"><FaDownload /><span>Download CV</span></button>
        </div>
      </div>
    </div>
  );
}
