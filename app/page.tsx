import AchievementPage from "@/components/AchievementPage/page";
import EducationPage from "@/components/EducationPage/page";
import ExpertisePage from "@/components/ExpertisePage/page";
import ExtraCurActPage from "@/components/ExtraCurActPage/page";
import ProfessionalExpPage from "@/components/ProfessionalExpPage/page";
import ResearchActPage from "@/components/ResearchActPage/page";
import SelfBanner from "@/components/SelfBanner/page";
import VolunteerPage from "@/components/VolunteerPage/page";

export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      <EducationPage />
      <ProfessionalExpPage />
      <ExpertisePage />
      <ResearchActPage />
      <ExtraCurActPage />
      <AchievementPage />
      <VolunteerPage />
    </div>
  );
}
