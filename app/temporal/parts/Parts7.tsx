"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const instant = Temporal.Now.instant();

    const tokyo = instant.toZonedDateTimeISO("Asia/Tokyo");
    const london = instant.toZonedDateTimeISO("Europe/London");
    const newYork = instant.toZonedDateTimeISO("America/New_York");

    console.log(tokyo.toString());
    console.log(london.toString());
    console.log(newYork.toString());

    console.log("Tokyo Hour :", tokyo.hour);
    console.log("London Hour :", london.hour);
    console.log("New York Hour :", newYork.hour);
  }, []);
  return <div>parts</div>;
};
