import VendorPageHeader from '@pages/VendorPages/components/VendorPageHeader'
import PaymentMethodCard from '@pages/VendorPages/VendorPayments/components/PaymentMethodCard';
import VendorLineChart from '@pages/VendorPages/VendorPayments/components/VendorLineChart';
import React from 'react'

function VendorPayment() {

  return (
    <>
      <section className="mr-4 max-w-6xl mx-auto">
        <VendorPageHeader
          title="Payments"
          buttonText="Add Product"
          buttonIcon={
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
        ></VendorPageHeader>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className='w-full lg:w-1/2'>
            {/* stats card  */}
            <div className='shadow-lg'>
             <VendorLineChart></VendorLineChart>
            </div>
          </div>
          <PaymentMethodCard></PaymentMethodCard>
        </div>
      </section>
    </>
  );
}

export default VendorPayment

