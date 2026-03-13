import clsx from "clsx";
import styles from "./hero.module.css";

export const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={clsx(styles.fixedBg, "img-frame")}>
        <img
          src="https://picsum.photos/1055/2000"
          alt="シックでモダンなダークトーンのインテリア"
        />
      </div>

      <div className={clsx(styles.hero__content, "css-design-container")}>
        <p
          className={clsx(styles.hero__subtitle, styles.animationFadeInFromTop)}
        >
          DAILY ESSENTIALS
        </p>
        <h1 className={clsx(styles.hero__title, "delay-200")}>
          <span>
            CRAFT &amp;
            <br />
            COMFORT
          </span>
        </h1>
        <p
          className={clsx(
            styles.hero__description,
            styles.animationFadeInFromBottom,
            "delay-500",
          )}
        >
          日々の暮らしに、心地よい温もりを。
          <br />
          世界中から集めた、長く愛せる道具と雑貨。
        </p>
      </div>

      <div className={styles.scrollHint__wrapper}>
        <a href="#about" className={styles.scrollHint}>
          <span className={styles.scrollHint__text}>SCROLL</span>
          <svg
            className={styles.scrollHint__icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </a>
      </div>
    </div>
  );
};
