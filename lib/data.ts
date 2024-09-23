import React from "react";

import { FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import snapgram from "@/public/snapgram.png";
import wildfree from "@/public/wildand free.png";
import Ecommerce from "@/public/E-commerce.png";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaPencilRuler,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiChakraui,
  SiBootstrap,
  SiPrisma,
  SiMongodb,
  SiFramer,
  SiD3Dotjs,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiFirebase,
} from "react-icons/si";

export interface Skill {
  name: string;
  icon: React.ElementType;
  color?: string;
}

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experiences",
    hash: "#experience",
  },
  // {
  //   name: "Social",
  //   hash: "#social",
  // },
] as const;

export const experiencesData = [
  {
    title: "BSc in Software Engineering",
    location: "University of Engineering and Technology, Pakistan",
    description:
      "pursuing a degree in Software Engineering at UET Taxila, where I am immersed in a rigorous curriculum that blends theoretical knowledge with practical application. The program emphasizes a deep understanding of core software engineering principles, coupled with hands-on experience in modern technologies. This academic foundation is equipping me to tackle complex challenges in the ever-evolving tech landscape",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Sep - 2026 June",
  },
  {
    title: "MERN Stack Developer",
    location: React.createElement(
      "span",
      {},
      React.createElement(
        "a",
        {
          href: "https://www.technetcloud.co/",
          style: { textDecoration: "underline" },
          target: "_blank",
        },
        "Tech Net Cloud"
      ),
      "Islamabad,Pak"
    ),
    description:
      "  Developed and optimized RESTful APIs, boosting backend performance by 30%.Implemented robust authentication mechanisms, significantly enhancing data protection.Accelerated project timelines: Collaborated with senior developers to deliver three major projects ahead of schedule.",
    icon: React.createElement(FaVuejs),
    date: "2024 Feb - 2024 May",
  },
  {
    title: "Frontend Developer",
    location: "HOOD Hub | Chennai, India",
    description:
      "Built a startup website from scratch, leading to a 20% increase in online interaction. Utilized React.js, Next.js, and Tailwind CSS to create user-friendly, responsive interfaces. Developed intuitive navigation and interactive features, enhancing overall usability.",
    icon: React.createElement(FaReact),
    date: "2023 June - 2024 April",
  },
  {
    title: "Technical Team Member",
    location: "Google Developer Club",
    description:
      "Improved coding practices, reducing bugs by 15% and ensuring high-quality deliverables.Managed timelines and coordinated efforts, ensuring successful and timely project completion",
    icon: React.createElement(LuGraduationCap),
    date: "2022 Nov - 2023 OCT",
  },
];

export type ProjectTags = (typeof projectsData)[number]["tags"];

export const projectsData = [
  {
    title: "Wild and Free",

    description:
      "Discover your favorite events with ease on our powerful MERN stack platform. Explore detailed event information, secure your tickets effortlessly, and create unforgettable memories with friends—all in one seamless experience.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind",
      "MongoDb",
      "Framer Motion",
      "Express Js",
    ],
    imageUrl: wildfree,
    projectUrl:
      "https://github.com/Arbab-Mustafa/Filtering_Searching-Component",
    demoUrl: "https://www.wildandfree.us/",
  },
  {
    title: "Snapgram",

    description:
      "An immersive full-stack social media platform where users can effortlessly share photos, engage with others through likes, and build connections by following fellow users.",
    tags: ["React", "TypeScript", "Appwrite", , "Tailwind Css", "Zod"],
    imageUrl: snapgram,
    projectUrl: "https://github.com/Arbab-Mustafa/Social-media-App",
    demoUrl: "https://react-social-mediaapp.vercel.app/",
  },
  {
    title: "Frontend Design of E-commerce website",

    description: `This is a Frontend Design of E-commerce Website . `,

    tags: ["React", "Tailwind Css", "Responsive Design"],
    imageUrl: Ecommerce,
    projectUrl: "https://github.com/Arbab-Mustafa/E-commerce_Reactjs",
    demoUrl: "https://ecommercearbab.netlify.app/",
  },
];

export const skillsData: Skill[] = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Express.js", icon: FaNodeJs, color: "#000000" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Chakra UI", icon: SiChakraui, color: "#319795" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
  { name: "d3.js", icon: SiD3Dotjs, color: "#F9A03C" },
  { name: "UI/UX Design", icon: FaPencilRuler, color: "#61DAFB" }, // Placeholder icon with React's color
  { name: "Redux", icon: SiRedux, color: "#764ABC" },
  { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
];
