import React from "react";
import hero from "../assets/images/hero.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img
          src={hero}
          alt=""
          className="md:w-11/12 h-full object-cover rounded-xl"
        />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-orange-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Khareen Francis Proverbs</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
            Fullstack Developer
          </h4>
          <a href={"#contact"}>
            <button className="btn-primary mt-8">Contact Me</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
