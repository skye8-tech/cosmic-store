import Button from "@components/Button";
import {
  BarChart,
  LineChart,
  areaElementClasses,
  chartsGridClasses,
} from "@mui/x-charts";
import BestSellingProductsContainer from "@pages/VendorPages/Dashboard/components/BestSellingProductsContainer";
import DashboardCardsContainer from "@pages/VendorPages/Dashboard/components/DashboardCardsContainer";
import TrendingProductsContainer from "@pages/VendorPages/Dashboard/components/TrendingProductsContainer";
import { Link } from "react-router-dom";

const dataset = [
  {
    day: "Mon",
    orders: 25,
    deliveries: 18,
  },
  {
    day: "Tue",
    orders: 22,
    deliveries: 16,
  },
  {
    day: "Wed",
    orders: 20,
    deliveries: 15,
  },
  {
    day: "Thu",
    orders: 25,
    deliveries: 20,
  },
  {
    day: "Fri",
    orders: 25,
    deliveries: 22,
  },
  {
    day: "Sat",
    orders: 25,
    deliveries: 20,
  },
];

const data = [
  {
    day: "Sat",
    income: 1,
  },
  {
    day: "Sun",
    income: 15,
  },
  {
    day: "Mon",
    income: 22,
  },
  {
    day: "Tue",
    income: 7,
  },
  {
    day: "Wed",
    income: 24,
  },
  {
    day: "Thu",
    income: 1,
  },
];

const valueFormatter = (value) => value;

const VendorDashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium">Overview</h1>
        <Link to="/vendor/products/create">
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
        </Link>
      </div>
      <DashboardCardsContainer />
      <div className="my-8 grid lg:grid-cols-2 gap-3">
        <div className="pt-4 border shadow-lg">
          <div className="flex items-center justify-between gap-4 md:gap-8 px-4 -mb-6">
            <h3 className="text-primary1 font-semibold">Weekly Activity</h3>
            <div className="text-text1 text-xs flex max-md:flex-wrap gap-x-4">
              <div className="flex items-center gap-2">
                <span className="text-[#A52A2A]">
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
                <span>Orders</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#FFA500]">
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
                <span>Deleveries</span>
              </div>
            </div>
            <div>
              <select
                name="timeFrame"
                defaultValue="weekly"
                className="focus:outline-none border border-text1 text-text1 p-1 cursor-pointer rounded-md text-xs"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <BarChart
            dataset={dataset}
            xAxis={[
              {
                scaleType: "band",
                dataKey: "day",
                barGapRatio: 1,
                categoryGapRatio: 0.4,
                tickLabelPlacement: "middle",
                disableLine: true,
                disableTicks: true,
              },
            ]}
            series={[
              {
                dataKey: "orders",
                valueFormatter,
                color: "#A52A2A",
              },
              {
                dataKey: "deliveries",
                valueFormatter,
                color: "#FFA500",
              },
            ]}
            grid={{ horizontal: true }}
            borderRadius={17}
            yAxis={[
              {
                label: "products",
                disableLine: true,
                disableTicks: true,
              },
            ]}
            height={300}
            sx={{
              [`& .${chartsGridClasses.line}`]: {
                strokeWidth: 0.5,
              },
            }}
          />
        </div>
        <div className="pt-4 border shadow-lg">
          <div className="flex items-center justify-between gap-4 md:gap-8 px-4 -mb-6">
            <h3 className="text-primary1 font-semibold">Weekly Activity</h3>
            <div>
              <select
                name="timeFrame"
                defaultValue="weekly"
                className="focus:outline-none border border-text1 text-text1 p-1 cursor-pointer rounded-md text-xs"
              >
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
              </select>
            </div>
          </div>
          <LineChart
            xAxis={[
              {
                dataKey: "day",
                valueFormatter: (value) => value,
                scaleType: "band",
                disableLine: true,
                disableTicks: true,
                tickPlacement: "start",
                tickLabelPlacement: "middle",
              },
            ]}
            yAxis={[{ disableLine: true, disableTicks: true, label: "income" }]}
            series={[
              {
                dataKey: "income",
                color: "#DB4444",
                showMark: false,
                area: true,
              },
            ]}
            dataset={data}
            height={300}
            grid={{ horizontal: true }}
            sx={{
              [`.${areaElementClasses.root}`]: {
                fill: "url(#swich-color-id)",
              },
              [`& .${chartsGridClasses.line}`]: {
                strokeWidth: 0.5,
              },
            }}
          >
            <ColorPalette id="swich-color-id" />
          </LineChart>
        </div>
      </div>
      <>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 text-primary1 my-8">
          {/* Best selling products */}
          <BestSellingProductsContainer />

          {/* Trending products */}
          <TrendingProductsContainer />
        </div>
      </>
    </>
  );
};

export default VendorDashboard;

function ColorPalette({ id }) {
  return (
    <defs>
      <linearGradient id={id} gradientTransform="rotate(90)">
        <stop stopColor={"#DB44445E"} stopOpacity={1} offset="0%" />
        <stop stopColor={"#FFFFFF"} stopOpacity={1} offset="100%" />
      </linearGradient>
    </defs>
  );
}
// background: linear-gradient(180deg, rgba(219, 68, 68, 0.37) 0%, #FFFFFF 100%);
