"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import logo from "@/public/Images/Circles_Life_RGB_Color_Logo logo.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("");
  const router = useRouter();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveSection(hash);
    };

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    router.push(href);
    setActiveSection(href.split("#")[1]);
  };

  return (
    <div className="hidden lg:flex justify-between md:h-20 items-center md:pr-20 shadow-lg sticky top-7 z-50 backdrop-blur-md md:w-3/5 rounded-full mx-auto">
      {/* Logo */}
      <Link href="/#" onClick={(e) => handleClick(e, "/#")}>
        <Image src={logo} alt="Logo or monogram" height={80} />
      </Link>
      {/* Navigation menu */}
      <div className="flex space-x-5">
        <Link
          className={`text-lg text-primary-color hover:border-b-2 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ${
            activeSection === "about" && "opacity-100 scale-110 border-b-2"
          }`}
          onClick={(e) => handleClick(e, "/#about")}
          href="/#about"
        >
          About
        </Link>
        <Link
          className={`text-lg text-primary-color hover:border-b-2 opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300 ${
            activeSection === "projects" && "opacity-100 scale-110 border-b-2"
          }`}
          onClick={(e) => handleClick(e, "/#projects")}
          href="/#projects"
        >
          Projects
        </Link>
        <Link
          className={`text-lg text-primary-color opacity-80 hover:opacity-100 hover:border-b-2 hover:scale-110 transition-all duration-300 ${
            activeSection === "services" && "opacity-100 scale-110 border-b-2"
          }`}
          onClick={(e) => handleClick(e, "/#services")}
          href="/#services"
        >
          Services
        </Link>
      </div>
    </div>
  );
}
