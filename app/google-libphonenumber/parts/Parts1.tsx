"use client";

import { useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

export const Parts = () => {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleCheck = () => {
    try {
      const number = phoneUtil.parse(value, "JP");
      const result = phoneUtil.isValidNumber(number);
      setIsValid(result);
    } catch {
      // parse に失敗した場合（文字列など）
      setIsValid(false);
    }
  };

  return (
    <div>
      <h1>電話番号チェック</h1>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="08012345678"
      />

      <button onClick={handleCheck}>チェック</button>

      {isValid !== null && (
        <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
      )}
    </div>
  );
};
