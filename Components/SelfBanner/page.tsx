"use client";
import Image from "next/image";
import React from "react";
import ifshad from "@/public/Images/Ifshad_01.png";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export default function SelfBanner() {
  return (
    <div className="container flex flex-col md:flex-row lg:flex-row justify-between items-center py-10 lg:h-[650px]">
      <div className="">
        <h1 className="text-3xl md:text-5xl lg:text-6xl text-teal font-bold mb-5">
          Hi, I&apos;m <br />{" "}
          <span className="text-4xl md:text-6xl lg:text-7xl text-navy">Ifshad Hasan Sharan</span>
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-base-100 mb-5">
          I&apos;m a I am a versatile web developer with expertise in front-end engineering and a background in mechatronics engineering. 
        </p>
        <div className="mt-10 flex flex-col md:flex-row lg:flex-row items-center gap-5">
          <Link href="/contact" className="text-base-100 hover:text-navy flex items-center border-2 border-teal rounded-lg p-3 gap-2"><MdCall /><span>Contact Me</span></Link>
          <button className="btn flex items-center gap-2"><FaDownload /><span>Download CV</span></button>
        </div>
      </div>
      <div className="">
        <Image src={ifshad} width={500} className="" alt="Self Banner" />
      </div>
    </div>
  );
}
