import SectionTitle from "@components/SectionTitle";
import React from "react";

const Featured = () => {
  return (
    <>
      {/* Featured */}
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto flex-col flex gap-14">
          <div>
            <SectionTitle title="featured" />
            <h3 className="text-xl md:text-3xl font-medium tracking-wide">
              New Arrival
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 text-text">
            <div className="row-start-1 row-span-2 col-span-2 bg-black relative h-[500px] sm:h-[600px] flex items-end p-8">
              <img
                src="/src/assets/images/ps5-slim.png"
                alt=""
                className="absolute bottom-0 left-1/2 -translate-x-1/2"
              />
              <div className="z-10 flex flex-col gap-4">
                <h4 className="text-2xl">PlayStation 5</h4>
                <p className="text-sm">
                  Black and White version of the PS5 <br /> coming out on sale.
                </p>
                <a href="#" className="border-b w-fit">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="col-span-2 bg-[#0d0d0d] relative p-8 flex items-end h-[284px]">
              <img
                src="/src/assets/images/attractive-woman-wearing-hat-posing-black-background.png"
                alt=""
                className="absolute bottom-0 right-0"
              />
              <div className="z-10 flex flex-col gap-4">
                <h4 className="text-2xl">Women’s Collections</h4>
                <p className="text-sm">
                  Featured woman collections that
                  <br /> give you another vibe.
                </p>
                <a href="#" className="border-b w-fit">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="bg-black relative p-8 flex items-end h-[284px] max-md:col-span-2">
              <img
                src="/src/assets/images/amazon-echo-png-clipart-transparent-amazon-echo-png.png"
                alt=""
                className="absolute right-1/2 translate-x-1/2 bottom-5"
              />
              <div className="z-10 flex flex-col gap-2">
                <h4 className="text-2xl">Speakers</h4>
                <p className="text-sm">Amazon wireless speakers</p>
                <a href="#" className="border-b w-fit">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="bg-black relative p-8 flex items-end h-[284px] max-md:col-span-2">
              <img
                src="/src/assets/images/652e82cd70aa6522dd785109a455904c.png"
                alt=""
                className="absolute right-1/2 translate-x-1/2 bottom-5"
              />
              <div className="z-10 flex flex-col gap-2">
                <h4 className="text-2xl">Perfume</h4>
                <p className="text-sm">GUCCI INTENSE OUD EDP</p>
                <a href="#" className="border-b w-fit">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
