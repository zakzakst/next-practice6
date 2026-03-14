import styles from "./menuButton.module.css";

export const MenuButton = () => {
  return (
    <button
      type="button"
      id="menu-open-btn"
      className={styles.menuBtn}
      // TODO: menu-btn--openのスタイル
      aria-labelledby="menu-open-label"
    >
      <span id="menu-open-label" className="display-none">
        メニューを開く
      </span>
      <span className={styles.menuIcon} aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </span>
    </button>
  );
};
