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

// Chart.jsのモジュール登録 ※Chart.js v3以降は「使わない機能は自動で読み込まれない」という設計になったため必要
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
        label: "Sales",
        data: [12, 19, 3, 5, 2],
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Day",
        },
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 25,
        title: {
          display: true,
          text: "Sales",
        },
        grid: {
          display: true,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};
