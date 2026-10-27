"use client";

import "./parts4.css";
import { startTransition, useState, ViewTransition } from "react";

type Item = {
  id: number;
  name: string;
};

export const Parts = () => {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "カード A" },
    { id: 2, name: "カード B" },
    { id: 3, name: "カード C" },
  ]);

  const handleAdd = () => {
    startTransition(() => {
      setItems((current) => [
        ...current,
        {
          id: Math.max(0, ...current.map((item) => item.id)) + 1,
          name: `カード ${current.length + 1}`,
        },
      ]);
    });
  };

  const handleRemove = (id: number) => {
    startTransition(() => {
      setItems((current) => current.filter((item) => item.id !== id));
    });
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">ViewTransition：カード一覧</h1>

      <button
        type="button"
        onClick={handleAdd}
        className="mb-6 rounded bg-blue-600 px-4 py-2 text-white"
      >
        カードを追加
      </button>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item) => (
          <ViewTransition key={item.id} enter="card-enter" exit="card-exit">
            <article className="rounded-xl border p-4 shadow-sm">
              <h2 className="font-bold">{item.name}</h2>

              <p className="mt-2 text-sm text-gray-600">
                アニメーション対象のカードです。
              </p>

              <button
                type="button"
                onClick={() => handleRemove(item.id)}
                className="mt-4 rounded bg-red-600 px-3 py-2 text-white"
              >
                削除
              </button>
            </article>
          </ViewTransition>
        ))}
      </div>
    </div>
  );
};
