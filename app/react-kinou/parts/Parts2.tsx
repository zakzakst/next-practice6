"use client";

import { useState, useTransition } from "react";

export const Parts = () => {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(2700);

  // useTransitionフック
  const [isPending, startTransition] = useTransition();

  const handleQuantityChange = (event) => {
    const nextQuantity = Number(event.target.value);
    setQuantity(nextQuantity);
    startTransition(async () => {
      // 時間がかかる計算処理はstartTransitionを使う
      const calculated = await calculateTotal(color, size, nextQuantity);
      startTransition(() => {
        // 再度startTransitionでstateを更新
        setTotal(calculated);
      });
    });
  };

  return (
    <div className="transition">
      <div className="transition__controls">
        {/** 数量を変更 */}
        <NumberInput
          label="Quantity"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>

      <dl className="transition__results">
        <dt>Total:</dt>
        {/** pending中は「calculating...」表示を出す */}
        <dd>{isPending ? "calculating..." : `¥${total.toLocaleString()}`}</dd>
      </dl>
    </div>
  );
};
