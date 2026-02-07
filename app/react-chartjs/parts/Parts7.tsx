"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export const Parts = () => {
  const data: ChartData<"line"> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "今週",
        data: [12, 19, 3, 5, 2],
      },
      {
        label: "先週",
        data: [8, 10, 6, 4, 9],
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        callbacks: {
          label(context) {
            return `${context.dataset.label}: ${context.parsed.y} 件`;
          },
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
