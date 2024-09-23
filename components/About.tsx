"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function About() {
  const { ref } = useSectionInView("About");
  const t = useTranslations("AboutSection");
  const sectionLan = useTranslations("SectionName");
  const activeLocale = useLocale();

  return (
    <motion.section
      ref={ref}
      className="mb-50 max-w-[45rem] text-start leading-8 sm:mb-40 scroll-mt-28 mb-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{sectionLan("about")}</SectionHeading>
      <>
        <p className="mb-3">
          My passion for technology was ignited when I embarked on my journey in{" "}
          <span className="font-medium italic">Software Engineering</span> at{" "}
          <span className="italic underline">
            <Link href="https://www.uettaxila.edu.pk/" target="_blank">
              University of Engineering and Technology Taxila, Pakistan
            </Link>
          </span>
          . From the outset, I was captivated by the power of code to transform
          ideas into reality. My academic experience has provided me with a
          solid foundation in software principles, while also allowing me to
          dive into the latest advancements in web development.
        </p>

        <p className="mb-3">
          Over the past 2 years, I have sharpened my skills as a MERN stack
          developer, mastering tools like React.js, Next.js, and TypeScript to
          craft dynamic, user-centric applications. My internships have offered
          invaluable opportunities to collaborate with cross-functional teams,
          where I have played a key role in designing and implementing
          cutting-edge web solutions. Each project has reinforced my belief that
          the digital world is a canvas, and code is the brush with which we
          paint innovation.
        </p>

        <p>
          Outside of the classroom and professional setting, I am an avid
          learner and tech enthusiast. I continuously explore emerging
          technologies, creating projects that push the boundaries of
          what&apos;s possible. I also share my journey and insights on
          platforms like LinkedIn, connecting with a global community of
          professionals who are equally passionate about shaping the future of
          technology.
        </p>
      </>
    </motion.section>
  );
}
