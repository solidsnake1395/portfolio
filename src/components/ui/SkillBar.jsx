import React from "react";

const SkillBar = ({ level, maxLevel = 5 }) => {
  return (
    <div className="flex space-x-1">
      {[...Array(maxLevel)].map((_, index) => (
        <div 
          key={index} 
          className={`w-3 h-3 rounded-sm border border-green-500 ${
            index < level ? "bg-green-500 shadow-sm shadow-green-500/50" : "bg-transparent"
          } transition-all duration-300`} 
        />
      ))}
    </div>
  );
};

export default SkillBar;