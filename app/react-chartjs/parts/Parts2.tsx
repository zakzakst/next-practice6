"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  type ChartData,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

type LineChartProps = {
  labels: string[];
  values: number[];
};

const LineChart = ({ labels, values }: LineChartProps) => {
  const data: ChartData<"line"> = {
    labels,
    datasets: [
      {
        label: "Sales",
        data: values,
      },
    ],
  };

  return <Line data={data} />;
};

export const Parts = () => {
  return (
    <LineChart
      labels={["Mon", "Tue", "Wed", "Thu", "Fri"]}
      values={[12, 19, 3, 5, 2]}
    />
  );
};
