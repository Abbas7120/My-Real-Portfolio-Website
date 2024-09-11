import project1 from "../pics/projects/UrbanJobs1.png";
import project2 from "../pics/projects/1.png";
import project3 from "../pics/projects/3.png";
import project4 from "../pics/projects/2.png";

export const HERO_CONTENT = `MERN stack developer with expertise in full-stack web development. Proficient in building dynamic web applications using MongoDB, Express.js, React, and Node.js.Have a strong skill in DSA in C++, and problem-solving.Passionate about delivering high-quality software solutions and continuously learning new technologies. `;

export const ABOUT_TEXT = `Experienced MERN stack developer with a strong foundation in both frontend and backend technologies. Proficient in building dynamic web applications using MongoDB, Express.js, React, and Node.js. Adept at designing and implementing scalable and secure server-side solutions, as well as creating intuitive and responsive user interfaces. Additionally, skilled in Data Structures and Algorithms (DSA) using C++, with experience in solving complex problems through efficient code. Passionate about delivering high-quality software solutions and continuously learning new technologies.`
export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  
];

export const PROJECTS = [
  {
    title: "Urban Jobs ",
    image: project1,
    description:
      "A fully functional job portal website with features like job listing of city MALLS , Showrooms areas & connecting local shopkeepers , showroom owner with unemployed poor graduates .",
    technologies: ["HTML", "CSS","JS", "React", "Node.js", "MongoDB"],
    },
  {
    title: "Personal Portfolio Website",
    image: project2,
    description:
      "A responsive portfolio with sections such as Home, About, Contact and Projects.",
    technologies: ["HTML", "CSS", "ReactJS", "TailwindCSS" , "MaterialUI"],
  link:"https://reactflashcard.vercel.app/"
  },
  {
    title: "Node Hotel App - Backend",
    image: project3,
    description:
      "A node hotel app Backend which consist of feature like showing menu , authorization of users as chef or waiter",
    technologies: ["JWT", "MongoDB", "Express", "NodeJS"],
    link:"https://node-hotel-application-kddq.onrender.com"
  },
  {
    title: "Tic-Tac-Toe",
    image: project4,
    description:
      "A basic tic-tac-toe game where 2 players play gamee with each other",
    technologies: ["HTML", "CSS", "JavaScript"],
     link: "https://abbas7120.github.io/Tic-Tac-Toe/"
  },
];

export const CONTACT = {
  address: "Jankipuram , Lucknow , Uttar Pradesh , India ",
  email: "abbasfzd118@gmail.com",
};
