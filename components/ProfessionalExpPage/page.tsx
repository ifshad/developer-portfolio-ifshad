"use client"
import React, { useRef } from "react";
import humufy from "@/public/Images/humufyLogo-removebg-preview.png";
import Image from "next/image";
import { FaClock, FaLocationPin } from "react-icons/fa6";
import { BiBuildingHouse } from "react-icons/bi";
import { useFramer } from "@/hooks/useFramer";
import { motion } from "framer-motion";

export default function ProfessionalExpPage() {
  const scrollRef = useRef(null);
  const { scaleTransform, opacityTransform } = useFramer(scrollRef);
  return (
    <div className="container flex flex-col gap-2 m-4">
      <h1 className="flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-teal gap-2">
        <span>
          <BiBuildingHouse />
        </span>
        Professional Experiences
      </h1>
      <motion.div
        style={{
          opacity: opacityTransform,
          scale: scaleTransform,
          // translateX: scaleTransform,
        }}
        ref={scrollRef}
        className="card md:ml-9"
      >
        <Image src={humufy} alt="RUET logo" width={60} className="card-img" />
        <div className="card-title flex flex-col items-start">
          <h2>Humufy</h2>
          <p className="text-base">Software Engineering Intern</p>
        </div>
        <div className="card-content">
          <p className="flex items-center gap-2">
            <span>
              <FaLocationPin />
            </span>{" "}
            Dhaka, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <span>
              <FaClock />
            </span>{" "}
            March 2024- June 2024
          </p>
        </div>
      </motion.div>
    </div>
  );
}
