"use client";

import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = ({}: Props) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1.5 }}
      id="about"
      className="container relative mx-auto lg:w-1/2 p-4 h-screen flex flex-col justify-center items-center text-center snap-center"
    >
      <motion.h1
        initial={{ letterSpacing: 0 }}
        whileInView={{ letterSpacing: "10px" }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        About Me
      </motion.h1>
      <p>
        I am Looking for a challenging “Software Developer” position at a
        reputed company where I can use my Development, Technical and Database
        skills to advance my knowledge and help the organization thrive.
        Excellent communication skills, teamwork mentality and experienced with
        Web Development projects and Machine Learning projects.
      </p>
    </motion.section>
  );
};

export default About;
