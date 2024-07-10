import React, { useRef } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { styles } from "../styles";
const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      " Web Developer",
      "Competitive Programmer",
      "Enthusiast Engineer",
      "Learner",
      "Coder",
      "Full Stack Developer",
      "Explorer",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <section className="w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} cursor-pointer   max-w-7xl mx-auto flex lg:flex-row flex-col-reverse  pl-25 md:pl-10  sm:justify-center items-start  md:gap-20 gap-5  pt-20`}
      >
        <div>
          <div className="flex gap-3 ">
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
              <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
            </div>
            <div className="lg:w-[32rem]">
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <br />
                <span className=" animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
                  Gaurav Singh
                </span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-lg`}>
                {text}
                <Cursor cursorColor="#915eff" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
