"use client";

import { useState, useTransition } from "react";

const sleep = (milliseconds: number): Promise<void> =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

const calculateTotal = async (): Promise<number> => {
  await sleep(3000);
  return 100;
};

export const Parts = () => {
  const [total, setTotal] = useState(2700);
  const [isPending, startTransition] = useTransition();

  const handleCalculateTotal = () => {
    startTransition(async () => {
      // 時間がかかる計算処理はstartTransitionを使う
      const calculated = await calculateTotal();
      startTransition(() => {
        // 再度startTransitionでstateを更新
        setTotal(calculated);
      });
    });
  };

  return (
    <div className="transition">
      <div className="transition__controls">
        <button onClick={handleCalculateTotal}>click</button>
      </div>

      <dl className="transition__results">
        <dt>Total:</dt>
        {/** pending中は「calculating...」表示を出す */}
        <dd>{isPending ? "calculating..." : `¥${total.toLocaleString()}`}</dd>
      </dl>
    </div>
  );
};
