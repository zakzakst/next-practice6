"use client";

import { useState } from "react";
import Cleave from "cleave.js/react";

export const Parts = () => {
  const [formatted, setFormatted] = useState("");
  const [raw, setRaw] = useState("");

  return (
    <div>
      <h1>cleave.js 練習</h1>

      <Cleave
        placeholder="カード番号"
        options={{
          creditCard: true,
        }}
        onChange={(e) => {
          setFormatted(e.target.value);

          // cleave 独自拡張
          const rawValue = (e.target as any).rawValue;
          setRaw(rawValue);
        }}
      />

      <div className="mt-4">
        <p>formatted: {formatted}</p>
        <p>raw: {raw}</p>
      </div>
    </div>
  );
};
