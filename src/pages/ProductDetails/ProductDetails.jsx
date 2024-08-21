import Button from "@components/Button";
import ProductCard from "@components/ProductCard";
import SectionTitle from "@components/SectionTitle";
import React from "react";

const ProductDetails = () => {
  return (
    <>
      <section className="px-4 my-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-xs sm:text-sm">
            <span className="opacity-50">Account / Gaming / </span>Havic HV G-92
            Gamepad
          </div>
          <div className="my-7 sm:my-14 flex gap-8 max-md:flex-col">
            <div className="md:min-h-[600px] flex max-lg:flex-col gap-2 sm:gap-4 md:min-w-96">
              <div className="flex flex-wrap max-lg:flex-row max-lg:order-1 flex-col md:justify-between gap-2">
                <div className="bg-secondary rounded-md flex items-center justify-center w-[170px] p-4 flex-1">
                  <img src="/src/assets/images/image 57.png" alt="" />
                </div>
                <div className="bg-secondary rounded-md flex items-center justify-center w-[170px] p-4 flex-1">
                  <img src="/src/assets/images/image 58.png" alt="" />
                </div>
                <div className="bg-secondary rounded-md flex items-center justify-center w-[170px] p-4 flex-1">
                  <img src="/src/assets/images/image 59.png" alt="" />
                </div>
                <div className="bg-secondary rounded-md flex items-center justify-center w-[170px] p-4 flex-1">
                  <img src="/src/assets/images/image 61.png" alt="" />
                </div>
              </div>
              <div className="bg-secondary rounded-md flex items-center justify-center p-8 flex-1 ">
                <img src="/src/assets/images/image 63.png" alt="" />
              </div>
            </div>
            <div className="flex flex-col justify-between gap-2 flex-1">
              <h2 className="text-2xl font-semibold">Havic HV G-92 Gamepad</h2>
              <div className="flex gap-2">
                <div>⭐⭐⭐⭐⭐</div>
                <div className="opacity-50">(150 Reviews)</div>
                <div className=" text-button1 pl-2 border-l">In Stock</div>
              </div>
              <div className="text-2xl">$192.00</div>
              <p className="text-sm border-b border-black/50 w-fit pb-4">
                PlayStation 5 Controller Skin High quality vinyl with air
                channel adhesive for easy bubble free install & mess free
                removal Pressure sensitive.
              </p>
              <div className="flex items-center gap-4">
                Colours:
                <div className="flex gap-2">
                  <div className="w-5 h-5 bg-[#A0BCE0] rounded-full outline -outline-offset-2 border-4 border-white"></div>
                  <div className="w-5 h-5 bg-secondary2 rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                Size:
                <div className="flex gap-2">
                  <button className="border-black/50 rounded-md w-8 h-8 flex items-center justify-center border">
                    XS
                  </button>
                  <button className="border-black/50 rounded-md w-8 h-8 flex items-center justify-center border">
                    S
                  </button>
                  <button className="border-secondary2 text-text rounded-md w-8 h-8 flex items-center justify-center border bg-secondary2">
                    M
                  </button>
                  <button className="border-black/50 rounded-md w-8 h-8 flex items-center justify-center border">
                    L
                  </button>
                  <button className="border-black/50 rounded-md w-8 h-8 flex items-center justify-center border">
                    XL
                  </button>
                </div>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="text-xl h-11 w-fit flex">
                  <button className="text-3xl w-10 flex items-center justify-center border border-black/50 border-r-0 rounded-l-md">
                    <svg
                      width="18"
                      height="2"
                      viewBox="0 0 18 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1H1"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                  <input
                    type="text"
                    className="w-20 border outline-none border-black/50 border-r-0 text-center"
                    value={3}
                  />
                  <button className="text-3xl w-10 bg-secondary2 border border-secondary2 rounded-r-md border-l-0 flex items-center justify-center">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 17V9M9 9V1M9 9H17M9 9H1"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      />
                    </svg>
                  </button>
                </div>
                <Button variant="primary" text="Buy Now" />
                <button className="border-black/50 rounded-md px-2 h-11 flex items-center justify-center border">
                  <svg
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z"
                      stroke="black"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="border border-black/50 rounded-md w-fit">
                <div className="flex gap-4 items-center border-b border-black/50 p-5">
                  <div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_261_4843)">
                        <path
                          d="M11.6673 31.6667C13.5083 31.6667 15.0007 30.1743 15.0007 28.3333C15.0007 26.4924 13.5083 25 11.6673 25C9.82637 25 8.33398 26.4924 8.33398 28.3333C8.33398 30.1743 9.82637 31.6667 11.6673 31.6667Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.33398 28.3335H7.00065C5.89608 28.3335 5.00065 27.4381 5.00065 26.3335V21.6668M3.33398 8.3335H19.6673C20.7719 8.3335 21.6673 9.22893 21.6673 10.3335V28.3335M15.0007 28.3335H25.0007M31.6673 28.3335H33.0007C34.1052 28.3335 35.0007 27.4381 35.0007 26.3335V18.3335M35.0007 18.3335H21.6673M35.0007 18.3335L30.5833 10.9712C30.2218 10.3688 29.5708 10.0002 28.8683 10.0002H21.6673"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 11.8182H11.6667"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.81836 15.4545H8.48503"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M5 19.0909H11.6667"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_261_4843">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="font-semibold">Free Delivery</h3>
                    <p className="underline font-medium">
                      Enter your postal code for Delivery Availability
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center p-5">
                  <div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_261_4865)">
                        <path
                          d="M33.3327 18.3334C32.9251 15.4004 31.5645 12.6828 29.4604 10.5992C27.3564 8.51557 24.6256 7.18155 21.6888 6.80261C18.752 6.42366 15.7721 7.02082 13.208 8.5021C10.644 9.98337 8.6381 12.2666 7.49935 15M6.66602 8.33335V15H13.3327"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.66602 21.6667C7.07361 24.5997 8.43423 27.3173 10.5383 29.4009C12.6423 31.4845 15.3731 32.8185 18.3099 33.1974C21.2467 33.5764 24.2266 32.9792 26.7907 31.4979C29.3547 30.0167 31.3606 27.7335 32.4994 25M33.3327 31.6667V25H26.666"
                          stroke="black"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_261_4865">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div className="flex flex-col justify-between">
                    <h3 className="font-semibold">Return Delivery</h3>
                    <p className="font-medium">
                      Free 30 Days Delivery Returns. Details
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <SectionTitle title="Related Item" />
            <div className="flex flex-wrap gap-6">
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

export default ProductDetails;
