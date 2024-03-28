import SelfBanner from "@/Components/SelfBanner/page";
import { FaNode } from "react-icons/fa6";
import { SiJavascript, SiMongodb, SiReact } from "react-icons/si";

export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      {/* About */}
      <div className="container bg-teal-light p-10 text-center my-3 rounded-md flex items-center lg:h-[550px]">
        <div>
          <h2 className="text-base-200 text-4xl font-semibold my-3">About Me</h2>
          <p className="text-base-100 text-lg w-3/5 mx-auto mb-8">Experienced in machine learning projects, I excel in creating intuitive user experiences and integrating complex systems. Passionate about innovation and problem-solving, I thrive in collaborative environments.</p>
          <ul className="flex justify-between text-base-100 w-3/4 mx-auto my-10">
            <li><p>Name: <br /> <span className="font-semibold">Ifshad Hasan Sharan</span></p></li>
            <li><p>Email: <br /> <span className="font-semibold">ifshadmte.51@gmail.com</span></p></li>
            <li><p>Date of Birth: <br /> <span className="font-semibold">28 February, 2001</span></p></li>
            <li><p>From: <br /> <span className="font-semibold">Mymensingh, Bangladesh</span></p></li>
            <li></li>
          </ul>
        </div>
      </div>
      {/* What I do */}
      <div className="container flex items-center lg:h-[650px]">
        <div className="p-10">
          <h2 className="text-4xl text-base-200 font-semibold text-center mb-3">What I Do</h2>
          <p className="text-center text-base-100 w-3/4 mx-auto mb-5">I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="card">
              <SiJavascript className="text-5xl text-teal" />
              <h3 className="text-2xl text-base-200 font-semibold">Frontend Development</h3>
              <p className="text-base-100">I specialize in creating responsive, user-friendly websites and applications using modern technologies like React, Next.js, and TailwindCSS.</p>
            </div>
            <div className="card">
              <SiReact className="text-5xl text-teal" />
              <h3 className="text-2xl text-base-200 font-semibold">Backend Development</h3>
              <p className="text-base-100">I have experience building backend systems with Node.js, Express, and MongoDB. I can create RESTful APIs and integrate third-party services.</p>
            </div>
            <div className="card">
              <FaNode className="text-5xl text-teal" />
              <h3 className="text-2xl text-base-200 font-semibold">Machine Learning</h3>
              <p className="text-base-100">I have worked on machine learning projects using Python, TensorFlow, and scikit-learn. I can build and deploy models for various applications.</p>
            </div>
            <div className="card">
              <SiMongodb className="text-5xl text-teal" />
              <h3 className="text-2xl text-base-200 font-semibold">Machine Learning</h3>
              <p className="text-base-100">I have worked on machine learning projects using Python, TensorFlow, and scikit-learn. I can build and deploy models for various applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
