import React from "react";

type Props = {};

const About = ({}: Props) => {
  return (
    <section
      id="about"
      className="container mx-auto lg:w-1/2 p-4 h-screen flex flex-col justify-center items-center gap-8 text-justify lg:text-center snap-center"
    >
      <h1 className="text-3xl text-[#F6B17A] underline underline-offset-4 tracking-widest">
        About Me
      </h1>
      <p>
        I am Looking for a challenging “Software Developer” position at a
        reputed company where I can use my Development, Technical and Database
        skills to advance my knowledge and help the organization thrive.
        Excellent communication skills, teamwork mentality and experienced with
        Web Development projects and Machine Learning projects.
      </p>
    </section>
  );
};

export default About;
