"use client";
import React from "react";
import {
  FaDiscord,
} from "react-icons/fa6";
import Link from "next/link";
import { BiLogoFacebookSquare, BiLogoLinkedinSquare } from "react-icons/bi";

export default function Footer() {
  return (
    <div className="container border-t-2">
      <div className="flex flex-col justify-center items-center p-10">
        {/* Description */}
        <div className="mb-5">
          <div className="">
            <h2 className="mb-3 text-xl md:text-2xl lg:text-3xl font-semibold text-base-300">
              Lets Connect
            </h2>
            <p className="mb-6 text-base-100">
              Please fill out the form on this section to contact with me or
              call between 9:00 A.M and 8.00 P.M ET, Monday through Friday.
            </p>
            <ul className="flex gap-3 items-center">
              <li className="text-base-100 hover:text-navy">
                <Link href="https://www.facebook.com/ifshadhasan.sharan">
                  <BiLogoFacebookSquare size={30} />
                </Link>
              </li>
              <li className="text-base-100 hover:text-navy">
                <Link href="https://www.linkedin.com/in/ifshad-hasan-sharan-50a6b1178/">
                  <BiLogoLinkedinSquare size={30} />
                </Link>
              </li>
              <li className="text-base-100 hover:text-navy">
                <Link href="/">
                  <FaDiscord size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p>
            &copy;All right reserved <span>{new Date().getFullYear()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
