"use client"
import React, { useRef } from "react";
import { FaClock, FaLocationPin } from "react-icons/fa6";
import { GiBiceps } from "react-icons/gi";
import { useFramer } from "@/hooks/useFramer";
import { motion } from "framer-motion";

export default function ExtraCurActPage() {
  const scrollRef = useRef(null);
  const { scaleTransform, opacityTransform } = useFramer(scrollRef);
  return (
    <div className="container flex flex-col gap-2 m-4">
      <h1 className="flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-teal gap-2">
        <span>
          <GiBiceps />
        </span>
        Extracurricular Activities
      </h1>
      <motion.div
        style={{
          opacity: opacityTransform,
          scale: scaleTransform,
          // translateX: scaleTransform,
        }}
        ref={scrollRef}
      >
        <div className="card md:ml-9">
          <div className="card-title flex flex-col items-start">
            <h2 className="font-bold">Treasurer</h2>
            <p className="text-base font-semibold">Robotic Society Of RUET</p>
          </div>
          <div className="card-content">
            <p className="flex items-center gap-2">
              <span>
                <FaLocationPin />
              </span>{" "}
              Rajshahi, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaClock />
              </span>{" "}
              September, 2023 - March, 2024
            </p>
          </div>
        </div>
        <div className="card md:ml-9">
          <div className="card-title flex flex-col items-start">
            <h2 className="font-bold">Additional Organizing Secretary</h2>
            <p className="text-base font-semibold">MTE Career Club</p>
          </div>
          <div className="card-content">
            <p className="flex items-center gap-2">
              <span>
                <FaLocationPin />
              </span>{" "}
              Rajshahi, Bangladesh
            </p>
            <p className="flex items-center gap-2">
              <span>
                <FaClock />
              </span>{" "}
              September, 2023 - March, 2024
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
