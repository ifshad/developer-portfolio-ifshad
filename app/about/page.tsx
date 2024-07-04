import React from "react";
import AchievementPage from "@/components/AchievementPage/page";
import EducationPage from "@/components/EducationPage/page";
import ExpertisePage from "@/components/ExpertisePage/page";
import ExtraCurActPage from "@/components/ExtraCurActPage/page";
import ProfessionalExpPage from "@/components/ProfessionalExpPage/page";
import ResearchActPage from "@/components/ResearchActPage/page";
import VolunteerPage from "@/components/VolunteerPage/page";

export default function AboutPage() {
  return (
    <div className="container md:p-16">
      <ProfessionalExpPage />
      <ExpertisePage />
      <EducationPage />
      <ResearchActPage />
      <ExtraCurActPage />
      <AchievementPage />
      <VolunteerPage />
    </div>
  );
}
