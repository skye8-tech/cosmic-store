const DashboardCard = ({ icon, title, subtitle, details }) => {
  return (
    <>
      <div className="flex-1 shadow-md border rounded-sm min-w-64 flex flex-col gap-8 p-8">
        <div className="flex gap-2 items-center">
          <div className="bg-hoverButton w-14 h-14 rounded-full flex items-center justify-center text-text border-8 border-secondary2">
            {icon}
          </div>
          <div className="text-primary1">
            <h3 className="text-xl font-medium">{title}</h3>
            <h5 className="text-text1 text-xs">{subtitle}</h5>
          </div>
        </div>
        <div className="flex gap-x-4 gap-y-4 flex-wrap">
          {details.map((item) => (
            <div key={item.title}>
              <div className="flex gap-3 text-primary1 items-center">
                <span className="text-2xl font-bold">
                  {item.number / 10 >= 1 ? item.number : "0" + item.number}
                </span>
                <span className="text-sm">{item.title}</span>
              </div>
              {item.percentage && (
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className={`flex ${
                      item.percentage >= 0 ? "text-button1" : "text-secondary2"
                    } items-center gap-2`}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${item.percentage < 0 && "rotate-180"}`}
                    >
                      <path
                        d="M5.99998 0.950162C6.08887 0.950162 6.17221 0.96394 6.24998 0.991496C6.32776 1.01905 6.39998 1.06639 6.46665 1.1335L10.8667 5.5335C11 5.66683 11.0667 5.82505 11.0667 6.00816C11.0667 6.19127 11 6.34972 10.8667 6.4835C10.7333 6.61683 10.5778 6.6835 10.4 6.6835C10.2222 6.6835 10.0667 6.61683 9.93332 6.4835L6.66665 3.21683L6.66665 10.6835C6.66665 10.8724 6.60265 11.0279 6.47465 11.1502C6.34665 11.2724 6.18843 11.3335 5.99998 11.3335C5.81109 11.3335 5.65265 11.2695 5.52465 11.1415C5.39665 11.0135 5.33287 10.8553 5.33332 10.6668L5.33332 3.21683L2.06665 6.4835C1.93332 6.61683 1.77776 6.6835 1.59998 6.6835C1.42221 6.6835 1.26665 6.61683 1.13332 6.4835C0.999984 6.35016 0.933317 6.19172 0.933317 6.00816C0.933317 5.82461 0.999984 5.66638 1.13332 5.5335L5.53332 1.1335C5.59999 1.06683 5.67221 1.0195 5.74998 0.991496C5.82776 0.963496 5.9111 0.949718 5.99998 0.950162Z"
                        fill="currentColor"
                      />
                    </svg>
                    {item.percentage >= 0
                      ? item.percentage
                      : -1 * item.percentage}
                    %
                  </span>
                  <span className="text-text1">{item.subtitle}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DashboardCard;
