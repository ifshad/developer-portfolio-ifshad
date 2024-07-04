import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";

export default function Header() {
  return (
    <div className="flex justify-between md:h-20 items-center md:px-20 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="">
        <Link href="/" className="">
          Ifshad
        </Link>
      </div>
      <div className="">
        <ul className="flex md:space-x-6">
          <li className="hover:text-teal">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-teal">
            <Link href="/about">About Me</Link>
          </li>
          <li className="hover:text-teal">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <button className="btn flex items-center gap-2">
          <FaDownload />
          <span>Download CV</span>
        </button>
      </div>
    </div>
  );
}
