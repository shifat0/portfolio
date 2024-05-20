"use client";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      id="projects"
      className="relative mx-auto h-screen overflow-hidden flex flex-col justify-evenly items-center text-center snap-center"
    >
      <motion.h1
        initial={{ letterSpacing: 0 }}
        whileInView={{ letterSpacing: "10px" }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Experience
      </motion.h1>
      <div className="mt-14 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </motion.section>
  );
}
