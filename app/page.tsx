import EducationPage from "@/Components/EducationPage/page";
import ProfessionalExpPage from "@/Components/ProfessionalExpPage/page";
import SelfBanner from "@/Components/SelfBanner/page";

export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      <EducationPage />
      <ProfessionalExpPage />
    </div>
  );
}
