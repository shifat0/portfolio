"use client";

import Typewriter from "typewriter-effect";

type Props = {};

const TypeEffect = (props: Props) => {
  return (
    <h1 className="text-5xl h-[6rem] text-wrap">
      <Typewriter
        options={{
          strings: [
            "Hi, I'm Md. Shoaib Akhter Shifat",
            "Love to explore and learn",
            "TryToSolveProblem ? Success : Failure",
          ],
          autoStart: true,
          loop: true,
          delay: 100,
          deleteSpeed: 40,
        }}
      />
    </h1>
  );
};

export default TypeEffect;
