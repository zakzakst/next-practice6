"use client";

import { useState } from "react";
import { PhoneNumberUtil, PhoneNumberFormat } from "google-libphonenumber";

const phoneUtil = PhoneNumberUtil.getInstance();

export const Parts = () => {
  const [value, setValue] = useState("");
  const [formatted, setFormatted] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleCheck = () => {
    try {
      const number = phoneUtil.parse(value, "JP");
      const result = phoneUtil.isValidNumber(number);
      setIsValid(result);
      if (result) {
        const formattedNumber = phoneUtil.format(
          number,
          // PhoneNumberFormat.NATIONAL,
          // PhoneNumberFormat.INTERNATIONAL,
          PhoneNumberFormat.E164,
        );

        setFormatted(formattedNumber);
      } else {
        setFormatted("");
      }
    } catch {
      // parse に失敗した場合（文字列など）
      setIsValid(false);
      setFormatted("");
    }
  };

  return (
    <div>
      <h1>電話番号チェック + フォーマット</h1>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="08012345678"
      />

      <button onClick={handleCheck}>チェック</button>

      {isValid !== null && (
        <>
          <p>{isValid ? "有効な電話番号です ✅" : "無効な電話番号です ❌"}</p>
          {formatted && <p>フォーマット結果: {formatted}</p>}
        </>
      )}
    </div>
  );
};
