import Button from "@components/Button";
import ProductCard from "@components/ProductCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const FlashSales = () => {
  return (
    <>
      {/* Flash Sales section */}
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Today's" />
          <div className="flex justify-between items-center gap-4 mb-14">
            <div className="max-w-2xl flex justify-between items-end flex-1 flex-wrap gap-2">
              <h3 className="text-xl md:text-3xl font-medium tracking-wide whitespace-nowrap">
                Flash Sales
              </h3>
              <div className="flex gap-1 items-end">
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm">Days</span>
                  <span className="text-xl md:text-3xl tracking-wide font-semibold">
                    03
                  </span>
                </div>
                <span className="text-secondary2 text-2xl font-semibold mb-1">
                  :
                </span>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm">Hours</span>
                  <span className="text-xl md:text-3xl tracking-wide font-semibold">
                    23
                  </span>
                </div>
                <span className="text-secondary2 text-2xl font-semibold mb-1">
                  :
                </span>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm">Minutes</span>
                  <span className="text-xl md:text-3xl tracking-wide font-semibold">
                    23
                  </span>
                </div>
                <span className="text-secondary2 text-2xl font-semibold mb-1">
                  :
                </span>
                <div className="flex flex-col">
                  <span className="text-xs md:text-sm">Seconds</span>
                  <span className="text-xl md:text-3xl tracking-wide font-semibold">
                    67
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-1">
              <span className="bg-secondary p-2 rounded-full">
                <FaArrowLeft />
              </span>
              <span className="bg-secondary p-2 rounded-full">
                <FaArrowRight />
              </span>
            </div>
          </div>
          <div className="overflow-x-auto flex gap-7 pb-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <div className="flex justify-center my-12">
            <Button variant="primary" text="View All Products" />
          </div>
          <hr />
        </div>
      </section>
    </>
  );
};

export default FlashSales;
