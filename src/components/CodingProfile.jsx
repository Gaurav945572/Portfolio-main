import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { leetcode,codeforces, codechef } from "../assets";

const ServiceCard = ({ index, title, icon, url }) => (
  <div className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        onClick={() => window.open(url, "_blank")}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-pointer'
      >
        <img
          src={icon}
          alt={title}
          className='w-32 h-32 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const CodingProfile = () => {
  const platforms = [
    { name: "Codeforces", url: "https://codeforces.com/profile/Ninja_GS", icon: codeforces },
    { name: "LeetCode", url: "https://leetcode.com/u/Gaurav_Singh9455/", icon: leetcode },
    { name: "CodeChef", url: "https://www.codechef.com/users/coding_bug_831", icon:codechef}
  ];

  return (<>
    <motion.div variants={textVariant()}>
         <h2 className="text-3xl pl-10 mt-5 font-bold">Coding Profile</h2>
    </motion.div>
    <div className='mt-10 flex flex-wrap gap-10 justify-center'>
      {platforms.map((platform, index) => (
        <ServiceCard
          key={platform.name}
          index={index}
          title={platform.name}
          icon={platform.icon}
          url={platform.url}
        />
      ))}
    </div></>
  );
}

export default CodingProfile;
