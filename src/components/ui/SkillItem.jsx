import React from "react";
import {
  SiBootstrap, SiReact, SiJavascript, SiTypescript, SiHtml5, SiCss3, 
  SiTailwindcss, SiNodedotjs, SiPython, SiExpress, SiMongodb, 
  SiPostgresql, SiGraphql, SiGit, SiDocker, SiFigma, SiWebpack, 
  SiOpenjdk, SiPhp, SiSymfony, SiMysql, SiSpringboot, SiDigitalocean, 
  SiPhpstorm
} from "react-icons/si";
import { GiHighGrass } from "react-icons/gi";
import SkillBar from "./SkillBar";

const SkillItem = ({ skill }) => {
  const iconComponents = {
    SiBootstrap,
    SiReact,
    SiJavascript,
    SiTypescript,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiNodedotjs,
    SiPython,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiGraphql,
    SiGit,
    SiDocker,
    SiFigma,
    SiWebpack,
    GiHighGrass,
    SiOpenjdk,
    SiPhp,
    SiSymfony,
    SiMysql,
    SiSpringboot,
    SiDigitalocean,
    SiPhpstorm,
  };

  const IconComponent = iconComponents[skill.icon];

  return (
    <div className="flex items-center justify-between p-3 bg-black/50 rounded-lg border border-green-500/30 hover:border-green-500/60 transition-all duration-300 group">
      <div className="flex items-center space-x-3">
        {IconComponent ? (
          <IconComponent 
            size={24} 
            style={{ color: skill.color || "#10B981" }} 
            className="group-hover:scale-110 transition-transform duration-300" 
          />
        ) : (
          <div className="w-6 h-6 bg-green-500 rounded-sm"></div>
        )}
        <span className="font-bitcount text-green-200 group-hover:text-green-100 transition-colors">
          {skill.name}
        </span>
      </div>
      <SkillBar level={skill.level} />
    </div>
  );
};

export default SkillItem;