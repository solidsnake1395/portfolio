import React from "react";
import SkillItem from "./SkillItem";

const SkillCard = ({ category, skills }) => {
  return (
    <div className="bg-black/70 border border-green-500 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-green-400">
      <h3 className="text-lg font-semibold mb-4 text-green-300 font-press-start text-center">
        {category}
      </h3>
      <div className="space-y-3">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

export default SkillCard;