import React from "react";

const TrendingProduct = ({ productImage, productName, productPrice }) => {
  return (
    <div className="gap-4 flex items-center">
      <span className="w-11 block h-11 p-1">
        <img src={productImage} alt="" />
      </span>
      <h3 className="font-semibold flex-1">{productName}</h3>
      <span>{productPrice}</span>
    </div>
  );
};

export default TrendingProduct;
