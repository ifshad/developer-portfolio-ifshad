"use client";
import React, { useState } from "react";
import { FaArrowRight, FaDiscord } from "react-icons/fa6";
import Link from "next/link";
import axios from "axios";
import { Button } from "@/components/ui/button";
import logo from "@/public/Images/Circles_Life_RGB_Color_Logo logo.svg";
import Image from "next/image";
import Swal from 'sweetalert2';

export default function Footer() {
  const [loading, setLoading] = useState(false);
  const [axiosError, setAxiosError] = useState<any>();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const message = form.get("message");

    const messageData = {
      Name: name,
      Email: email,
      Message: message,
    };
    setLoading(true);

    axios
      .post(
        "https://api.sheetapi.rest/api/v1/sheet/QDgKar5L2rr9ndLuTvYFL",
        messageData
      )
      .then(() => {})
      .catch((error) => setAxiosError(error))
      .finally(() => {
        setLoading(false);
        // setPosted(true);
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        });
        Toast.fire({
          icon: "success",
          title: "Message sent successfully!",
        });
      });
    e.target.reset();
  };
  return (
    <div className="container py-6 md:py-16 bg-tertiary-color">
      <div className="flex flex-col lg:flex-row justify-between p-10">
        {/* Description */}
        <div className="mb-5">
          <div className="p-5 md:p-12 flex flex-col justify-around">
            <h2 className="text-lg md:text-3xl font-bold">
              Got a Project? <br /> Lets Talk
            </h2>
            <p className="text-lg my-5 md:text-xl opacity-80">
              I used to help others with my genius solutions.
            </p>
            <div className="">
              <Link
                href="/about"
                className="inline-flex text-accent-color opacity-90 items-center gap-x-2 border-b-2 border-transparent hover:opacity-100 hover:border-accent-color transition-all duration-500"
              >
                Email Me <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
        {/* Form */}
        <div className="col-span-3">
          <div className="">
            <h2 className="text-lg md:text-3xl font-bold mb-5">
              Estimate Your Project? <br /> Let Me Know Here
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className=" p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent"
                  placeholder="name"
                  required
                />
                <label
                  htmlFor="name"
                  className="absolute left-3 -top-3 cursor-text bg-tertiary-color opacity-75 peer-focus:opacity-100 px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown: peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium  peer-focus:-translate-y-0  transition-all duration-200"
                >
                  What&apos;s Your Name?
                </label>
              </div>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent"
                  placeholder="email"
                  required
                />
                <label
                  htmlFor="email"
                  className="absolute left-3 -top-3 cursor-text  bg-tertiary-color opacity-75 peer-focus:opacity-100 px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown: peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium  peer-focus:-translate-y-0  transition-all duration-200"
                >
                  Your Fancy Email
                </label>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="message"
                  id="message"
                  className=" p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent"
                  placeholder="message"
                  required
                />
                <label
                  htmlFor="message"
                  className="absolute left-3 -top-3 cursor-text  bg-tertiary-color opacity-75 peer-focus:opacity-100 px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown: peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium  peer-focus:-translate-y-0  transition-all duration-200"
                >
                  Tell Me About Your Project
                </label>
              </div>
              <Button>{loading ? "Sending..." : "Send Message"}</Button>
            </form>
            <p className="mt-2 text-base-100">
              *We won&apos;t share your data with anyone else...
            </p>
          </div>
          {axiosError && (
            <div className="toast toast-center toast-middle">
              <div className="alert alert-info">
                <span>{axiosError.message}</span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Copyright */}
      <div className="flex flex-col items-center justify-center">
        <Image src={logo} alt="Logo or monogram" height={100} />
        <p>Thanks For Scrolling! Thats All Folks.</p>
        <p>
          &copy;All right reserved <span>{new Date().getFullYear()}</span>
        </p>
      </div>
    </div>
  );
}
