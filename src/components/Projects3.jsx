"use client";


import { CardBody, CardContainer, CardItem } from "./Projects2";
import InternshipCertificate1 from "../pics/Internship1.png";
import InternshipCertificate2 from "../pics/Internship2.jpeg";
// 1️⃣ Internship/Work Experience Data
const experiences = [
  {
    company: "Labdox",
    role: "Web Developer Intern",
    duration: "January 2025 - April 2025",
    image: InternshipCertificate1,
    stack:["HTML","Javascript","CSS","WIX"]
  },
  {
    company: "Brain Bytes",
    role: "Graphic Designer Intern",
    duration: "May 2023 - November 2023",
    image: InternshipCertificate2,
    stack:["Canva","Figma","AI Image Tools"]
  },
  // Add more experiences here...
];
const colors = [
  "bg-blue-500",
  "bg-green-800",
  "bg-purple-500",
  "bg-pink-600",
  "bg-yellow-500",
  "bg-red-500",
  "bg-indigo-500"
];

export function ThreeDCardDemo() {
  return (
    <div>
        <h1 className="my-7 text-center text-4xl bold"
      >
        Experience
        </h1>
    <div className="flex flex-wrap gap-8 justify-center ">
    
      {experiences.map((exp, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-slate-950 dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
            <CardItem
              translateZ={50}
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {exp.company} - {exp.role}
            </CardItem>
            <CardItem
              as="p"
              translateZ={60}
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {exp.duration}
            </CardItem>
            <CardItem translateZ={100} className="w-full mt-4">
              <img
                src={exp.image}
                alt={`${exp.company} Internship`}
                height="1000"
                width="1000"
                className="h-full w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>
          
<div className="flex flex-wrap gap-2 mt-4">
  {exp.stack?.map((tech, techIndex) => (
    <CardItem
      key={techIndex}
      translateZ={20}
      as="button"
      className={`px-4 py-2 rounded-xl text-white text-xs font-bold ${colors[techIndex % colors.length]}`}
   
    >
      {tech}
    </CardItem>
  ))}
</div>

          </CardBody>
        </CardContainer>
      ))}
    </div>
    </div>
  );
}
