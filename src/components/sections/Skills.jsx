import React from "react";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";
import { skillsData } from "../../data/skillsData";

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Tech Stack" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard category="Frontend" skills={skillsData.frontend} />
          <SkillCard category="Backend" skills={skillsData.backend} />
          <SkillCard category="Tools & DevOps" skills={skillsData.tools} />
        </div>
      </div>
    </section>
  );
};

export default Skills;