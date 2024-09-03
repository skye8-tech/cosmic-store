import React from "react";

const DashboardCard = () => {
  return (
    <>
      <div className="flex-1 shadow-md border rounded-sm min-w-64 flex flex-col gap-8 p-8">
        <div className="flex gap-2 items-center">
          <div className="bg-hoverButton w-14 h-14 rounded-full flex items-center justify-center text-text border-8 border-secondary2">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.97738 9.84C4.0176 9.33881 4.24513 8.87115 4.61465 8.53017C4.98417 8.18918 5.46857 7.9999 5.97138 8H18.0294C18.5322 7.9999 19.0166 8.18918 19.3861 8.53017C19.7556 8.87115 19.9832 9.33881 20.0234 9.84L20.8264 19.84C20.8485 20.1152 20.8133 20.392 20.7232 20.6529C20.6331 20.9139 20.4899 21.1533 20.3027 21.3562C20.1155 21.5592 19.8883 21.7211 19.6354 21.8319C19.3825 21.9427 19.1095 21.9999 18.8334 22H5.16738C4.8913 21.9999 4.61823 21.9427 4.36536 21.8319C4.11249 21.7211 3.88529 21.5592 3.69808 21.3562C3.51086 21.1533 3.36768 20.9139 3.27755 20.6529C3.18742 20.392 3.15229 20.1152 3.17438 19.84L3.97738 9.84V9.84Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16 11V6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6V11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div className="text-primary1">
            <h3 className="text-xl font-medium">Products</h3>
            <h5 className="text-text1 text-xs">Last 7 days</h5>
          </div>
        </div>
        <div className="flex gap-x-2 gap-y-4 flex-wrap">
          <div>
            <div className="flex gap-4 text-primary1 items-center">
              <span className="text-2xl font-bold">12</span>
              <span className="text-sm">products</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="flex text-button1 items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.99998 0.950162C6.08887 0.950162 6.17221 0.96394 6.24998 0.991496C6.32776 1.01905 6.39998 1.06639 6.46665 1.1335L10.8667 5.5335C11 5.66683 11.0667 5.82505 11.0667 6.00816C11.0667 6.19127 11 6.34972 10.8667 6.4835C10.7333 6.61683 10.5778 6.6835 10.4 6.6835C10.2222 6.6835 10.0667 6.61683 9.93332 6.4835L6.66665 3.21683L6.66665 10.6835C6.66665 10.8724 6.60265 11.0279 6.47465 11.1502C6.34665 11.2724 6.18843 11.3335 5.99998 11.3335C5.81109 11.3335 5.65265 11.2695 5.52465 11.1415C5.39665 11.0135 5.33287 10.8553 5.33332 10.6668L5.33332 3.21683L2.06665 6.4835C1.93332 6.61683 1.77776 6.6835 1.59998 6.6835C1.42221 6.6835 1.26665 6.61683 1.13332 6.4835C0.999984 6.35016 0.933317 6.19172 0.933317 6.00816C0.933317 5.82461 0.999984 5.66638 1.13332 5.5335L5.53332 1.1335C5.59999 1.06683 5.67221 1.0195 5.74998 0.991496C5.82776 0.963496 5.9111 0.949718 5.99998 0.950162Z"
                    fill="currentColor"
                  />
                </svg>
                6%
              </span>
              <span className="text-text1">vs last 7 days</span>
            </div>
          </div>

          <div>
            <div className="flex gap-4 text-primary1 items-center">
              <span className="text-2xl font-bold">01</span>
              <span className="text-sm">Cancellation</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="flex text-secondary2 items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="rotate-180"
                >
                  <path
                    d="M5.99998 0.950162C6.08887 0.950162 6.17221 0.96394 6.24998 0.991496C6.32776 1.01905 6.39998 1.06639 6.46665 1.1335L10.8667 5.5335C11 5.66683 11.0667 5.82505 11.0667 6.00816C11.0667 6.19127 11 6.34972 10.8667 6.4835C10.7333 6.61683 10.5778 6.6835 10.4 6.6835C10.2222 6.6835 10.0667 6.61683 9.93332 6.4835L6.66665 3.21683L6.66665 10.6835C6.66665 10.8724 6.60265 11.0279 6.47465 11.1502C6.34665 11.2724 6.18843 11.3335 5.99998 11.3335C5.81109 11.3335 5.65265 11.2695 5.52465 11.1415C5.39665 11.0135 5.33287 10.8553 5.33332 10.6668L5.33332 3.21683L2.06665 6.4835C1.93332 6.61683 1.77776 6.6835 1.59998 6.6835C1.42221 6.6835 1.26665 6.61683 1.13332 6.4835C0.999984 6.35016 0.933317 6.19172 0.933317 6.00816C0.933317 5.82461 0.999984 5.66638 1.13332 5.5335L5.53332 1.1335C5.59999 1.06683 5.67221 1.0195 5.74998 0.991496C5.82776 0.963496 5.9111 0.949718 5.99998 0.950162Z"
                    fill="currentColor"
                  />
                </svg>
                6%
              </span>
              <span className="text-text1">vs last 7 days</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
