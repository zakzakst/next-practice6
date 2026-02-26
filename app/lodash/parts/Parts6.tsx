"use client";

import { useMemo, useEffect } from "react";
import debounce from "lodash/debounce";

export const Parts = () => {
  const debouncedSearch = useMemo(
    () =>
      debounce((value: string) => {
        console.log("search:", value);
      }, 1000),
    [],
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    debouncedSearch(value);
  };

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};
