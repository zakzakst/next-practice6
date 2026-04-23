"use client";

import { format } from "date-fns";
import { ja } from "date-fns/locale";
import { useMemo } from "react";

export const Parts = () => {
  const test = useMemo(() => {
    const jaDate = format(new Date(), "yyyy年MM月dd日EEEE", { locale: ja });
    return jaDate;
  }, [format]);
  return <div>{test}</div>;
};
