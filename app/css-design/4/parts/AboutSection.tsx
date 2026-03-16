import clsx from "clsx";
import styles from "./aboutSection.module.css";
import { Section, SectionTitle, SectionContent } from "./Section";

export const AboutSection = () => {
  return (
    <Section
      id="about"
      className={clsx(
        styles.sectionAbout,
        "css-design-container",
        "css-design-container--lg",
      )}
    >
      <div className={clsx(styles.sectionAbout__columns, "switch-columns")}>
        <div className="switch-columns__side">
          <div
            className={clsx(
              styles.sectionAbout__media,
              "img-frame",
              "has-parallax",
            )}
          >
            <img src="https://picsum.photos/1500/1000" alt="陶芸家の手元" />
          </div>
        </div>
        <div className="switch-columns__main">
          <SectionTitle
            sub="Our Philosophy"
            main={
              <>
                暮らしを彩る、
                <br />
                確かな手仕事。
              </>
            }
          />
          <SectionContent>
            <p className="font-size--sm">
              Mellow &amp;
              Craftは、機能美と温かみを兼ね備えた生活雑貨のセレクトショップです。
              私たちは「作り手の想い」と「素材の息吹」に敬意を払います。
              流行に流されず、使うほどに手に馴染み、日々の景色を少しだけ豊かにしてくれる。
              そんな、とっておきの逸品をご紹介します。
            </p>
            <div className="font-size--sm mt-4">
              <a href="#collection" className="button">
                View Collection
              </a>
            </div>
          </SectionContent>
        </div>
      </div>
    </Section>
  );
};
