import React from "react";

const About = ({ heading, content, bgColor, borderColor }) => {
  return (
    <div
      className={`${bgColor} shadow-md border-[1px] rounded-sm aboutItem p-4 flex flex-col items-center justify-center ${borderColor} cursor-pointer hover:translate-y-1 ease-linear duration-150`}
    >
      <div className="text-2xl font-bold md:text-3xl aboutItemHeading">
        {heading}
      </div>
      <div className="text-[15px] italic aboutItemContent">{content}</div>
    </div>
  );
};

export default About;
