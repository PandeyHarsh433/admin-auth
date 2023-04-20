import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const ApexChart = () => {
  const [options, setOptions] = useState({
    chart: {
      height: 350,
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: [2, 2],
      colors: ["#008FFB", "#00E396"],
    },
    markers: {
      size: 5,
      colors: ["#008FFB", "#00E396"],
      hover: {
        size: 7,
      },
    },
    title: {
      text: "Activities",
      align: "left",
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
    xaxis: {
      categories: ["", "Week 1", "", "Week 2", "", "Week 3", "", "Week 4"],
    },
    responsive: [
      {
        breakpoint: 576,
        options: {
          chart: {
            height: 250,
          },
        },
      },
    ],
  });

  const [series, setSeries] = useState([
    {
      name: "Guests",
      data: [100, 200, 250, 300, 350, 400, 450, 470],
    },
    {
      name: "Users",
      data: [50, 150, 200, 220, 280, 340, 420, 480],
    },
  ]);

  useEffect(() => {
    setOptions(options);
    setSeries(series);
  }, [options, series]);

  return (
    <div className="chart">
      <ReactApexChart
        options={options}
        series={series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default ApexChart;
