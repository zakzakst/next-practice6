"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const now = Temporal.Now.instant();
    const oneHourLater = now.add({
      hours: 1,
    });
    console.log(now.toString());
    console.log(oneHourLater.toString());

    // Temporal.Now.instant() が返すのは Temporal.Instant で、これは「絶対時刻」です。
    // そのため、subtract({ days: 3 }) のように日付単位を使うことはできません。
    // Temporal.Instant では days は許可されず、hours / minutes / seconds などの時間単位のみ使えます。
    // 日付単位で扱いたいなら ZonedDateTime や PlainDateTime を使う
    const now2 = Temporal.Now.zonedDateTimeISO();
    const threeDaysAgo = now2.subtract({
      days: 3,
    });
    console.log(now2.toString());
    console.log(threeDaysAgo.toString());

    const start = Temporal.Instant.from("2026-07-21T00:00:00Z");
    const end = Temporal.Instant.from("2026-07-21T05:30:00Z");
    const duration = start.until(end);
    console.log(duration);
  }, []);
  return <div>parts</div>;
};
