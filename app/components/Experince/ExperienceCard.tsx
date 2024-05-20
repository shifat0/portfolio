"use client";

import { motion } from "framer-motion";

export default function ExperienceCard() {
  return (
    <article className="flex flex-col rounded-lg items-center space=y=7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-1/2 snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 transition-opacity">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="/profile.jpg"
        alt="profile"
      />

      <div>
        <h4 className="text-2xl">DeshIT-BD</h4>
        <p className="text-md">Software Engineer Intern</p>
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full"
            src="/profile.jpg"
            alt="profile"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/profile.jpg"
            alt="profile"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/profile.jpg"
            alt="profile"
          />
        </div>
        <p className=" italic">Started: March-2024 - End: May-2024 </p>

        <ul className="text-sm text-left list-disc pl-4">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}
