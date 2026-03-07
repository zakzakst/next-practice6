import clsx from "clsx";
import styles from "./styles.module.css";
import { CSSProperties } from "react";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>円・四角形の単純な図形で切り抜く</h2>
      <div
        className="_demo_grid_"
        style={{ "--column-size": "200px" } as CSSProperties}
      >
        <div className={clsx(styles.clipBox, styles.clipCircle)}></div>
        <div className={clsx(styles.clipBox, styles.clipEllipse)}></div>
        <div className={clsx(styles.clipBox, styles.clipFan)}></div>
        <div className={clsx(styles.clipBox, styles.clipRoundedRect)}></div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>polygonを使って複雑な図形で切り抜く</h2>
      <div
        className="_demo_grid_"
        style={{ "--column-size": "200px" } as CSSProperties}
      >
        <div className={clsx(styles.clipBox, styles.clipTriangle)}></div>
        <div className={clsx(styles.clipBox, styles.clipParallelogram)}></div>
        <div className={clsx(styles.clipBox, styles.clipFrame)}></div>
        <div className={clsx(styles.clipBox, styles.clipHourglass)}></div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>evenoddを用いた表現の例</h2>
      <div
        className="_demo_grid_"
        style={{ "--column-size": "200px" } as CSSProperties}
      >
        <div className={clsx(styles.clipBox, styles.clipStar)}></div>
        <div className={clsx(styles.clipBox, styles.clipStarEvenodd)}></div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>グラデーションマスクの例</h2>
      <div className="_demo_grid_">
        <div className={clsx(styles.maskBox, styles.gradientMask)}>
          <img
            src="https://placehold.jp/1200x800.png"
            width="600"
            height="400"
            loading="lazy"
            alt=""
          />
        </div>
        <div className={clsx(styles.maskBox, styles.gradientStopMask)}>
          <img
            src="https://placehold.jp/1200x800.png"
            width="600"
            height="400"
            loading="lazy"
            alt=""
          />
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>SVGでマスクをした例</h2>
      <div className={clsx(styles.maskBox, styles.maskSvg)}>
        <img
          src="https://placehold.jp/1200x800.png"
          width="600"
          height="400"
          loading="lazy"
          alt=""
        />
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>セクションの境界線をclip-pathで切り取る</h2>
      <div className={clsx(styles.section, styles.clipSection1)}>
        <div className={styles.section__content}>
          <h2>Section 1 Title</h2>
          <p>セクションコンテンツがここに入ります...。</p>
        </div>
      </div>
      <div className={clsx(styles.section, styles.clipSection2)}>
        <div className={styles.section__bg}>
          <img
            src="https://placehold.jp/1200x800.png"
            width="960"
            height="640"
          />
        </div>
        <div className={styles.section__content}>
          <h2>Section 2 Title</h2>
          <p>セクションコンテンツがここに入ります...。</p>
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>波形SVGでマスクする例</h2>
      <div className={clsx(styles.section, styles.maskSection)}>
        <div className={styles.section__bg}>
          <img
            src="https://placehold.jp/1200x800.png"
            width="600"
            height="400"
            loading="lazy"
            alt=""
          />
        </div>
        <div className={styles.section__content}>
          <h2>Masked Section</h2>
          <p>セクションコンテンツがここに入ります...。</p>
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.section__content}>
          <h2>Secttion Title</h2>
          <p>セクションコンテンツがここに入ります...。</p>
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>テキストによるクリッピング</h2>
      <div className={clsx(styles.clipText, styles.clipTextGradient)}>
        <span>CLIP TEXT</span>
        <span>グラデーション</span>
      </div>
      <div className={clsx(styles.clipText, styles.clipTextImg)}>
        <span>CLIP TEXT</span>
        <span>背景画像</span>
      </div>
    </div>
  );
};

export default Page;
