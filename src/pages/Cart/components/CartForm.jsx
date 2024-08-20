import React from 'react'
import lcd from "@assets/images/ldcmonitor.png";
import game from "@assets/images/game.png";
import Button from '@components/Button';


function CartForm() {
  return (
    <>
      <section className="max-w-6xl mx-auto    my-8 mb-16  px-4  ">
        <div className="flex flex-col gap-4">
          {/* row one  */}
          <div className="font-bold grid text-left py-3  border-b-2 grid-cols-4">
            <p>Product</p>
            <p>Price</p>
            <p> Quantity </p>
            <p>Subtotal</p>
          </div>
          {/* row two */}
          <div className="grid grid-cols-4 gap-4 text-left py-3  border-b-2 ">
            <div className="flex flex-row gap-4">
              <div className="relative">
                <img src={lcd} alt="lcd monitor" />
                <div className="absolute top-[-30%]">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="12" r="9" fill="#DB4444" />
                    <path
                      d="M9 15L12 12M15 9L11.9994 12M11.9994 12L9 9M12 12L15 15"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p>LCD Monitor </p>
            </div>
            <p>$600</p>
            <input
              type="number"
              placeholder="01"
              className="border w-12 lg:w-28 border-gray-500 rounded-lg px-3 "
            />
            <p>$650</p>
          </div>
          {/* row three */}
          <div className="grid grid-cols-4 gap-4 text-left py-3  border-b-2 ">
            <div className="flex flex-row gap-4">
              <div className="">
                <img src={game} alt="game " />
              </div>
              <p>H1 Gamepad </p>
            </div>
            <p>$650</p>
            <input
              type="number"
              placeholder="01"
              className="border  w-12 lg:w-28 border-gray-500 rounded-lg px-3 "
            />
            <p>$1100</p>
          </div>
          {/* row four  */}

          <div className="flex flex-row justify-between">
            <Button
              variant="secondary"
              text="Return to Shop"
              width="fit"
              href="/"
            ></Button>
            <Button
              variant="secondary"
              text="Update Cart"
              width="fit"
              funt=""
            ></Button>
          </div>

          <div className="flex flex-col lg:flex-row justify-between mt-6 md:mt-8 gap-6 md:gap-8">
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                placeholder="Coupon Code"
                className=" h-fit text-sm text-gray-700 border rounded-lg p-3 border-gray-400"
              />
              <Button
                variant="primary"
                text="Apply Coupon"
                width="fit"
                funt=""
              ></Button>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col p-6 border border-gray-800 rounded-lg ">
              <div>
                <p>Cart Total</p>
                <div className="flex flex-row justify-between py-3 border-b-2 border-gray-300">
                  <p>Subtotal</p>
                  <p>$1750</p>
                </div>
                <div className="flex flex-row justify-between py-3 border-b-2 border-gray-300">
                  <p>Shipping </p>
                  <p>Free</p>
                </div>
                <div className="flex flex-row justify-between py-3 ">
                  <p>Total</p>
                  <p>1750</p>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="primary"
                  text="Proceed to Checkout"
                  width="fit"
                  funt=""
                ></Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CartForm
