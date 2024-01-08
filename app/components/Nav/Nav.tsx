"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type Props = {};

export const Nav = ({}: Props) => {
  return (
    <nav className="container mx-auto sticky py-5 flex justify-between align-middle border-b-2 border-[#F6B17A] z-20">
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
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#skills">Skills</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#contact-me">Contact Me</Link>
        </li>
      </motion.ul>
    </nav>
  );
};
