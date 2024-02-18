"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

type Props = {};

export const Nav = ({}: Props) => {
  const [showNav, setShowNav] = useState(false);

  const toogleNav = () => setShowNav(!showNav);

  return (
    <nav className="w-full mx-auto sticky top-0 p-5 flex justify-between items-center bg-[#2D3250] shadow-md z-[9999]">
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
      <motion.div
        initial={{ x: 300, opacity: 0, scale: 0.5 }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1.5 }}
        className="flex items-center gap-8"
      >
        <FontAwesomeIcon
          icon={faBars}
          className="lg:hidden cursor-pointer"
          onClick={() => toogleNav()}
        />

        {/* Nav for small screens */}
        <div
          className={`absolute top-0 right-0 ${
            showNav
              ? "translate-x-0 opacity-full"
              : " translate-x-full opacity-0"
          } h-screen w-40 p-4 flex flex-col gap-8 bg-white transition duration-500 ease-in-out`}
        >
          <button
            className="mx-auto w-10 h-10 rounded-full bg-red-800  hover:scale-90 transition-transform"
            onClick={() => toogleNav()}
          >
            <FontAwesomeIcon icon={faX} className="text-white cursor-pointer" />
          </button>
          <Link href="#about">
            <button className="nav-btn w-full">About</button>
          </Link>

          <Link href="#skills">
            <button className="nav-btn w-full">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="nav-btn w-full">Projects</button>
          </Link>

          <Link href="#contact-me">
            <button className="nav-btn w-full">Contact Me</button>
          </Link>
        </div>

        {/* Nav for large screens */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="#about">
            <button className="nav-btn">About</button>
          </Link>

          <Link href="#skills">
            <button className="nav-btn">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="nav-btn">Projects</button>
          </Link>

          <Link href="#contact-me">
            <button className="nav-btn">Contact Me</button>
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};
