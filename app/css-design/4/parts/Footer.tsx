import clsx from "clsx";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={clsx(styles.footer__content, "css-design-container")}>
        <div className={styles.footer__info}>
          <span className={styles.footer__info__title}>TEL</span>
          <span className={styles.footer__info__content}>090-1234-5678</span>
        </div>
        <div className={styles.footer__links}>
          <a className="button" href="###">
            Privacy Policy
          </a>
          <a className="button" href="###">
            Contact Us
          </a>
        </div>
      </div>
      <div className={clsx(styles.footer__copyright, "css-design-container")}>
        <p>&copy; 2025 Mellow &amp; Craft.</p>
      </div>
    </footer>
  );
};
