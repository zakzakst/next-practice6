"use client";

import { useMemo } from "react";
import debounce from "lodash/debounce";

// const handleClick = debounce(() => {
//   console.log("clicked");
// }, 1000);

export const Parts = () => {
  // NOTE: useCallbackでは上手くいかなかった（余裕あるとき理由調べる）
  const handleClick = useMemo(
    () =>
      debounce(() => {
        console.log("clicked");
      }, 1000),
    [],
  );
  return (
    <div>
      <button onClick={handleClick}>ボタン</button>
    </div>
  );
};
