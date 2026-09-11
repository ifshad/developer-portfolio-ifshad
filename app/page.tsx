import { Hero } from "@/components/sections/Hero";
import { EngineeringSnapshot } from "@/components/sections/EngineeringSnapshot";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Experience } from "@/components/sections/Experience";
import { EngineeringApproach } from "@/components/sections/EngineeringApproach";
import { About } from "@/components/sections/About";
import { Education } from "@/components/sections/Education";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <EngineeringSnapshot />
      <SelectedWork />
      <Experience />
      <EngineeringApproach />
      <About />
      <Education />
      <Contact />
    </>
  );
}
