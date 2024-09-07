import { areaElementClasses, chartsGridClasses, LineChart } from '@mui/x-charts';
import React from 'react'

function VendorLineChart() {
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

  return (
    <>
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
    </>
  );
}

export default VendorLineChart
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