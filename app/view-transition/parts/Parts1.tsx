"use client";

import { startTransition, useState, ViewTransition } from "react";

export const Parts = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    startTransition(() => {
      setIsVisible((current) => !current);
    });
  };

  return (
    <div>
      <h1 className="mb-4 text-2xl font-bold">ViewTransition の学習</h1>

      <button
        type="button"
        onClick={handleToggle}
        className="rounded bg-blue-600 px-4 py-2 text-white"
      >
        {isVisible ? "非表示にする" : "表示する"}
      </button>

      {isVisible && (
        <ViewTransition>
          <div className="mt-6 rounded-lg border p-6">
            <p className="text-lg font-bold">こんにちは！</p>
            <p>ViewTransition のアニメーション対象です。</p>
          </div>
        </ViewTransition>
      )}
    </div>
  );
};
