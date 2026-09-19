"use client";

import { useMemo } from "react";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export type PieChartItem = {
  label: string;
  point: number;
};

interface Props {
  items: PieChartItem[];
}

export const PieChart = ({ items }: Props) => {
  const data = useMemo<ChartData<"pie">>(() => {
    const labels = items.map((item) => item.label);
    const points = items.map((item) => item.point);
    return {
      labels,
      datasets: [{ data: points }],
    };
  }, [items]);

  return <Pie data={data} />;
};
