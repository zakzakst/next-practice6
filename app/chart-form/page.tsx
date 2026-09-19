"use client";

import { useState, useMemo } from "react";
import { Parts } from "./parts/Parts1";
import type { FormValues } from "./parts/Parts1";
import { PieChart } from "./parts/PieChart";
import type { PieChartItem } from "./parts/PieChart";

type Item = {
  id: string;
  label: string;
  point: number;
};

const Page = () => {
  const [items, setItems] = useState<Item[]>([]);

  const pieChartItems = useMemo<PieChartItem[]>(() => {
    return items.map((item) => {
      const { label, point } = item;
      return {
        label,
        point,
      };
    });
  }, [items]);

  const handleAddItem = () => {
    const id = new Date().toISOString();
    setItems((v) => [
      ...v,
      {
        id,
        label: "項目",
        point: 0,
      },
    ]);
  };

  const handleDeleteItem = (id: string) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const updateItem = (id: string, values: FormValues) => {
    const newItems = items.map((item) => {
      if (item.id === id)
        return {
          id,
          ...values,
        };
      return item;
    });
    setItems(newItems);
  };

  // TODO: 並び順変更
  // TODO: 色変更

  return (
    <div className="has-background-white" data-theme="light">
      <div className="container">
        {/* <div className="section">{JSON.stringify(items)}</div> */}
        <div className="section">
          {items.map((item) => (
            <Parts
              key={item.id}
              onChangeValues={(values) => updateItem(item.id, values)}
              onDelete={() => handleDeleteItem(item.id)}
            />
          ))}
        </div>
        <div className="section">
          <button className="button" onClick={handleAddItem}>
            項目を追加
          </button>
        </div>
        <div className="section">
          <PieChart items={pieChartItems} />
        </div>
      </div>
    </div>
  );
};

export default Page;
