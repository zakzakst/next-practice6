"use client";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Parts = () => {
  const data: ChartData<"pie"> = {
    labels: ["りんご", "オレンジ", "いちご", "バナナ", "ぶどう"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2],
      },
    ],
  };

  return <Pie data={data} />;
};
