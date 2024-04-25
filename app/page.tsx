import AchievementPage from "@/Components/AchievementPage/page";
import EducationPage from "@/Components/EducationPage/page";
import ExpertisePage from "@/Components/ExpertisePage/page";
import ExtraCurActPage from "@/Components/ExtraCurActPage/page";
import ProfessionalExpPage from "@/Components/ProfessionalExpPage/page";
import ResearchActPage from "@/Components/ResearchActPage/page";
import SelfBanner from "@/Components/SelfBanner/page";
import VolunteerPage from "@/Components/VolunteerPage/page";

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
