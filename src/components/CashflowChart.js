import React from "react";
import { Bar} from "react-chartjs-2";

export default function CashflowChart({ data, indexAxis }) {
  
  const [chartData, setChartData] = React.useState({
    labels: data.map((data) => data.label),
    datasets: [
      {
        label: "amount",
        data: data.map((data) => data.amount),
        backgroundColor: ["#5cb85c", "#d9534f"],
        borderWidth: 1,
        borderRadius: 8,
        indexAxis: indexAxis,
      },
    ],
  });
  return (
    <div style={{ marginTop: "20px" }}>
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
