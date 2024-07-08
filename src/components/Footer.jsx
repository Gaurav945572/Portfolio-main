import React from "react";

import { logo } from "../assets";
import { styles } from "../styles";
import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (

    <div className="  flex justify-evenly align-center relative  sm:px-16 px-6 sm:py-12 py-10 min-h-[250px] mt-20 select-none">

      <div className="flex  flex-col items-center">

        <img src={logo} alt="logo" className="w-36  mb-5" />

        <p className="text-secondary text-[17px] leading-[30px] text-center   left-0 right-0 cle">
          {new Date().getFullYear()} &copy; Gaurav. All rights reserved.
        </p>

      </div>
      <div className="text-[20px] md:text-[35px] flex justify-center gap-5  items-center md:mt-10 mt-5 md:gap-12 sm:mb-20  ">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/gaurav-singh-862211231/"
            >
              {" "}
              <BsLinkedin className=" text-white mr-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mr-0 -md:my-[1px]" />
            </Link>

            <Link target="_blank" to="https://github.com/Gaurav945572">
              <BsGithub className="mx-2 hover:translate-y-[-2px] hover:cursor-pointer transition-all ease-in duration-100 -md:mx-0 -md:my-[1px]" />
            </Link>
          </div>


      <div>
        <a
          href="#about"
          className="w-fit abhishek mx-auto flex items-center justify-center gap-6 bg-tertiary lg:px-7 lg:py-3 px-4 py-2 rounded-xl lg:mt-10 mt-5 cursor-pointer max-[350px]:hidden select-none"
        >
          <div className="group border-[3px] border-white rounded-full h-12 w-7 flex justify-center lg:scale-100 scale-75">
            <div className="bg-white h-3 w-1 rounded-full mt-[10px] animate-bounce lg:scale-100 scale-75"></div>
          </div>

          
        </a>

      </div>

    </div>
  );
};

export default Footer;
