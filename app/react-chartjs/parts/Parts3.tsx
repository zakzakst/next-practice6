"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend,
);

export const Parts = () => {
  const data: ChartData<"bar"> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Sales",
        data: [12, 19, 3, 5, 2],
      },
    ],
  };

  const options: ChartOptions<"bar"> = {
    responsive: true,
  };

  return <Bar data={data} options={options} />;
};
