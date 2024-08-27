import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="flex items-center gap-4 mb-5">
      <div className="bg-secondary2 w-5 h-10 rounded-sm"></div>
      <h2 className="text-secondary2 font-semibold capitalize">{title}</h2>
    </div>
  );
};

export default SectionTitle;
