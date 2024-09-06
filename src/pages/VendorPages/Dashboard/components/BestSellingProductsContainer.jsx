import BestSellingProduct from "@pages/VendorPages/Dashboard/components/BestSellingProduct";
import React from "react";

const BestSellingProductsContainer = () => {
  return (
    <div className="col-start-1 lg:col-span-2 border shadow-md rounded-sm h-fit">
      <div className="w-full p-6 pb-0 flex gap-4 justify-between items-center">
        <h3 className="font-semibold">Best Selling Products</h3>
        <span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="10.9999"
              cy="11.0002"
              r="0.916667"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle
              cx="10.9999"
              cy="17.4167"
              r="0.916667"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <ellipse
              cx="10.9999"
              cy="4.58317"
              rx="0.916667"
              ry="0.916667"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="py-6 overflow-x-auto">
        <table className="w-full bg-white">
          <thead className="bg-[#F8F9FA]">
            <tr>
              <th className="text-left py-5 px-5 text-xs font-semibold whitespace-nowrap">
                Product
              </th>
              <th className="text-left py-5 px-5 text-xs font-semibold whitespace-nowrap">
                Total Order
              </th>
              <th className="text-left py-5 px-5 text-xs font-semibold whitespace-nowrap">
                Status
              </th>
              <th className="text-left py-5 px-5 text-xs font-semibold whitespace-nowrap">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            <BestSellingProduct
              productImage="src/assets/images/game.png"
              productName="Apple iphone 13"
              productTotalOrder={506}
              productAvailable={true}
              productPrice="$999.29"
            />
            <BestSellingProduct
              productImage="src/assets/images/game.png"
              productName="Apple iphone 13"
              productTotalOrder={506}
              productAvailable={true}
              productPrice="$999.29"
            />
            <BestSellingProduct
              productImage="src/assets/images/game.png"
              productName="Apple iphone 13"
              productTotalOrder={506}
              productAvailable={true}
              productPrice="$999.29"
            />
            <BestSellingProduct
              productImage="src/assets/images/game.png"
              productName="Apple iphone 13"
              productTotalOrder={506}
              productAvailable={false}
              productPrice="$999.29"
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BestSellingProductsContainer;
