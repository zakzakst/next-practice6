// TODO: エラーが出る。要修正
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

type TooltipState = {
  label: string;
  items: {
    name: string;
    value: string;
  }[];
} | null;

export const Parts = () => {
  const [tooltip, setTooltip] = useState<TooltipState>(null);
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

  const options = useMemo<ChartOptions<"line">>(
    () => ({
      responsive: true,
      plugins: {
        tooltip: {
          enabled: false,
          external: ({ tooltip }) => {
            if (!tooltip.opacity) {
              setTooltip(null);
              return;
            }
            const label = tooltip.dataPoints[0].label;
            const items = tooltip.dataPoints.map((dp) => ({
              name: dp.dataset.label || "--",
              value: dp.formattedValue,
            }));
            setTooltip({ label, items });
          },
        },
      },
    }),
    [],
  );

  return (
    <div>
      <Line data={data} options={options} />
      {tooltip && (
        <div className="p-2 border">
          <p>
            <b>{tooltip.label}</b>
          </p>
          {tooltip.items.map((item) => (
            <div key={item.name}>
              {item.name}: {item.value}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
