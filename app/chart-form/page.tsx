"use client";

// https://chachart.net/pie
// https://bulma.io/documentation/start/overview/
// http://localhost:3000/chart-form

import { useState, useMemo } from "react";
import { Parts } from "./parts/Parts1";
import type { FormValues } from "./parts/Parts1";
import { PieChart } from "./parts/PieChart";
import type { PieChartItem } from "./parts/PieChart";

type Item = {
  id: string;
  label: string;
  point: number;
  color: string;
};

const Page = () => {
  const [items, setItems] = useState<Item[]>([]);

  const pieChartItems = useMemo<PieChartItem[]>(() => {
    return items.map((item) => {
      const { label, point, color } = item;
      return {
        label,
        point,
        color,
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
        color: "#888",
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

  const moveUpItem = (id: string) => {
    setItems((currentItems) => {
      const index = currentItems.findIndex((item) => item.id === id);
      if (index <= 0) return currentItems;

      const newItems = [...currentItems];
      [newItems[index - 1], newItems[index]] = [
        newItems[index],
        newItems[index - 1],
      ];
      return newItems;
    });
  };

  const moveDownItem = (id: string) => {
    setItems((currentItems) => {
      const index = currentItems.findIndex((item) => item.id === id);
      if (index >= currentItems.length) return currentItems;

      const newItems = [...currentItems];
      [newItems[index + 1], newItems[index]] = [
        newItems[index],
        newItems[index + 1],
      ];
      return newItems;
    });
  };

  return (
    <div className="has-background-white" data-theme="light">
      <div className="container">
        {/* <div className="section">{JSON.stringify(items)}</div> */}
        <div className="section">
          {items.map((item, i) => (
            <Parts
              key={item.id}
              onChangeValues={(values) => updateItem(item.id, values)}
              onDelete={() => handleDeleteItem(item.id)}
              canMoveUp={i > 0}
              moveUp={() => moveUpItem(item.id)}
              canMoveDown={i < items.length - 1}
              moveDown={() => moveDownItem(item.id)}
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
