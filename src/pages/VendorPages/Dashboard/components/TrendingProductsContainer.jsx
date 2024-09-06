import TrendingProduct from "@pages/VendorPages/Dashboard/components/TrendingProduct";
import React from "react";

const TrendingProductsContainer = () => {
  return (
    <div className="border shadow-md rounded-sm">
      <div className="w-full p-6 pb-0 flex gap-4 justify-between items-center">
        <div>
          <h3 className="font-semibold">Trending Products</h3>
          <h4 className="text-text1">Total 10.4k Visitors</h4>
        </div>
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
      <div className="pt-4 px-6 gap-4 flex flex-col text-xs">
        <TrendingProduct
          productImage="src/assets/images/game.png"
          productName="Apple iphone 13"
          productPrice="$999.29"
        />
        <TrendingProduct
          productImage="src/assets/images/game.png"
          productName="Apple iphone 13"
          productPrice="$999.29"
        />
        <TrendingProduct
          productImage="src/assets/images/game.png"
          productName="Apple iphone 13"
          productPrice="$999.29"
        />
        <TrendingProduct
          productImage="src/assets/images/game.png"
          productName="Apple iphone 13"
          productPrice="$999.29"
        />
        <TrendingProduct
          productImage="src/assets/images/game.png"
          productName="Apple iphone 13"
          productPrice="$999.29"
        />
      </div>
    </div>
  );
};

export default TrendingProductsContainer;
