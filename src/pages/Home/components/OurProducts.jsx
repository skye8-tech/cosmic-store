import Button from "@components/Button";
import ProductCard from "@components/ProductCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const OurProducts = () => {
  return (
    <>
      {/* Our Products */}
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Our Products" />
          <div className="flex gap-4 justify-between items-center mb-14">
            <h3 className="text-xl md:text-3xl font-medium md:tracking-wide">
              Explore Our Products
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
          <div className="flex gap-6 flex-wrap gap-y-8 justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-center mt-14">
            <Button variant="primary" text="View all Products" />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProducts;
