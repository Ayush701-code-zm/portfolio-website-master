"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mt-6">
        I am a Full Stack Developer with a comprehensive skill set in both
        front-end and back-end technologies, enabling me to build robust,
        scalable, and high-performance web applications. With expertise in{" "}
        <span className="font-medium">React.js</span>,{" "}
        <span className="font-medium">Material-UI</span>, and{" "}
        <span className="font-medium">Formik</span> for creating dynamic and
        user-friendly interfaces, along with{" "}
        <span className="font-medium">Node.js</span>,{" "}
        <span className="font-medium">Express.js</span>, and{" "}
        <span className="font-medium">MongoDB</span> for back-end development, I
        am well-equipped to handle all aspects of web development.
      </p>

      <p>
        I have a strong understanding of{" "}
        <span className="font-medium">state management</span> with{" "}
        <span className="font-medium">Redux</span> and{" "}
        <span className="font-medium">Context API</span>, secure authentication
        using <span className="font-medium">JWT</span> and{" "}
        <span className="font-medium">OAuth</span>, and efficient{" "}
        <span className="font-medium">API integration</span>. My development
        approach emphasizes performance optimization, clean and maintainable
        code, and responsive design across all devices.
      </p>

      {/* <p>
        I am experienced in implementing testing frameworks such as{" "}
        <span className="font-medium">Jest</span> and{" "}
        <span className="font-medium">React Testing Library</span> to ensure
        robust applications. Whether it's creating complex user interfaces,
        building scalable back-end systems, integrating APIs, or optimizing
        performance, I am capable of handling any challenge and delivering
        end-to-end solutions that meet both technical and user experience
        requirements.
      </p> */}
    </motion.section>
  );
}
