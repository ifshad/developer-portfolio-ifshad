import React from "react";
import { BiVector } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";
import { DiFirebase, DiPython } from "react-icons/di";
import {
  FaAws,
  FaDocker,
  FaFigma,
  FaFlask,
  FaGit,
  FaGitAlt,
  FaJava,
  FaNodeJs,
  FaReact,
} from "react-icons/fa6";
import {
  SiArduino,
  SiCplusplus,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiKeras,
  SiMongodb,
  SiMysql,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiScikitlearn,
  SiTypescript,
  SiWindows,
} from "react-icons/si";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const languages = [
  {
    langName: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    langName: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    langName: "Python",
    icon: <DiPython />,
  },
  {
    langName: "Arduino Lang",
    icon: <SiArduino />,
  },
  {
    langName: "Java",
    icon: <FaJava />,
  },
  {
    langName: "C++",
    icon: <SiCplusplus />,
  },
];
const devFrameworks = [
  {
    langName: "React",
    icon: <FaReact />,
  },
  {
    langName: "NextJS",
    icon: <TbBrandNextjs />,
  },
  {
    langName: "NodeJS",
    icon: <FaNodeJs />,
  },
];
const mlFrameworks = [
  {
    langName: "SciKitLearn",
    icon: <SiScikitlearn />,
  },
  {
    langName: "Keras",
    icon: <SiKeras />,
  },
];
const mlUtility = [
  {
    langName: "Pandas",
    icon: <SiPandas />,
  },
  {
    langName: "Numpy",
    icon: <SiNumpy />,
  },
];
const databases = [
  {
    langName: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    langName: "PostgreSQL",
    icon: <SiPostgresql />,
  },
];
const cloudServices = [
  {
    langName: "Amazon Web Services",
    icon: <FaAws />,
  },
  {
    langName: "Firebase",
    icon: <SiFirebase />,
  },
];
const graphics = [
  {
    langName: "Figma",
    icon: <FaFigma />,
  },
  {
    langName: "Vector Illustration",
    icon: <BiVector />,
  },
];
const others = [
  {
    langName: "Git",
    icon: <FaGitAlt />,
  },
  {
    langName: "Docker",
    icon: <FaDocker />,
  },
  {
    langName: "Restful API",
    icon: <TbApi />,
  },
  {
    langName: "Windows",
    icon: <SiWindows />,
  },
];

export default function ExpertisePage() {
  return (
    <div className="container m-5">
      <h1 className="flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-teal gap-2">
        <span>
          <BsLightning />
        </span>
        Expertise
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:ml-9 gap-4">
        {/* Programming language */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            Programming Languages
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {languages.map((language, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{language.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{language.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        {/* Dev Framework */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            Development Frameworks
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {devFrameworks.map((framework, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{framework.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{framework.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        {/* ML framework */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            ML Frameworks
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {mlFrameworks.map((framework, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{framework.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{framework.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        {/* ML utility */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            ML Utility Tools
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {mlUtility.map((utility, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{utility.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{utility.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        {/* Database */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            Database MS
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {databases.map((db, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{db.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{db.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        {/* Cloud Services */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            Cloud Services
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {cloudServices.map((cs, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{cs.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{cs.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        {/* Graphics */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            Graphics{" "}
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {graphics.map((graphic, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{graphic.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{graphic.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
        {/* Others */}
        <div className="group card flex flex-col h-full">
          <h2 className="text-lg font-semibold text-navy group-hover:text-white">
            Others
          </h2>
          <div className="grid grid-cols-3 gap-5 text-3xl">
            {others.map((other, i) => (
              <TooltipProvider key={i}>
                <Tooltip>
                  <TooltipTrigger>{other.icon}</TooltipTrigger>
                  <TooltipContent className="font-bold">{other.langName}</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
