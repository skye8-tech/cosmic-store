import Button from '@components/Button';
import React from 'react'
import momoIcon  from '@assets/images/momo.png'

import omoIcon  from '@assets/images/omo.png'
import stripeIcon  from '@assets/images/stripe.png'



function PaymentMethodCard() {
 
const data = [
  {
    id:1,
    accountName: "Lazarus Lazarus",
    accountNumber: +237677777777,
    status: "active",
    ID: 1234567890,
    paymentMethod: "MTN Mobile Money",
  },
  {
    id:2,
    accountName: "Lazarus Lazarus",
    accountNumber: +237677777777,
    status: "active",
    ID: 1234567890,
    paymentMethod: "Orange Mobile Money",
  },
  {
    id:3,
    accountName: "Lazarus Lazarus",
    accountNumber: +237677777777,
    status: "active",
    ID: 1234567890,
    paymentMethod: "Stripe",
  },
];
const getPaymentIcon = (paymentMethod) => {
    switch (paymentMethod) {
      case "MTN Mobile Money":
        return momoIcon;
      case "Orange Mobile Money":
        return omoIcon;
      case "Stripe":
        return stripeIcon;
      default:
        return null;
    }
  };
  return (
    <>
      <section className=" w-full lg:w-1/2 p-5 flex flex-col gap-6 shadow-lg">
        <div className="flex flex-row items-center justify-between ">
          <p className="font-medium"> Payment Method</p>
          <Button
            text="Add Payment Method"
            variant="secondary"
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
        <div>
          {data.map((item) => (
            <div key={item.id} className="mb-6">
              <div className="flex items-center mb-4">
                <img
                  src={getPaymentIcon(item.paymentMethod)}
                  alt={item.paymentMethod}
                  className="w-8 h-8 mr-2"
                />
                <span>{item.paymentMethod}</span>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between items-center">
                  <p>Account Details</p>
                  <div className="flex flex-row gap-2">
                    {/* ... existing SVG icons ... */}
                  </div>
                </div>
                <div>
                  <p>Account Name</p>
                  <p>{item.accountName}</p>
                </div>
                <div>
                  <p>Account number</p>
                  <p>{item.accountNumber}</p>
                </div>
                <div>
                  <p>Status</p>
                  <p>{item.status}</p>
                </div>
                <div>
                  <p>ID</p>
                  <p>{item.ID}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default PaymentMethodCard
