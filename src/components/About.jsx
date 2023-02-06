import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is KATHY TRAN and I am currently working as a Technical Project Manager but
          also do several coding projects on the side. I completed my a full-stack coding 
          bootcamp from Kenzie Academy. I plan to always learning and improving myself. What 
          keeps me motivated and continue to explore the many different tech stacks is the 
          ability to try and learn something new. 
        </p>

        <br />

        <p className="text-xl">
          I love exploring new technologies and being a practitioner. I hvae two little ones
          that inspried me everyday and in return, I wished to introduce them into the world
          of technology. I like to stay on top of latest trends so with that being said, 
          I am also very data driven. 
        </p>
      </div>
    </div>
  );
};

export default About;
