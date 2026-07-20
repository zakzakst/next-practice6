"use client";

import { useEffect } from "react";

export const Parts = () => {
  useEffect(() => {
    const birthday = Temporal.Instant.from("2000-01-01T00:00:00Z");
    const today = Temporal.Now.instant();

    console.log(Temporal.Instant.compare(birthday, today));
    console.log(Temporal.Instant.compare(today, birthday));
  }, []);
  return <div>parts</div>;
};
