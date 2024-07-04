import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between md:h-24 items-center md:px-16">
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
    </div>
  );
}
