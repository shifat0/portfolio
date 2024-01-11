"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const Nav = ({}: Props) => {
  return (
    <nav className="container mx-auto sticky p-5 flex justify-between align-middle shadow-md z-20">
      <motion.span
        initial={{ x: -300, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
      >
        Shifat
      </motion.span>
      <motion.ul
        initial={{ x: 300, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex align-middle gap-8"
      >
        <Link href="#about">
          <li className="nav-btn">About</li>
        </Link>

        <Link href="#skills">
          <li className="nav-btn">Skills</li>
        </Link>

        <Link href="#projects">
          <li className="nav-btn">Projects</li>
        </Link>

        <Link href="#contact-me">
          {" "}
          <li className="nav-btn">Contact Me</li>
        </Link>
      </motion.ul>
    </nav>
  );
};
