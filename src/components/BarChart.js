import React from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { Data } from "../data/data";

export default function BarChart({ bgColor }) {
  const [chartData, setChartData] = React.useState({
    labels: Data.map((data) => data.day),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: bgColor,
        borderColor: bgColor,
        borderWidth: 1,
        borderRadius:8
      },
    ],
  });
  return (
    <div style={{ width: "48%", margin: "10px" }}>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
