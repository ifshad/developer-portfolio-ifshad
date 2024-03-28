import SelfBanner from "@/Components/SelfBanner/page";

export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      <div className="container bg-teal-light p-10 text-center my-3 rounded-md">
        <h2 className="text-base-200 text-4xl font-semibold my-10">About Me</h2>
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
  );
}
