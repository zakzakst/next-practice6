"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const meeting = Temporal.PlainDateTime.from("2026-12-25T09:30:00");
    console.log(meeting);
    console.log(meeting.year);
    console.log(meeting.month);
    console.log(meeting.day);
    console.log(meeting.hour);
    console.log(meeting.minute);
    console.log(meeting.second);

    const next = meeting.add({
      // days: 2,
      // 日付もまたげる
      days: 20,
      hours: 3,
    });
    console.log(next.toString());

    const before = meeting.subtract({
      hours: 2,
    });
    console.log(before.toString());
  }, []);
  return <div>parts</div>;
};
