import styles from "./marqueeSection.module.css";

export const MarqueeSection = () => {
  return (
    <div className={styles.sectionMarquee}>
      <div className={styles.marquee}>
        <div className={styles.marquee__text}>
          Timeless design for your everyday life. Crafted with care, curated for
          you.
        </div>
        <div className={styles.marquee__text} aria-hidden="true">
          Timeless design for your everyday life. Crafted with care, curated for
          you.
        </div>
      </div>
    </div>
  );
};
