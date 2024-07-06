import SelfBanner from "@/components/SelfBanner/page";
import ShowcaseBanner from "@/components/ShowcaseBanner/page";
import PortfolioPage from "@/components/PortfolioPage/page";

export default function Home() {
  return (
    <div>
      <SelfBanner />
      <PortfolioPage />
      <ShowcaseBanner />
    </div>
  );
}
