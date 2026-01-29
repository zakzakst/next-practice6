"use client";

import Cleave from "cleave.js/react";

export const Parts = () => {
  return (
    <div>
      <h1>cleave.js 練習</h1>

      <Cleave
        placeholder="カード番号"
        options={{
          creditCard: true,
        }}
      />
    </div>
  );
};
