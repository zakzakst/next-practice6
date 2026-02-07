"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
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

  return <Doughnut data={data} />;
};
