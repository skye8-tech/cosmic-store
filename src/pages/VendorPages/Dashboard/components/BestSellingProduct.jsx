import React from "react";

const BestSellingProduct = ({
  productImage,
  productName,
  productTotalOrder,
  productAvailable,
  productPrice,
}) => {
  return (
    <>
      <tr className="hover:bg-gray-200/20 hover:cursor-pointer transition-colors">
        <td className="text-left py-2 px-4 text-xs whitespace-nowrap flex items-center gap-2">
          <span className="w-11 block h-11 p-1">
            <img src={productImage} alt="" />
          </span>
          <h3 className="font-semibold">{productName}</h3>
        </td>
        <td className="text-left py-2 px-4 text-xs whitespace-nowrap">
          {productTotalOrder}
        </td>
        <td
          className={`text-left py-2 px-4 text-xs whitespace-nowrap ${
            productAvailable ? "text-button1" : "text-secondary2"
          }`}
        >
          <div className=" flex gap-2 items-center">
            <span>
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="4" cy="4" r="4" fill="currentColor" />
              </svg>
            </span>
            <span>{productAvailable ? "Stock" : "Out"}</span>
          </div>
        </td>
        <td className="text-left py-2 px-4 text-xs whitespace-nowrap">
          {productPrice}
        </td>
      </tr>
    </>
  );
};

export default BestSellingProduct;
