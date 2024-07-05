import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <div className="flex justify-between md:h-20 items-center md:px-20 shadow-lg sticky top-0 z-50 backdrop-blur-md">
      <div className="">
        <Link href="/" className="">
          Ifshad
        </Link>
      </div>
      <div className="">
        <Button asChild variant="link" className="text-lg text-primary-color">
          <Link href="/about">About</Link>
        </Button>
        <Button asChild variant="link" className="text-lg text-primary-color">
          <Link href="/projects">Works</Link>
        </Button>
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
