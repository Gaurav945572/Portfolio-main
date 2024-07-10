import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure you have Tailwind CSS installed and imported
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import {blank,cross_swords,cube,dotted,my_image,setup,} from "../assets"
const HeroSection = () => {
  return (
    
    <div className=" relative flex flex-row justify-center items-center gap-4 mx-auto my-auto  py-0 px-auto  ">
      <div className="relative">
        <div className="absolute z-10 bottom-0 right-0 animate-dotsAnimation">
          <img src={dotted} alt="Dotted icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 top-[-0.8em] right-4 animate-cubeRotate">
          <img src={cube} alt="Cube icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 bottom-0 left-0 animate-shakeEffect">
          <img src={blank} alt="Circle icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 top-6 left-[-0.75em] animate-zigzakAnimation">
          <img src={cross_swords} alt="Zigzag icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 top-[-0.8rem] left-1/2 animate-shakeEffectPlus">
          <img src={setup} alt="Plus icon" width="35" height="25" />
        </div>
        <div className="p-10 grayscale transition-all duration-1000 animate-scaleImage">
          <img src={my_image} alt="User" width="545" height="690" className="object-cover z-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
