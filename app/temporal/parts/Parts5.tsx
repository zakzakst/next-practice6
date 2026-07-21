"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const time = Temporal.PlainTime.from("14:30:45");
    console.log(time);
    console.log(time.toString());
    console.log(time.hour);
    console.log(time.minute);
    console.log(time.second);

    const later = time.add({
      hours: 2,
      minutes: 45,
    });
    console.log(later.toString());
  }, []);
  return <div>parts</div>;
};
