import React, { useState } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PieChart = () => {
  const [series, setSeries] = useState([55, 31, 14]);

  const [options, setOptions] = useState({
    chart: {
      width: 380,
      type: "pie",
    },
    title: {
      text: "Top Products",
    },
    labels: ["Basic Trees", "Custom Short Pants", "Super Hoodies"],
    dataLabels: {
      enabled: true,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  });

  return (
    <div id="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        width={350}
      />
    </div>
  );
};

export default PieChart;
