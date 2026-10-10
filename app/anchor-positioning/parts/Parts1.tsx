"use client";

import styles from "./styles.module.css";

export const Parts = () => {
  return (
    <div>
      <div className={styles.heartIcon}>
        <img className="heart-image" alt="" src="..." />
      </div>
      <div className={styles.tooltip}>
        <p>ハートがどこへ行っても下にピタッとついてくるよ。</p>
      </div>
    </div>
  );
};
