import React from "react";
import { FaApple, FaArrowRight } from "react-icons/fa";
import { TfiAngleRight } from "react-icons/tfi";
import heroImg from "@assets/images/hero_endframe__cvklg0xk3w6e_large_2.png";

const HeroSection = () => {
  return (
    <>
      {/* Carousel section */}
      <section className="px-4 mb-16">
        <div className="flex max-w-6xl mx-auto flex-wrap md:flex-nowrap">
          {/* Desktop */}
          <div className="hidden pt-8 md:flex flex-col max-lg:gap-2 justify-between border-r-2 pr-5 whitespace-nowrap order-1 md:-order-1">
            <div className="flex gap-10 items-center">
              <span>Woman’s Fashion</span>
              <span>
                <TfiAngleRight />
              </span>
            </div>
            <div className="flex justify-between">
              <span>Men’s Fashion</span>
              <span>
                <TfiAngleRight />
              </span>
            </div>
            <div>Electronics</div>
            <div>Home & Lifestyle</div>
            <div>Medicine</div>
            <div>Sports & Outdoor</div>
            <div>Baby’s & Toys</div>
            <div>Groceries & Pets</div>
            <div>Health & Beauty</div>
          </div>
          {/* Mobile */}
          <select className="md:hidden mt-4 order-1 md:-order-1 outline-none">
            <option disabled selected>
              Categories
            </option>
            <option>
              <span>Woman’s Fashion</span>
            </option>
            <option>
              <span>Men’s Fashion</span>
            </option>
            <option>Electronics</option>
            <option>Home & Lifestyle</option>
            <option>Medicine</option>
            <option>Sports & Outdoor</option>
            <option>Baby’s & Toys</option>
            <option>Groceries & Pets</option>
            <option>Health & Beauty</option>
          </select>
          <div className=" pt-4 md:pt-8 md:pl-8 font-light flex-1 max-md:min-w-full">
            <div className=" max-md:gap-y-6 flex bg-black text-text items-center justify-center md:justify-between p-8 lg:pl-16 flex-wrap md:flex-nowrap overflow-hidden">
              <div className="text-center md:text-left flex flex-col gap-4 items-center md:items-start">
                <div className="flex items-center gap-4">
                  <span className="text-4xl lg:text-5xl">
                    <FaApple />
                  </span>
                  <span className="whitespace-nowrap">iPhone 14 Series</span>
                </div>
                <div className="text-3xl lg:text-5xl font-semibold">
                  Up to 10% off Voucher
                </div>
                <button className="flex gap-2 items-center">
                  <span className="border-b p-1">Shop Now</span>
                  <span>
                    <FaArrowRight />
                  </span>
                </button>
              </div>
              <img
                src={heroImg}
                alt="hero image"
                className="md:max-lg:w-[69%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
