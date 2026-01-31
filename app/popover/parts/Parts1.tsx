"use client";

import { useId } from "react";
import styles from "./styles.module.css";

export const Parts = () => {
  const id = useId();

  return (
    <div>
      <button
        type="button"
        popoverTarget={id}
        className="bg-amber-800 text-white p-4 ml-75 inline-block"
        style={{ anchorName: `--${id}` }}
      >
        開く
      </button>
      <div
        id={id}
        popover="auto"
        className={styles.popover}
        style={{ positionAnchor: `--${id}` }}
      >
        <p>ポップオーバーの内容</p>
      </div>
    </div>
  );
};
