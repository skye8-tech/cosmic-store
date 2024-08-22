import React from "react";
import { IoIosHeartEmpty } from "react-icons/io";

const ProductCard = () => {
  return (
    <div className="min-w-[270px] max-md:flex-1 gap-4 flex flex-col font-semibold">
      <div className="rounded-md overflow-hidden relative">
        <div className="w-full h-[250px] bg-secondary flex items-center justify-center">
          <div>
            <img src="/src/assets/images/ps-controller.png" alt="" />
          </div>
          <div className="absolute right-2 top-2 text-xl flex flex-col gap-2">
            <div className="bg-white p-1.5 rounded-full">
              <IoIosHeartEmpty />
            </div>
            <div className="bg-white p-1.5 rounded-full">
              <IoIosHeartEmpty />
            </div>
          </div>
          <div className="absolute left-2 top-2 text-xs flex flex-col gap-2">
            <div className="bg-button1 text-text py-2 px-3 rounded-md">NEW</div>
            <div className="bg-secondary2 py-2 px-3 rounded-md text-text">
              -35%
            </div>
          </div>
        </div>
        <button className="bg-black w-full p-2 text-text text-center absolute bottom-0 font-normal">
          Add To Cart
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h3>HAVIT HV-G92 Gamepad</h3>
        <div className="flex gap-3">
          <span className="text-secondary2">$120</span>
          <span className="line-through opacity-50">$120</span>
        </div>
        <div className="flex gap-2">
          <span>⭐⭐⭐⭐⭐</span>
          <span className="opacity-50">(88)</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
