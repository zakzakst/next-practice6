import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>aspect-ratioを用いて画像比率の固定を実装する</h2>
      <div className={styles.frame16_9}>
        <img
          src="https://placehold.jp/1200x800.png"
          alt=""
          width="1200"
          height="800"
        />
      </div>

      <h2>aspect-ratio（img単体）</h2>
      <img
        className={styles.img16_9}
        src="https://placehold.jp/1200x800.png"
        alt=""
        width="1200"
        height="800"
      />

      <hr />

      <h2>aspect-ratioを用いたカードレイアウトのサンプル</h2>
      <div className={styles.card}>
        <div className={styles.card__media}>
          <img
            src="https://placehold.jp/1200x800.png"
            width="960"
            height="640"
          />
        </div>
        <div className={styles.card__content}>
          <h3 className={styles.card__title}>
            記事のタイトルがここに入ります。
          </h3>
          <p className={styles.card__text}>
            記事の簡単な説明文がここに入ります。数行程度に要約された抜粋文がここに入ります。
            記事の簡単な説明文がここに入ります。
          </p>
          <div className={styles.card__footer}>
            <a className={styles.card__link} href="#">
              続きを読む →
            </a>
          </div>
        </div>
      </div>

      <h2>aspect-ratioを用いた横並びのカートレイアウト</h2>
      <div className={styles.cardHorizontal}>
        <div className={styles.cardHorizontal__image}>
          <img
            src="https://placehold.jp/1200x800.png"
            width="600"
            height="400"
          />
        </div>
        <div className={styles.cardHorizontal__content}>
          <h3>Card Title</h3>
          <p>
            ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
