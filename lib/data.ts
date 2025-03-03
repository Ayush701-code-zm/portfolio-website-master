import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCode, FaLaptopCode, FaBriefcase } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/Screenshot (259).png";
import rmtdevImg from "@/public/Screenshot (281).png";
import wordanalyticsImg from "@/public/Screenshot (283).png";

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
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-End Developer",
    location: "Exyntra",
    description:
      "I worked as a front-end developer, focusing on building dynamic and responsive web applications using React.js and Tailwind CSS.",
    icon: React.createElement(FaLaptopCode),
    // date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Farmershop Tech India Pvt. Ltd",
    description:
      "I worked as a full-stack developer for 1.5 years, developing and maintaining web applications using React.js, Node.js, and MongoDB.",
    icon: React.createElement(FaCode),
    // date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Technerd Academy",
    description:
      "I worked as a freelancer. My stack includes React, Next.js, Tailwind, Prisma, and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaBriefcase),
    // date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Welth",
    description:
      "Welth is a project I built for financial updates, where users can add accounts, set budgets, and track updates in real time.",
    tags: ["React", "Next.js", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Admin Dashboard",
    description:
      "An Admin Dashboard built for managing data efficiently, featuring user management, analytics, filtering, sorting, and pagination.",
    tags: ["React", "JavaScript", "Tailwind"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Chat App",
    description:
      "A real-time chat application with instant messaging, user presence indicators, and seamless communication using Socket.io.",
    tags: ["React", "Next.js", "Socket.io", "Tailwind", "ShadCN"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",

  "Express",
  "PostgreSQL",

  "Framer Motion",
] as const;
