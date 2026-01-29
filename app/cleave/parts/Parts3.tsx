"use client";

import { useState } from "react";
import Cleave from "cleave.js/react";

export const Parts = () => {
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [memberId, setMemberId] = useState("");

  return (
    <div>
      <h1>cleave.js Step3</h1>

      {/* 金額 */}
      <div>
        <h3>金額</h3>
        <Cleave
          placeholder="金額"
          options={{
            numeral: true,
            numeralThousandsGroupStyle: "thousand",
          }}
          onChange={(e) => setPrice((e.target as any).rawValue)}
        />
        <p>raw: {price}</p>
      </div>

      {/* 日付 */}
      <div className="mt-4">
        <h3>日付</h3>
        <Cleave
          placeholder="YYYY/MM/DD"
          options={{
            date: true,
            datePattern: ["Y", "m", "d"],
          }}
          onChange={(e) => setDate((e.target as any).rawValue)}
        />
        <p>raw: {date}</p>
      </div>

      {/* カスタム */}
      <div className="mt-4">
        <h3>会員ID</h3>
        <Cleave
          placeholder="ABC-1234-56789"
          options={{
            blocks: [3, 4, 5],
            uppercase: true,
          }}
          onChange={(e) => setMemberId((e.target as any).rawValue)}
        />
        <p>raw: {memberId}</p>
      </div>
    </div>
  );
};
