import { timeDifference } from "@util";
import React, { useState } from "react";

const statusOptions = ["pending", "shipped", "delivered", "canceled"];
const Order = ({ sn, name, numberOfItems, amount, created, status }) => {
  const [orderStatus, setOrderStatus] = useState(status);
  return (
    <tr className="hover:bg-[rgb(242,250,255)]/40 transition-colors duration-100 border-b last:border-b-2">
      <td className="p-4 py-3 px-2">
        <input type="checkbox" className="mx-auto block cursor-pointer" />
      </td>
      <td className="p-4 max-sm:px-2 py-3">{sn}</td>
      <td className="p-4 max-sm:px-2 py-3">{name}</td>
      <td className="p-4 max-sm:px-2 py-3">
        {numberOfItems >= 10 ? numberOfItems : "0" + numberOfItems}
      </td>
      <td className="p-4 max-sm:px-2 py-3">{amount}</td>
      <td className="p-4 max-sm:px-2 py-3">
        {timeDifference(new Date(created))}
      </td>
      <td className="p-4 max-sm:px-2 py-3">
        <select
          name="status"
          value={orderStatus}
          className={`p-2 py-1 text-center cursor-pointer outline-none capitalize font-medium ${
            orderStatus == "pending"
              ? "bg-[#f1a636]/25 text-[#f1a636]"
              : orderStatus == "shipped"
              ? "bg-[#FFA500]/25 text-[#FFA500]"
              : orderStatus == "delivered"
              ? "bg-button1/25 text-button1"
              : orderStatus == "canceled"
              ? "bg-secondary2/25 text-secondary2"
              : ""
          }`}
          onChange={(e) => {
            setOrderStatus(e.target.value);
          }}
        >
          {statusOptions.map((item, index) => (
            <option className="bg-white text-primary1" value={item} key={index}>
              {item}
            </option>
          ))}
        </select>
      </td>
      <td className="p-4 max-sm:px-2 py-3">
        <div className="flex gap-2 items-center">
          <span className="cursor-pointer">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.94501 2.69992L3.78751 9.21742C3.55501 9.46492 3.33001 9.95242 3.28501 10.2899L3.00751 12.7199C2.91001 13.5974 3.54001 14.1974 4.41001 14.0474L6.82501 13.6349C7.16251 13.5749 7.63501 13.3274 7.86751 13.0724L14.025 6.55492C15.09 5.42992 15.57 4.14742 13.9125 2.57992C12.2625 1.02742 11.01 1.57492 9.94501 2.69992Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.91748 3.7876C9.23998 5.8576 10.92 7.4401 13.005 7.6501"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2.25 16.5H15.75"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="cursor-pointer">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 4.17857H4L5 15.75H13L14 4.17857H3M9 7.07143V12.8571M11.5 7.07143L11 12.8571M6.5 7.07143L7 12.8571M7 4.17857L7.5 2.25H10.5L11 4.17857"
                stroke="currentColor"
                strokeWidth="1.56"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </td>
    </tr>
  );
};

export default Order;
