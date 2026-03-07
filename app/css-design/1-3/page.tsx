import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>サイドバーがあるカードレイアウトのサンプル</h2>
      <div className={styles.contentArea}>
        <div className={styles.mainArea}>
          <h3>メディアクエリでレイアウトを切り替える例</h3>
          <div className={clsx(styles.card, styles.cardMediaquery)}>
            <div className={styles.card__image}>
              <img
                src="https://placehold.jp/1200x800.png"
                width="600"
                height="400"
              />
            </div>
            <div className={styles.card__content}>
              <h3>カードのタイトルがここに入ります。</h3>
              <p>
                ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。
              </p>
            </div>
          </div>

          <div className="_spacer_"></div>

          <h3>switchColumnsクラスを用いたカートレイアウト（HTML）</h3>

          <div className={clsx(styles.card, styles.switchColumns)}>
            <div
              className={clsx(styles.card__image, styles.switchColumns__side)}
            >
              <img
                src="https://placehold.jp/1200x800.png"
                width="600"
                height="400"
              />
            </div>
            <div
              className={clsx(styles.card__content, styles.switchColumns__main)}
            >
              <h3>カードのタイトルがここに入ります。</h3>
              <p>
                ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>Sidebar</div>
      </div>

      <div className="_spacer_"></div>

      <h2>Gridの自動段組み</h2>
      <div className={styles.gridAutoFill}>
        <div className="_box_">Box</div>
        <div className="_box_">Box</div>
        <div className="_box_">Box</div>
        <div className="_box_">Box</div>
        <div className="_box_">Box</div>
        <div className="_box_">Box</div>
      </div>

      <h2>auto-fitとauto-fillの比較</h2>
      <div className={styles.gridAutoFill}>
        <div className="_box_">auto-fill</div>
        <div className="_box_">auto-fill</div>
      </div>
      <div className={styles.gridAutoFit}>
        <div className="_box_">auto-fit</div>
        <div className="_box_">auto-fit</div>
      </div>

      <div className="_spacer_"></div>

      <h2>Switcher</h2>
      <div className={styles.switcher}>
        <div className="_box_">Box</div>
        <div className="_box_">Box</div>
        <div className="_box_">Box</div>
      </div>
    </div>
  );
};

export default Page;
