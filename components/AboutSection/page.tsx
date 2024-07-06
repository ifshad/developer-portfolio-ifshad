import React from "react";
import AchievementPage from "@/components/AchievementPage/page";
import EducationPage from "@/components/EducationPage/page";
import ExpertisePage from "@/components/ExpertisePage/page";
import ExtraCurActPage from "@/components/ExtraCurActPage/page";
import ProfessionalExpPage from "@/components/ProfessionalExpPage/page";
import ResearchActPage from "@/components/ResearchActPage/page";
import VolunteerPage from "@/components/VolunteerPage/page";

export default function AboutSection() {
  return (
    <div id="about" className="container md:p-16 relative">
      <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500/20 top-96 left-96  blur-3xl -z-30"></div>
      <div className="absolute w-[450px] h-[450px] rounded-full bg-indigo-500/20 bottom-96 right-96  blur-3xl -z-30"></div>
      {/* Descriptions */}
      <div className="text-center">
        <h2 className="text-lg md:text-5xl font-bold">About Me</h2>
        <p className="text-lg my-5 md:text-xl opacity-80">
          Discover the journey of a passionate web developer bringing ideas to
          life..
        </p>
      </div>
      <div className="w-11/12 mx-auto">
        <ProfessionalExpPage />
        <ExpertisePage />
        <EducationPage />
        <ResearchActPage />
        <ExtraCurActPage />
        <AchievementPage />
        <VolunteerPage />
      </div>
    </div>
  );
}
