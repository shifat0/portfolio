"use client";

import Image from "next/image";
import Typewriter from "typewriter-effect";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="container mx-auto absolute top-0 h-screen flex justify-center items-center snap-center">
      <div className="relative flex justify-center items-center">
        <div className="fixed animate-pulse h-[500px] w-[500px] border border-[#F6B17A] rounded-full" />
        <div className="flex flex-col justify-center items-center gap-4">
          <Image
            src="/profile.jpg"
            width={150}
            height={150}
            className="rounded-full object-cover w-[150px] h-[150px]"
            alt="Profile-Image"
          />
          <span className="text-gray-500 uppercase tracking-[8px]">
            Full Stack Developer
          </span>
          <h1 className="text-3xl text-wrap">
            <Typewriter
              options={{
                strings: [
                  "Hi, I'm Md. Shoaib Akhter Shifat",
                  "Love to explore and learn",
                  "<TryToSolveProblem />",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
