import React from "react";

import html from "../assets/images/html.png";
import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";
import reactImage from "../assets/images/react.png";
import github from "../assets/images/github.png";
import tailwind from "../assets/images/tailwind.png";
import postgres from "../assets/images/postgres.png";
import spring from "../assets/images/spring.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },

    {
      id: 6,
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 7,
      src: postgres,
      title: "Postgres",
      style: "shadow-sky-700",
    },
    {
      id: 8,
      src: spring,
      title: "Spring Boot",
      style: "shadow-green-700",
    },
  ];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-orange-600">Skills</span>
        </h3>
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div className="pb-8">
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
