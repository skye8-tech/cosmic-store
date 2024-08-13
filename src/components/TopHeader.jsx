import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
  return (
    <>
      <section className="bg-black text-sm py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl ml-auto flex justify-between items-center text-text">
            <div className="flex gap-1 items-center mr-2">
              <span>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </span>
              <a href="#" className="font-semibold underline">
                ShopNow
              </a>
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>English</span>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopHeader;
