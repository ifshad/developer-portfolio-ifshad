import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function PortfolioPage() {
  return (
    <div className="container md:h-[700px] md:mt-16">
      {/* Description */}
      <div className="w-1/2 p-5 md:p-12 flex flex-col justify-around">
        <p className="text-lg mb-5 md:text-xl opacity-80">Portfolio</p>
        <h2 className="text-lg md:text-5xl font-bold">
          All Creative Works, <br /> Selected Projects
        </h2>
        <p className="text-lg my-5 md:text-xl opacity-80">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="">
          <Link
            href="/about"
            className="inline-flex text-accent-color opacity-90 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-accent-color"
          >
            Explore More <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
