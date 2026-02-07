"use client";

import { useState, useMemo } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const data = useMemo<ChartData<"line">>(() => {
    const datasets: ChartData<"line">["datasets"] = [
      {
        label: "今週",
        data: [12, 19, 3, 5, 2],
      },
      {
        label: "先週",
        data: [8, 10, 6, 4, 9],
      },
    ].map((ds, index) => ({
      ...ds,
      borderWidth: activeIndex === index ? 4 : 2,
      opacity: activeIndex === null || activeIndex === index ? 1 : 0.3,
    }));

    return {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      datasets,
    };
  }, [activeIndex]);

  const options: ChartOptions<"line"> = {
    responsive: true,
    onHover: (_event, elements) => {
      if (elements.length > 0) {
        setActiveIndex(elements[0].datasetIndex);
      } else {
        setActiveIndex(null);
      }
    },
    interaction: {
      mode: "nearest",
      intersect: false,
    },
  };

  return <Line data={data} options={options} />;
};
