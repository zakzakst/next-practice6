"use client";

import styles from "./parts3.module.css";

export const Parts = () => {
  return (
    <>
      <div className="h-screen" />
      <div className="grid grid-cols-3">
        <div className={styles.card}>Card 1</div>
        <div className={styles.card}>Card 2</div>
        <div className={styles.card}>Card 3</div>
      </div>
      <div className="h-screen" />
    </>
  );
};
