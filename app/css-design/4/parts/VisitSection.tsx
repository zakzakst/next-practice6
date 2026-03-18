import clsx from "clsx";
import styles from "./visitSection.module.css";
import { Section, SectionTitle, SectionContent } from "./Section";

export const VisitSection = () => {
  return (
    <Section id="access" className={styles.sectionVisit}>
      <div
        className={clsx(styles.sectionVisit__bg, "img-frame", "has-parallax")}
      >
        <img src="https://picsum.photos/2000/1125" alt="店舗イメージ" />
      </div>
      <div className={styles.sectionVisit__inner}>
        <div className={styles.sectionVisit__content}>
          <SectionTitle main="Visit Us" />
          <SectionContent>
            <p className="font-size--sm">
              緑豊かな公園のそば、静かな路地裏に佇むショップです。季節の草花とともに、皆様のお越しをお待ちしております。
            </p>
            <p className="font-size--sm mt-4">
              〒150-0000 東京都渋谷区代官山町 1-2-3 Mellow & Craft Bldg. 1F
            </p>
            <p className="font-size--sm mt-4">
              営業日時：火 〜 日 : 10:00 - 20:00
            </p>
            <div className="font-size--sm mt-4">
              <a href="###" className="button">
                Google Maps
              </a>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
};
