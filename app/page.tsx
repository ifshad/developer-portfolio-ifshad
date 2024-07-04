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
// import ScrollAnimation from "react-animate-on-scroll";

const projects = [
  {
    title: "TechDynasty- Modern tech on your fingertip!",
    imageUrl: "habijabi",
    description: "habijabi",
  },
  {
    title: "The Tensor Times!",
    imageUrl: "habijabi",
    description: "habijabi",
  },
  {
    title: "Personal portfolio!",
    imageUrl: "habijabi",
    description: "habijabi",
  },
];
export default function Home() {
  return (
    <div className="container">
      <SelfBanner />
      {/* Projects */}
      <div className="p-4">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Projects</h1>
        {/* <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation> */}
        <div className="grid grid-cols-3 gap-4 p-5">
          {projects.map((project, i) => (
            <Card key={i}>
              <CardHeader></CardHeader>
              <CardContent>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardContent>
              <CardFooter className="space-x-3">
                <Button asChild>
                  <Link href="/">Live Link</Link>
                </Button>
                <Button asChild>
                  <Link href="/">Code</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
