"use client";

import React from "react";
import { skillsData, Skill } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="max-w-[53rem] scroll-mt-28 text-center mb-28"
    >
      <SectionHeading>{"My Skills"}</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-5 text-lg text-gray-800 dark:text-white">
        {skillsData.map((skill: Skill, index: number) => (
          <li
            key={index}
            className="relative w-[70px] h-[50px] sm:w-[80px] sm:h-[60px] md:w-[90px] md:h-[70px] flex items-center justify-center bg-white dark:bg-gray-800 rounded-xl shadow-md cursor-pointer"
          >
            {/* Skill Name */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-xs sm:text-base font-semibold z-10"
              initial={{ opacity: 1 }}
              whileHover={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {skill.name}
            </motion.div>

            {/* Skill Icon */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center text-4xl sm:text-6xl md:text-8xl z-20"
              style={{ color: skill.color }}
              initial={{ opacity: 0, scale: 0.8, rotate: 0, y: 0 }}
              whileHover={{
                opacity: 1,
                scale: 1.8,
                rotate: 360,
                y: -45, // Translate upward by 20px on hover
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {React.createElement(skill.icon)}
            </motion.div>
          </li>
        ))}
      </ul>
    </section>
  );
}
