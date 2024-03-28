import SelfBanner from "@/Components/SelfBanner/page";
import { FaNode } from "react-icons/fa6";
import { SiJavascript, SiMongodb, SiReact } from "react-icons/si";

export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      {/* About */}
      <div className="container bg-teal-light my-3 rounded-md flex items-center lg:h-[550px]">
        <div className="w-4/5 mx-auto">
          <h2 className="text-grey text-2xl md:text-3xl lg:text-4xl font-semibold my-3 text-center">About Me</h2>
          <p className="text-grey text-lg mb-8 md:text-center lg:text-center">Experienced in machine learning projects, I excel in creating intuitive user experiences and integrating complex systems. Passionate about innovation and problem-solving, I thrive in collaborative environments.</p>
          <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 text-grey my-10 text-center">
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
        <div className="p-5">
          <div className="w-10/12 mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-grey font-semibold mb-3 text-center">What I Do</h2>
            <p className=" text-grey mb-5 md:text-center lg:text-center">I have more than 10 years experience building software for clients all over the world. Below is a quick overview of my main technical skill sets and technologies i use. Want to find out more about my experience? Check out my online resume and project portfolio.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
            <div className="card">
              <SiJavascript className="text-5xl text-teal" />
              <h3 className="text-xl md:text-2xl lg:text-3xl text-grey font-semibold">Frontend Development</h3>
              <p className="text-grey">I specialize in creating responsive, user-friendly websites and applications using modern technologies like React, Next.js, and TailwindCSS.</p>
            </div>
            <div className="card">
              <SiReact className="text-5xl text-teal" />
              <h3 className="text-xl md:text-2xl lg:text-3xl text-grey font-semibold">Backend Development</h3>
              <p className="text-grey">I have experience building backend systems with Node.js, Express, and MongoDB. I can create RESTful APIs and integrate third-party services.</p>
            </div>
            <div className="card">
              <FaNode className="text-5xl text-teal" />
              <h3 className="text-xl md:text-2xl lg:text-3xl text-grey font-semibold">Machine Learning</h3>
              <p className="text-grey">I have worked on machine learning projects using Python, TensorFlow, and scikit-learn. I can build and deploy models for various applications.</p>
            </div>
            <div className="card">
              <SiMongodb className="text-5xl text-teal" />
              <h3 className="text-xl md:text-2xl lg:text-3xl text-grey font-semibold">Machine Learning</h3>
              <p className="text-grey">I have worked on machine learning projects using Python, TensorFlow, and scikit-learn. I can build and deploy models for various applications.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
