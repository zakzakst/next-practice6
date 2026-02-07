"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
  type ChartOptions,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Parts = () => {
  const data: ChartData<"doughnut"> = {
    labels: ["りんご", "オレンジ", "いちご", "バナナ", "ぶどう"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
      },
    ],
  };

  const options: ChartOptions<"doughnut"> = {
    responsive: true,
    plugins: {
      tooltip: {
        enabled: true,
        callbacks: {
          title(items) {
            return `おいしい${items[0].label}`;
          },
          label(context) {
            return `${context.parsed} 個`;
          },
        },
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};
