"use client";

import styles from "./parts4.module.css";

export const Parts = () => {
  return (
    <>
      <div className="h-screen" />

      <section className={styles.feature}>
        <div>
          <img
            className={styles.feature__image}
            src="https://placehold.jp/1200x800.png"
            alt=""
          />
        </div>
        <div className={styles.feature__content}>
          <h2 className={styles.feature__title}>Amazing Feature</h2>
          <p className={styles.feature__text}>
            This animation is synchronized using view-timeline.
          </p>
        </div>
      </section>

      <div className="h-screen" />
    </>
  );
};
