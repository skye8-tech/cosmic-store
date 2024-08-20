import Button from "@components/Button";
import ProductCard from "@components/ProductCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";

const BestSellingProducts = () => {
  return (
    <>
      {/* Best Selling Products */}
      <section className="px-4 my-16">
        <div className="mx-auto max-w-6xl">
          <SectionTitle title="This month" />
          <div className="flex justify-between items-center gap-8 mb-14">
            <h3 className="text-xl md:text-3xl font-medium tracking-wide">
              Best Selling Products
            </h3>
            <Button variant="primary" text="View All" />
          </div>
          <div className="flex gap-7 overflow-x-auto pb-4">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default BestSellingProducts;
