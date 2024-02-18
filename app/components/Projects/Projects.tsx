"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

const Projects = ({}: Props) => {
  const projects = [1, 2, 3, 4, 5];
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
        Projects
      </motion.h1>

      <div className="w-full relative mx-auto flex items-center overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {projects.map((project) => (
          <div className="w-screen h-screen flex-shrink-0 flex flex-col items-center justify-center gap-5 p-8 md:p-16 lg:p-32 snap-center">
            <motion.img
              initial={{ y: -300, opacity: 0.5 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
              src="https://plus.unsplash.com/premium_photo-1706625697112-d1c06844309d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDF8Ym84alFLVGFFMFl8fGVufDB8fHx8fA%3D%3D"
              alt="haha"
              className="h-48 w-56 object-fill"
            />
            <div className="flex flex-col items-center gap-5">
              <h3 className="text-2xl font-bold tracking-[4px] text-gray-400">
                Project Title
              </h3>
              <p className="text-justify text-gray-300 lg:w-1/2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                labore quis provident quos, sit autem minus dolorum sint quas
                iste quod, impedit reprehenderit nulla repellendus commodi
                dolores. Numquam, dolore porro?
              </p>
              <div className="flex items-center gap-5">
                <Link href={`#`} target="_blank" rel="noreferrer">
                  <button className="py-2 px-5 bg-gray-300 text-black rounded-lg">
                    Live Site
                  </button>
                </Link>
                <Link href={`#`} target="_blank" rel="noreferrer">
                  <button className="py-2 px-5 bg-[#2D3250] rounded-lg">
                    Source Code
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-[30%] bg-[#b2692d] h-[400px] w-full -skew-y-12" />
    </motion.section>
  );
};

export default Projects;
