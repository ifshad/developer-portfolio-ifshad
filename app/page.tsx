import SelfBanner from "@/components/SelfBanner/page";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ShowcaseBanner from "@/components/ShowcaseBanner/page";
// import ScrollAnimation from "react-animate-on-scroll";


export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      <ShowcaseBanner />
      
    </div>
  );
}
