"use client";
import Image from "next/image";
import React from "react";
import ifshad from "@/public/Images/Ifshad_01.png";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export default function SelfBanner() {
  return (
    <div className="container p-5 lg:h-[650px] grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12">
      <div className="md:col-span-8 lg:col-span-8 flex flex-col justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-teal font-bold mb-5">
          Hi, I&apos;m <br />{" "}
          <span className="text-4xl md:text-6xl lg:text-7xl text-navy">Ifshad Hasan Sharan</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-grey mb-5">
          I&apos;m a I am a versatile web developer with expertise in front-end engineering and a background in mechatronics engineering. I have experience building responsive, user-friendly websites and applications using modern technologies like React, Next.js, and TailwindCSS.
        </p>
        <div className="mt-10 flex items-center gap-5">
          <Link href="/contact" className="text-grey hover:text-navy flex items-center border-2 border-teal rounded-lg p-3 gap-2"><MdCall /><span>Contact Me</span></Link>
          <button className="btn flex items-center gap-2"><FaDownload /><span>Download CV</span></button>
        </div>
      </div>
      <div className="md:col-span-4 lg:col-span-4 flex items-center">
        <Image src={ifshad} width={500} className="" alt="Self Banner" />
      </div>
    </div>
  );
}
