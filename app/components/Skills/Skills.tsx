"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

const Skills = ({}: Props) => {
  return (
    <section
      id="skills"
      className="container relative mx-auto lg:w-1/2 h-screen flex flex-col items-center text-center snap-center"
    >
      <motion.h1
        initial={{ letterSpacing: 0 }}
        whileInView={{ letterSpacing: "10px" }}
        transition={{ duration: 1 }}
        className="section-title"
      >
        Skills
      </motion.h1>
      <ul className="absolute top-48 p-5 grid grid-cols-3 md:grid-cols-4 gap-5 items-center">
        <li>
          <Image
            src="/profile.jpg"
            alt="imageJS"
            height={300}
            width={300}
            loading="lazy"
            className="rounded-lg mb-4"
          />
          <span>Javascript</span>
        </li>
        <li>
          <Image
            src="/profile.jpg"
            alt="imageJS"
            height={300}
            width={300}
            loading="lazy"
            className="rounded-lg mb-4"
          />
          <span>Javascript</span>
        </li>
        <li>
          <Image
            src="/profile.jpg"
            alt="imageJS"
            height={300}
            width={300}
            loading="lazy"
            className="rounded-lg mb-4"
          />
          <span>Javascript</span>
        </li>
        <li>
          <Image
            src="/profile.jpg"
            alt="imageJS"
            height={300}
            width={300}
            loading="lazy"
            className="rounded-lg mb-4"
          />
          <span>Javascript</span>
        </li>
        <li>
          <Image
            src="/profile.jpg"
            alt="imageJS"
            height={300}
            width={300}
            loading="lazy"
            className="rounded-lg mb-4"
          />
          <span>Javascript</span>
        </li>
        <li>
          <Image
            src="/profile.jpg"
            alt="imageJS"
            height={300}
            width={300}
            loading="lazy"
            className="rounded-lg mb-4"
          />
          <span>Javascript</span>
        </li>
        
      </ul>
    </section>
  );
};

export default Skills;
