"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";
import { FaDiscord, FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { GoDash } from "react-icons/go";


export default function SelfBanner() {
  return (
    <div className="container flex md:h-[700px] w-full relative">
      {/* Background */}
      <div className="absolute md:w-[700px] h-16 md:top-40 bg-indigo-500/30 rotate-45 md:left-40 blur-3xl"></div>
      {/* Image intro */}
      <div className="w-1/2 p-5 md:p-12 flex flex-col justify-around">
        {/* Name */}
        <div>
          <p className="text-lg mb-5 md:text-3xl opacity-80 flex gap-3 items-center">
            Hi, I&apos;m
          </p>
          <h1 className="text-4xl md:text-8xl font-medium bg-gradient-to-br from-[#15D8FA] from-33% via-[#00FFFF] via-33% to-[#FE0049] to-34% bg-clip-text text-transparent z-40">
            Ifshad <br /> Hasan Sharan
          </h1>
          <div className="w-16 border-b-4 border-b-accent-color mt-5"></div>
        </div>
        {/* Social Links */}
        <div>
          <ul className="flex gap-3 items-center">
            <li className="text-base-100 opacity-70 hover:opacity-100 transition-all duration-500">
              <Link href="https://www.facebook.com/ifshadhasan.sharan">
                <BiLogoFacebookSquare size={30} />
              </Link>
            </li>
            <li className="text-base-100 opacity-70 hover:opacity-100 transition-all duration-500">
              <Link href="https://www.linkedin.com/in/ifshad-hasan-sharan-50a6b1178/">
                <BiLogoLinkedinSquare size={30} />
              </Link>
            </li>
            <li className="text-base-100 opacity-70 hover:opacity-100 transition-all duration-500">
              <Link href="https://discordapp.com/users/ifshad_51">
                <FaDiscord size={25} />
              </Link>
            </li>
            <li className="text-base-100 opacity-70 hover:opacity-100 transition-all duration-500">
              <Link href="https://github.com/ifshad">
                <FaGithub size={25} />
              </Link>
            </li>
            <li className="text-base-100 opacity-70 hover:opacity-100 transition-all duration-500">
              <Link href="https://leetcode.com/u/i6J0GjFUV9/">
                <SiLeetcode size={25} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Description */}
      <div className="w-1/2 p-5 md:p-12 flex flex-col justify-around">
        {/* Description Section */}
        <div>
          <p className="text-lg mb-5 md:text-xl opacity-80 flex gap-3 items-center">
            <GoDash /> Introduction
          </p>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "I am a Software Engineer",
              1000,
              "I am a MERN Stack Expert",
              1000,
              "I am a NextJS Enthusiast",
              1000,
              "I am a TypeScript Lover",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{
              display: "inline-block",
            }}
            repeat={Infinity}
            className="text-lg md:text-5xl font-bold"
          />
          {/* <h2 className="text-lg md:text-5xl font-bold">,based in Dhaka Bangladesh</h2> */}
          <p className="text-lg my-5 md:text-xl opacity-80">
            I&apos;m a dynamic software engineer specializing in robust web
            applications. Proficient in front-end, back-end, and DSA, I build
            scalable, user-friendly applications. I thrive in collaborative
            environments, driving innovative projects and delivering
            high-quality, reliable web solutions.
          </p>
          <div className="">
            <Link
              href="#about"
              className="inline-flex text-accent-color opacity-90 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-accent-color transition-all duration-500"
            >
              My Story <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
