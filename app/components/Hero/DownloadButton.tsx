import React from "react";

type Props = {};

const DownloadButton = ({}: Props) => {
  return (
    <a
      href="/"
      className="bg-[#F6B17A] text-black px-5 py-2 rounded-md cursor-pointer"
      download="shoaib-resume.pdf"
    >
      Download My Resume
    </a>
  );
};

export default DownloadButton;
