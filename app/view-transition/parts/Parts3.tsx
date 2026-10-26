"use client";

import "./parts3.css";
import { startTransition, useState, ViewTransition } from "react";

const products = [
  { id: 1, name: "バックパック", color: "bg-blue-500", price: "8,000円" },
  { id: 2, name: "スニーカー", color: "bg-orange-500", price: "12,000円" },
  { id: 3, name: "腕時計", color: "bg-emerald-500", price: "15,000円" },
];

export const Parts = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedProduct = products.find((product) => product.id === selectedId);

  const handleSelect = (id: number | null) => {
    startTransition(() => {
      setSelectedId(id);
    });
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">商品一覧</h1>

      {selectedProduct ? (
        <ViewTransition>
          <section className="max-w-lg rounded-xl border p-6 shadow-sm">
            <ViewTransition name={`product-${selectedProduct.id}`}>
              <div
                className={`mb-4 flex h-48 items-center justify-center rounded-lg text-2xl font-bold text-white ${selectedProduct.color}`}
              >
                {selectedProduct.name}
              </div>
            </ViewTransition>

            <h2 className="text-xl font-bold">{selectedProduct.name}</h2>
            <p className="mt-2">{selectedProduct.price}</p>

            <button
              type="button"
              onClick={() => handleSelect(null)}
              className="mt-6 rounded bg-gray-800 px-4 py-2 text-white"
            >
              一覧に戻る
            </button>
          </section>
        </ViewTransition>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {products.map((product) => (
            <button
              key={product.id}
              type="button"
              onClick={() => handleSelect(product.id)}
              className="rounded-xl border p-4 text-left shadow-sm"
            >
              <ViewTransition name={`product-${product.id}`}>
                <div
                  className={`mb-3 flex h-32 items-center justify-center rounded-lg font-bold text-white ${product.color}`}
                >
                  {product.name}
                </div>
              </ViewTransition>

              <h2 className="font-bold">{product.name}</h2>
              <p className="mt-1">{product.price}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
