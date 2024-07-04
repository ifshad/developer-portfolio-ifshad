"use client";
import React from "react";
import Link from "next/link";
import { FaDownload } from "react-icons/fa6";
import { MdCall } from "react-icons/md";

export default function SelfBanner() {
  return (
    <div className="container mt-10 w-full flex justify-center">
      <div className="flex flex-col w-5/6">
        <h1 className="text-3xl md:text-5xl text-navy font-bold mb-5 text-center">
          Ifshad Hasan Sharan
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-grey mb-5 text-justify">
          As a dynamic software engineer, I specialize in creating robust web
          applications, adept in both front-end and back-end technologies as
          well as data structures and algorithms (DSA). I bring a unique blend
          of software expertise and an engineering mindset to my work, enabling
          me to approach challenges analytically and systematically. My skill
          set includes proficiency in various programming languages, frameworks,
          and tools, which allows me to build scalable, efficient, and
          user-friendly applications. I thrive in collaborative environments,
          leveraging teamwork to drive innovative projects and deliver
          high-quality solutions that meet complex requirements. My ability to
          integrate and optimize systems ensures the development of reliable and
          performant web applications that exceed client expectations.
        </p>
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
    </div>
  );
}
