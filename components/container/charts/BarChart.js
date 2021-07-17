import React from "react";
import { Bar } from "react-chartjs-2";

export default function BarChart() {
  const state = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "System Production (kWh)",
        backgroundColor: "rgb(70,130,180)",
        borderColor: "rgba(0,0,0,0)",
        borderWidth: 2,
        data: [65, 59, 80, 81, 56],
      },
    ],
  };

  return (
    <div>
      <Bar
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
}
