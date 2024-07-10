import React from 'react';
import 'tailwindcss/tailwind.css'; // Ensure you have Tailwind CSS installed and imported

const HeroSection = () => {
  return (
    <div className="relative flex justify-center items-center gap-4 mx-auto my-16 py-0 px-4 pb-32 mb-[-25px]">
      <div className="relative">
        <div className="absolute z-10 bottom-0 right-0 animate-dotsAnimation">
          <img src="src/assets/Icons/dotted.png" alt="Dotted icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 top-[-0.8em] right-4 animate-cubeRotate">
          <img src="src/assets/Icons/cube.png" alt="Cube icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 bottom-0 left-0 animate-shakeEffect">
          <img src="src/assets/Icons/blank.png" alt="Circle icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 top-6 left-[-0.75em] animate-zigzakAnimation">
          <img src="src/assets/Icons/cross-swords.png" alt="Zigzag icon" width="35" height="25" />
        </div>
        <div className="absolute z-10 top-[-0.8rem] left-1/2 animate-shakeEffectPlus">
          <img src="src/assets/Icons/setup.png" alt="Plus icon" width="35" height="25" />
        </div>
        <div className="p-10 grayscale transition-all duration-1000 animate-scaleImage">
          <img src="src/assets/Icons/my_image.png" alt="User" width="545" height="690" className="object-cover z-[-1]" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
