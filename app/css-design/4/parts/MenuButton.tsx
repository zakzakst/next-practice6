"use client";

import { useId, useMemo } from "react";
import styles from "./menuButton.module.css";

export type Props = {
  isOpen: boolean;
  changeOpen: (isOpen: boolean) => void;
};

export const MenuButton = ({ isOpen, changeOpen }: Props) => {
  const id = useId();

  const labelId = useMemo(() => `menu-open-label-${id}`, [id]);

  return (
    <button
      type="button"
      className={styles.menuBtn}
      // TODO: menu-btn--openのスタイル
      aria-labelledby={labelId}
      onClick={() => changeOpen(!isOpen)}
      data-open={isOpen}
    >
      <span id={labelId} className="display-none">
        {isOpen ? "メニューを閉じる" : "メニューを開く"}
      </span>
      <span className={styles.menuIcon} aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
};
