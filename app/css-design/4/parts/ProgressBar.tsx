import styles from "./progressBar.module.css";

export const ProgressBar = () => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressBar__gauge}></div>
    </div>
  );
};
