"use client";

import styles from "./styles.module.css";

export const Parts = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.heartIcon}>
        <img
          alt="ハートのアイコン"
          className={styles.heartImage}
          src="https://placehold.jp/150x150.png"
        />
      </div>
      <div className={styles.tooltip}>
        <p className={styles.tooltipText}>
          ハートがどこへ行っても下にピタッとついてくるよ。
        </p>
      </div>
    </div>
  );
};
