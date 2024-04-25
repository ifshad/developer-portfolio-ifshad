import AchievementPage from "@/Components/AchievementPage/page";
import EducationPage from "@/Components/EducationPage/page";
import ExtraCurActPage from "@/Components/ExtraCurActPage/page";
import ProfessionalExpPage from "@/Components/ProfessionalExpPage/page";
import SelfBanner from "@/Components/SelfBanner/page";

export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      <EducationPage />
      <ProfessionalExpPage />
      <ExtraCurActPage />
      <AchievementPage />
    </div>
  );
}
