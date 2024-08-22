import React from "react";
import { PiHeadsetBold } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { VscWorkspaceTrusted } from "react-icons/vsc";

const Qualities = () => {
  return (
    <>
      {/* Qualities */}
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-[943px] mx-auto flex justify-center flex-wrap gap-20 gap-y-16">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-text text-4xl p-4 rounded-full border-white/60 border-[0.725rem] w-fit bg-black">
                <TbTruckDelivery />
              </div>
              <div className="gap-2">
                <h4 className="text-xl font-medium">FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-text text-4xl p-4 rounded-full border-white/60 border-[0.725rem] w-fit bg-black">
                <PiHeadsetBold />
              </div>
              <div className="gap-2">
                <h4 className="text-xl font-medium">24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
              </div>
            </div>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="text-text text-4xl p-4 rounded-full border-white/60 border-[0.725rem] w-fit bg-black">
                <VscWorkspaceTrusted />
              </div>
              <div className="gap-2">
                <h4 className="text-xl font-medium">MONEY BACK GUARANTEE</h4>
                <p>We return money within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Qualities;
