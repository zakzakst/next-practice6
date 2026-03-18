import clsx from "clsx";
import styles from "./collectionSection.module.css";
import { Section, SectionTitle } from "./Section";

export const CollectionSection = () => {
  return (
    <Section
      id="collection"
      className={clsx(
        styles.sectionCollection,
        "css-design-container",
        "css-design-container--lg",
      )}
    >
      <SectionTitle sub="New Collection" main="新作コレクション" />
      <div className={styles.item__list}>
        <a className={styles.item} href="###">
          <div className={clsx(styles.item__media, "img-frame")}>
            <img
              src="https://picsum.photos/1000/800"
              width="960"
              height="640"
              alt="セラミックの花瓶"
            />
          </div>
          <div className={styles.item__content}>
            <h3 className={styles.item__title}>Ceramic Vase - 'Suna'</h3>
            <p className={styles.item__text}>Pottery / Japan</p>
          </div>
        </a>
        <a className={styles.item} href="###">
          <div className={clsx(styles.item__media, "img-frame")}>
            <img
              src="https://picsum.photos/1000/800"
              width="960"
              height="640"
              alt="上質なレザーの小物"
            />
          </div>
          <div className={styles.item__content}>
            <h3 className={styles.item__title}>Premium Leather Goods</h3>
            <p className={styles.item__text}>Leather Craft / Italy</p>
          </div>
        </a>
        <a className={styles.item} href="###">
          <div className={clsx(styles.item__media, "img-frame")}>
            <img
              src="https://picsum.photos/1000/800"
              width="960"
              height="640"
              alt="木製の椅子"
            />
          </div>
          <div className={styles.item__content}>
            <h3 className={styles.item__title}>Oak Dining Chair</h3>
            <p className={styles.item__text}>Furniture / Denmark</p>
          </div>
        </a>
      </div>
    </Section>
  );
};
