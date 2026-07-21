"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const birthday = Temporal.PlainDate.from("2000-05-15");
    console.log(birthday);
    console.log(birthday.toString());
    console.log(birthday.year);
    console.log(birthday.month);
    console.log(birthday.day);

    const date = Temporal.PlainDate.from("2026-07-21");
    const nextWeek = date.add({
      // days: 7,
      // 月もまたげる
      days: 17,
    });
    console.log(nextWeek.toString());
    const before = date.subtract({
      days: 30,
    });
    console.log(before.toString());
  }, []);
  return <div>parts</div>;
};
