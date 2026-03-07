import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>2つの線形グラデーションを重ね合わせてブレンドする例</h2>
      <div className={clsx(styles.imgFrame, styles.blendGradient)}></div>

      <div className="_spacer_"></div>
      <hr />

      <h2>画像とグラデーションをブレンドする</h2>
      <div className={clsx(styles.imgFrame, styles.blendBgimg)}></div>

      <div className="_spacer_"></div>
      <hr />

      <h2>mix-blend-modeで要素を合成する例</h2>
      <div className={styles.imgFrame}>
        <img
          src="https://placehold.jp/1200x800.png"
          alt=""
          width="1200"
          height="800"
        />
        <div className={styles.blendLayerGradient}></div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>テキストと画像のブレンド</h2>
      <div className={styles.imgFrame}>
        <img
          src="https://placehold.jp/1200x800.png"
          alt=""
          width="1200"
          height="800"
        />
        <div className={styles.blendLayerText}>
          BLEND
          <br />
          TEXT
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>デュオトーン効果</h2>
      <div className={clsx(styles.imgFrame, styles.duotone)}>
        <img
          src="https://placehold.jp/1200x800.png"
          alt=""
          width="1200"
          height="800"
        />
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>filterプリセットの実践例</h2>
      <div className="_demo_grid_">
        <figure className={styles.filteredDemo}>
          <img
            src="https://placehold.jp/1200x800.png"
            alt=""
            width="1200"
            height="800"
          />
          <figcaption>original</figcaption>
        </figure>
        <figure className={styles.filteredDemo}>
          <img
            className={styles.filterDynamic}
            src="https://placehold.jp/1200x800.png"
            alt=""
            width="1200"
            height="800"
          />
          <figcaption>dynamic</figcaption>
        </figure>
        <figure className={styles.filteredDemo}>
          <img
            className={styles.filterSoft}
            src="https://placehold.jp/1200x800.png"
            alt=""
            width="1200"
            height="800"
          />
          <figcaption>soft</figcaption>
        </figure>
        <figure className={styles.filteredDemo}>
          <img
            className={styles.filterVintage}
            src="https://placehold.jp/1200x800.png"
            alt=""
            width="1200"
            height="800"
          />
          <figcaption>vintage</figcaption>
        </figure>
        <figure className={styles.filteredDemo}>
          <img
            className={styles.filterMono}
            src="https://placehold.jp/1200x800.png"
            alt=""
            width="1200"
            height="800"
          />
          <figcaption>mono</figcaption>
        </figure>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>backdrop-filterで背景加工した例</h2>
      <div className="_demo_grid_">
        <div className={styles.imgFrame}>
          <img
            src="https://placehold.jp/1200x800.png"
            alt=""
            width="1200"
            height="800"
          />
          <div className={styles.layerBackdropFilter}></div>
          <div className={styles.layerFilterText}>backdrop-filter</div>
        </div>
        <div className={styles.imgFrame}>
          <img
            className={styles.filterBlur}
            src="https://placehold.jp/1200x800.png"
            alt=""
            width="1200"
            height="800"
          />
          <div className={styles.layerFilterText}>filter</div>
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>グラスモーフィズム</h2>
      <div className={styles.glassSection}>
        <img
          className={styles.glassSection__bg}
          src="https://placehold.jp/1200x800.png"
          alt=""
          width="1200"
          height="800"
        />
        <div className={styles.glassSection__content}>
          <div className={styles.glassBox}>
            <h3>美しいすりガラス表現</h3>
            <p>
              コンテンツがここに入ります。好きな文章を書いてください。コンテンツがここに入ります。コンテンツがここに入ります。好きな文章を書いてください。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
