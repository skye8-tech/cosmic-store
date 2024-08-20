import React from "react";

const CategoryItem = ({ icon, text, selected }) => {
  return (
    <div
      className={`flex flex-col gap-2 min-w-[170px] border rounded-md p-8 justify-center items-center cursor-pointer ${
        selected
          ? "bg-secondary2 border-none text-text"
          : "hover:bg-black/5 border-black/25"
      }`}
    >
      <div className="text-5xl">{icon}</div>
      <h4>{text}</h4>
    </div>
  );
};

export default CategoryItem;
