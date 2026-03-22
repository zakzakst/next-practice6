"use client";

import styles from "./parts2.module.css";

export const Parts = () => {
  return (
    <>
      <div className="h-screen" />
      <div className={styles.card}>Card 1</div>
      <div className={styles.card}>Card 2</div>
      <div className={styles.card}>Card 3</div>
      <div className="h-screen" />
    </>
  );
};
