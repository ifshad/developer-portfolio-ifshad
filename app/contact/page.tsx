"use client";
import axios from "axios";
import React, { useState } from "react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [axiosError, setAxiosError] = useState<any>();
  const [posted, setPosted] = useState(false);

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
        setPosted(true);
      });
    setTimeout(() => {
      setPosted(false);
    }, 3000);
    e.target.reset();
  };
  return (
    <div className="container md:p-16">
      {/* Form */}
      <div className="col-span-3">
        <div className="">
          <div className="text-xl md:text-2xl lg:text-3xl text-teal font-semibold mb-8">
            Lets message me!
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                className="text-teal p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-teal"
                placeholder="name"
                required
              />
              <label
                htmlFor="name"
                className="absolute left-3 -top-3 cursor-text bg-sage px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-teal peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium  peer-focus:-translate-y-0  transition-all duration-200"
              >
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                className="text-teal p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-teal"
                placeholder="email"
                required
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-3 cursor-text  bg-sage px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-teal peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium  peer-focus:-translate-y-0  transition-all duration-200"
              >
                Email
              </label>
            </div>
            <div className="relative">
              <input
                type="text"
                name="message"
                id="message"
                className="text-teal p-3 bg-transparent border border-gray-200 rounded-[.5rem] outline-none peer w-full placeholder-transparent focus:border-teal"
                placeholder="message"
                required
              />
              <label
                htmlFor="message"
                className="absolute left-3 -top-3 cursor-text  bg-sage px-1 text-base lg:peer-focus:text-base md:peer-focus:text-base peer-focus:text-sm peer-placeholder-shown:text-teal peer-placeholder-shown:translate-y-6 peer-placeholder-shown:font-medium  peer-focus:-translate-y-0  transition-all duration-200"
              >
                Message
              </label>
            </div>
            <button className="btn w-full">
              {loading ? "Sending..." : "Send Message"}
            </button>
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
        {posted && (
          <div className="toast toast-center toast-middle">
            <div className="alert alert-success">
              <span>Message sent!</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
