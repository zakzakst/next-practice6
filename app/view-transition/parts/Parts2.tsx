"use client";

import "./parts2.css";
import { startTransition, useState, ViewTransition } from "react";

export const Parts = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    startTransition(() => {
      setIsExpanded((current) => !current);
    });
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">ViewTransition の学習</h1>

      <button
        type="button"
        onClick={handleToggle}
        className="mb-6 rounded bg-blue-600 px-4 py-2 text-white"
      >
        {isExpanded ? "縮小する" : "拡大する"}
      </button>

      <ViewTransition name="card">
        <div
          className={`rounded-xl border bg-white p-6 shadow-sm ${
            isExpanded ? "w-full" : "w-48"
          }`}
        >
          <h2 className="text-lg font-bold text-gray-900">サンプルカード</h2>

          {isExpanded && (
            <p className="mt-3 text-gray-700">
              拡大すると表示される詳細情報です。
            </p>
          )}
        </div>
      </ViewTransition>
    </div>
  );
};
