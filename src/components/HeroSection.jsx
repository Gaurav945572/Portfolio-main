import React from 'react';
import '../css/HeroSection.css'; // Assuming you have the styles in a CSS file

const HeroSection = () => {
  return (
    <div className="hero-section container">
      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src="src\assets\Icons/dotted.png" alt="Dotted icon" width="35" height="25" />
        </div>
        <div className="absolute icons icon-cube">
          <img src="src\assets\Icons\cube.png" alt="Cube icon" width="35" height="25" />
        </div>
        <div className="absolute icons icon-circle">
          <img src="src\assets\Icons/blank.png" alt="Circle icon" width="35" height="25" />
        </div>
        <div className="absolute icons icon-zigzak">
          <img src="src\assets\Icons/cross-swords.png" alt="Zigzag icon" width="35" height="25" />
        </div>
        <div className="absolute icons icon-plus">
          <img src="src\assets\Icons/setup.png" alt="Plus icon" width="35" height="25" />
        </div>
        <div className="user-image">
          <img src="src\assets\Icons/my_image.png" alt="User" width="545" height="690" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
