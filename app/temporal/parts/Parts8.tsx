"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const duration = Temporal.Duration.from({
      months: 1,
      weeks: 2,
      days: 5,
      hours: 3,
      minutes: 30,
    });
    // 例えば1か月は28日、29日、30日、31日と長さが異なります。そのため、Duration は「単位」を保持したまま扱う設計になっています。
    console.log(duration);
    console.log(duration.hours);
    console.log(duration.minutes);

    const start = Temporal.PlainDateTime.from("2026-07-21T09:00");
    const end = Temporal.PlainDateTime.from("2026-07-21T17:30");
    const duration2 = start.until(end);
    console.log(duration2);
    const duration3 = end.since(start);
    console.log(duration3);
  }, []);
  return <div>parts</div>;
};
