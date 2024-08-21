import SectionTitle from "@components/SectionTitle";
import CategoryItem from "@pages/Home/components/CategoryItem";
import React from "react";
import { BsSmartwatch } from "react-icons/bs";
import { CiDesktop } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { GrGamepad } from "react-icons/gr";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoCameraOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";

const categories = [
  {
    icon: <IoIosPhonePortrait />,
    text: "Phones",
  },
  {
    icon: <CiDesktop />,
    text: "Computers",
  },
  {
    icon: <BsSmartwatch />,
    text: "SmartWatch",
  },
  {
    icon: <IoCameraOutline />,
    text: "Camera",
  },
  {
    icon: <PiHeadphones />,
    text: "Headphones",
  },
  {
    icon: <GrGamepad />,
    text: "Gaming",
  },
];

const Categories = () => {
  return (
    <>
      {/* Categories */}
      <section className="px-4 my-16">
        <div className="mx-auto max-w-6xl">
          <>
            <SectionTitle title="categories" />
            <div className="flex gap-4 justify-between items-center mb-14">
              <h3 className="text-xl md:text-3xl font-medium md:tracking-wide">
                Browse By Category
              </h3>
              <div className="flex gap-1">
                <span className="bg-secondary p-2 rounded-full">
                  <FaArrowLeft />
                </span>
                <span className="bg-secondary p-2 rounded-full">
                  <FaArrowRight />
                </span>
              </div>
            </div>
            <div className="flex gap-6 flex-wrap justify-center mb-14">
              {categories.map((category, index) => (
                <CategoryItem {...category} key={index} />
              ))}
            </div>
          </>
          <hr />
        </div>
      </section>
    </>
  );
};

export default Categories;
