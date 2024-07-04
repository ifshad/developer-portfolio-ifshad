"use client";
import React from "react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import ifshad from "@/public/Images/Ifshad_01.png";

export default function SelfBanner() {
  return (
    <div className="container flex md:h-[550px] w-full items-center justify-around">
      <div className="w-3/6">
        <p className="text-lg md:text-3xl">Hi! I'm,</p>
        <h1 className="text-3xl md:text-5xl text-navy font-extrabold ">
          Ifshad Hasan Sharan
        </h1>
        <TypeAnimation
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "I am a software engineer",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "I adept in both front-end and back-end technologies",
            1000,
            "I adept in data structures and algorithms",
            1000,
            "I create robust web applications",
            1000,
            "I thrive in collaborative environment",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{ fontSize: "2em", display: "inline-block" }}
          repeat={Infinity}
        />
        <div className="mt-10 flex justify-center items-center gap-5">
          <Link
            href="/contact"
            className="text-grey hover:text-navy flex items-center border-2 border-teal rounded-lg p-3 gap-2"
          >
            <MdCall />
            <span>Contact Me</span>
          </Link>
          <button className="btn flex items-center gap-2">
            <FaDownload />
            <span>Download CV</span>
          </button>
        </div>
      </div>
      <div className="border-4 border-orange-500 rounded-full">
        <div className="w-96 h-96 m-2 border-2 rounded-full relative bg-gradient-to-r from-orange-500 to-yellow-300 overflow-clip">
          <Image
            src={ifshad}
            alt="Ifshad Hasan Sharan"
            width={360}
            height={360}
            className="inset-0 absolute"
          />
        </div>
      </div>
    </div>
  );
}
