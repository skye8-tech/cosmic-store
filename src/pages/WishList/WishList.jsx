import ProductCard from "@components/ProductCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";

const WishList = () => {
  return (
    <>
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto flex flex-col gap-20">
          <div className="flex flex-col gap-14">
            <div className="flex items-center justify-between">
              <h1 className="text-xl">Wishlist (4)</h1>
              <button className="py-4 px-8 bg-white border-black border rounded-md">
                Move All To Bag
              </button>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
          <div className="flex flex-col gap-14">
            <div className="flex justify-between items-center">
              <SectionTitle title="Just For You" />
              <button className="py-4 px-8 bg-white border-black border rounded-md">
                See All
              </button>
            </div>
            <div className="flex gap-6 flex-wrap justify-center">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WishList;
