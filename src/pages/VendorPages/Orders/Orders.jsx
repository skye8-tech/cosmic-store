import Button from "@components/Button";
import OrdersTable from "@pages/VendorPages/Orders/components/OrdersTable";
import React, { useState } from "react";

const today = [
  { title: "No of Orders", amount: "05" },
  { title: "Ordered Items", amount: "05" },
  { title: "Returns", amount: "05" },
  { title: "Accepted Orders", amount: "05" },
  { title: "Delivered Orders", amount: "05" },
];

const Orders = () => {
  return (
    <>
      <div className="flex justify-between gap-4 items-center">
        <h1 className="text-xl font-medium">Orders</h1>
        <Button
          text="Add Product"
          variant="primary"
          icon={
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12H18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 18V6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
        />
      </div>
      <div className="rounded-lg py-2 border shadow-lg my-4 grid grid-cols-6 max-lg:grid-cols-3 max-sm:grid-cols-2">
        <div className="flex items-center py-2 px-6 border-r gap-2">
          <span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 2V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 2V5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3.5 9.08984H20.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6947 13.7002H15.7037"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.6947 16.7002H15.7037"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 13.7002H12.0045"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11.9955 16.7002H12.0045"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29431 13.7002H8.30329"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.29431 16.7002H8.30329"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <h3 className="font-semibold">Today</h3>
        </div>
        {today.map((item, index) => (
          <div
            key={index}
            className="py-2 px-6 border-r justify-center last:border-r-0"
          >
            <div className="flex flex-col">
              <span className="text-sm whitespace-nowrap">{item.title}</span>
              <span className="font-semibold">{item.amount}</span>
            </div>
          </div>
        ))}
      </div>
      <OrdersTable />
    </>
  );
};

export default Orders;
