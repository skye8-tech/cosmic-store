import React from "react";

const Categories1 = () => {
  return (
    <>
      {/* Categories */}
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto bg-black text-text p-4 sm:p-12 grid md:grid-cols-2 max-md:gap-16 max-md:justify-items-center items-center">
          <div className="flex flex-col gap-4 md:gap-6 max-md:items-center max-md:text-center">
            <h2 className="text-button1 font-semibold">Categories</h2>
            <h3 className="text-4xl md:text-5xl">
              Enhance Your <br /> Music Experience
            </h3>
            <div className="text-black flex gap-2 sm:gap-4">
              <div className="bg-text flex flex-col items-center justify-center h-14 w-14 sm:h-16 sm:w-16 gap-0 rounded-full">
                <span className="font-semibold leading-none">23</span>
                <span className="text-xs leading-none">Hours</span>
              </div>
              <div className="bg-text flex flex-col items-center justify-center h-14 w-14 sm:h-16 sm:w-16 gap-0 rounded-full">
                <span className="font-semibold leading-none">23</span>
                <span className="text-xs leading-none">Days</span>
              </div>
              <div className="bg-text flex flex-col items-center justify-center h-14 w-14 sm:h-16 sm:w-16 gap-0 rounded-full">
                <span className="font-semibold leading-none">23</span>
                <span className="text-xs leading-none">Minutes</span>
              </div>
              <div className="bg-text flex flex-col items-center justify-center h-14 w-14 sm:h-16 sm:w-16 gap-0 rounded-full">
                <span className="font-semibold leading-none">23</span>
                <span className="text-xs leading-none">Seconds</span>
              </div>
            </div>
            <button className="capitalize py-4 px-12 bg-button1 rounded-md w-fit">
              buy now
            </button>
          </div>
          <img
            src="/src/assets/images/JBL_BOOMBOX_2_HERO_020.png"
            alt=""
            className="justify-self-center"
          />
        </div>
      </section>
    </>
  );
};

export default Categories1;
