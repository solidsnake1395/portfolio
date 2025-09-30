import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-green-400 mb-4 font-press-start">
        {title}
      </h2>
      <div className="w-24 h-1 bg-green-500 mx-auto"></div>
    </div>
  );
};

export default SectionTitle;