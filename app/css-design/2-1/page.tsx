import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>基本的なグラデーションを作成する</h2>
      <div className="_demo_grid_">
        <div className={clsx(styles.gradientBox, styles.linearGradient)}></div>
        <div className={clsx(styles.gradientBox, styles.radialGradient)}></div>
        <div className={clsx(styles.gradientBox, styles.conicGradient)}></div>
      </div>

      <hr />

      <h2>ハードストップの例</h2>
      <div className="_demo_grid_">
        <div className={clsx(styles.gradientBox, styles.linearStop)}></div>
        <div className={clsx(styles.gradientBox, styles.radialStop)}></div>
        <div className={clsx(styles.gradientBox, styles.conicStop)}></div>
      </div>

      <hr />

      <h2>複雑な柄の例</h2>
      <div className="_demo_grid_">
        <div className={clsx(styles.gradientBox, styles.gradientStripe)}></div>
        <div className={clsx(styles.gradientBox, styles.gradientRipples)}></div>
        <div className={clsx(styles.gradientBox, styles.gradientDot)}></div>
        <div
          className={clsx(styles.gradientBox, styles.gradientIchimatsu)}
        ></div>
        <div
          className={clsx(styles.gradientBox, styles.gradientCheckered)}
        ></div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>見出しの装飾の例</h2>
      <h3 className={styles.hGrad01}>グラデーションライン</h3>
      <h3 className={styles.hGrad02}>２色のブロック</h3>

      <div className="_spacer_"></div>
      <hr />

      <h2>マーカー表現の例</h2>
      <p>
        <span className={styles.marker01}>シンプルなマーカー線</span>
        <br />
        <br />
        <span className={styles.marker02}>ストライプ状のマーカー線</span>
      </p>

      <div className="_spacer_"></div>
      <hr />

      <h2>画像とグラデーションを組み合わせた活用例</h2>
      <figure className={styles.imgFrame}>
        <img
          src="https://placehold.jp/1200x800.png"
          width="600"
          height="400"
          alt=""
        />
        <figcaption className={styles.overlayCaption}>
          The image caption
        </figcaption>
      </figure>

      <figure className={styles.imgFrame}>
        <img
          src="https://placehold.jp/1200x800.png"
          width="600"
          height="400"
          alt=""
        />
        <div className={styles.layerBlackFade}></div>
        <div className={styles.layerText}>
          <div>Overlay text</div>
          <p>テキストの可読性を高める</p>
        </div>
      </figure>

      <h3>ドットフィルターの例</h3>
      <figure className={styles.imgFrame}>
        <img
          src="https://placehold.jp/1200x800.png"
          width="600"
          height="400"
          alt=""
        />
        <div className={styles.layerBlackDot}></div>
        <div className={styles.layerText}>
          <div>Overlay text</div>
          <p>テキストの可読性を高める</p>
        </div>
      </figure>
    </div>
  );
};

export default Page;
