import React from "react";
import Chart from "react-apexcharts";

const Piechart = () => {
  return (
    <Chart
      height={350}
      type="donut"
      series={[40, 35, 25]}
      options={{
        labels: ["40% Male", "35% Female", " 25% Unknown"],
        colors: ["#FF7000", "#005CFF", "#111721"],
        dataLabels: {
          enabled: false,
        },
      }}
    />
  );
};

export default Piechart;
