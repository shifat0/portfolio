"use client";

import { motion } from "framer-motion";

type Props = {};

const Skills = ({}: Props) => {
  return (
    <section className="container relative mx-auto lg:w-1/2 p-4 h-screen flex flex-col justify-center items-center text-center snap-center">
      <motion.h1
        initial={{ letterSpacing: 0 }}
        whileInView={{ letterSpacing: "10px" }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Skills
      </motion.h1>
      <ul className="grid grid-cols-4 gap-10 items-center">
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
        <li>Javascript</li>
      </ul>
    </section>
  );
};

export default Skills;
