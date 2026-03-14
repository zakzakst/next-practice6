import clsx from "clsx";
import styles from "./header.module.css";
import { MenuButton } from "./MenuButton";

export const Header = () => {
  return (
    <header
      className={clsx(
        styles.header,
        "css-design-container",
        "css-design-container--xl",
      )}
    >
      <div className={styles.header__inner}>
        <h1 className={styles.siteLogo}>
          <a href="#">Mellow &amp; Craft</a>
        </h1>
        <MenuButton />
      </div>
    </header>
  );
};
