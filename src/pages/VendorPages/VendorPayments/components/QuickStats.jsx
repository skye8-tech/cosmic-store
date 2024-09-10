import React from 'react'

function QuickStats() {
    const noOfPayments=2
    const percentageChange =0.5
    const  totalAmount=50000.00
  return (
    <>
      <div className="grid grid-cols-3 items-center shadow-lg p-4 rounded-lg">
        <div className="flex flex-row gap-4 border-r-2 mr-4 items-center h-full">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="#363738"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="#363738"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M3.5 9.08984H20.5"
              stroke="#363738"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="#363738"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 13.7002H15.7037"
              stroke="#363738"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15.6947 16.7002H15.7037"
              stroke="#363738"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 13.7002H12.0045"
              stroke="#363738"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.9955 16.7002H12.0045"
              stroke="#363738"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 13.7002H8.30329"
              stroke="#363738"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.29431 16.7002H8.30329"
              stroke="#363738"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="font-bold">Today</p>
        </div>

        <div className="flex flex-col gap-2 border-r-2 mr-4">
          <p className="">No of Payments</p>
          <p className="font-bold">{noOfPayments}</p>
          <p>
            {percentageChange > 0
              ? `↑${(percentageChange * 100).toFixed(0)}% vs yesterday`
              : `↓${(percentageChange * -100).toFixed(0)}% vs yesterday`}
          </p>
        </div>

        <div>
          <p>Total Amount</p>
          <p>
            <span className="text-lg font-bold">{totalAmount}</span>
            <span className="text-sm">FCFA</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default QuickStats
