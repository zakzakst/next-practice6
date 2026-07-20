"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const instant = Temporal.Now.instant();

    // console.log(instant);
    // console.log(instant.toString());
    // console.log(instant.epochMilliseconds);
    // console.log(instant.epochNanoseconds);

    const tokyo = instant.toZonedDateTimeISO("Asia/Tokyo");
    const london = instant.toZonedDateTimeISO("Europe/London");
    const newYork = instant.toZonedDateTimeISO("America/New_York");

    console.log(tokyo, tokyo.toString());
    console.log(london, london.toString());
    console.log(newYork, newYork.toString());
  }, []);

  return <div>parts</div>;
};
