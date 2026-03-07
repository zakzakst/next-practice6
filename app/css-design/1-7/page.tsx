import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>記事リストの例</h2>
      <div className={styles.subgridCards}>
        <div className={styles.subgridCard}>
          <h2 className={styles.subgridCard__title}>
            記事のタイトルがここに入ります。
          </h2>
          <div className={styles.subgridCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              alt=""
              width="1200"
              height="800"
            />
          </div>
          <div className={styles.subgridCard__text}>
            記事の説明文がここに入ります。
          </div>
          <div className={styles.subgridCard__meta}>2025-01-01</div>
        </div>
        <div className={styles.subgridCard}>
          <h2 className={styles.subgridCard__title}>
            記事のタイトルがここに入ります。
          </h2>
          <div className={styles.subgridCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              alt=""
              width="1200"
              height="800"
            />
          </div>
          <div className={styles.subgridCard__text}>
            ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。
          </div>
          <div className={styles.subgridCard__meta}>2025-01-01</div>
        </div>
        <div className={styles.subgridCard}>
          <h2 className={styles.subgridCard__title}>
            少し長めのカードのタイトルをここには入れてみます。長い、長い、長いタイトルをつけてみます。
          </h2>
          <div className={styles.subgridCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              alt=""
              width="1200"
              height="800"
            />
          </div>
          <div className={styles.subgridCard__text}>
            ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば
            。
          </div>
          <div className={styles.subgridCard__meta}>2025-01-01</div>
        </div>
        <div className={styles.subgridCard}>
          <h2 className={styles.subgridCard__title}>短いタイトル</h2>
          <div className={styles.subgridCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              alt=""
              width="1200"
              height="800"
            />
          </div>
          <div className={styles.subgridCard__text}>
            Liberroy, Foo の取り組み、我らのうち、Mulla Sunt
            の利点を提案したのなら。
            彼らはあなたの悩みに一般的な魂を癒しています。
          </div>
          <div className={styles.subgridCard__meta}>2025-01-01</div>
        </div>
        <div className={styles.subgridCard}>
          <h2 className={styles.subgridCard__title}>
            記事のタイトルがここに入ります。
          </h2>
          <div className={styles.subgridCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              alt=""
              width="1200"
              height="800"
            />
          </div>
          <div className={styles.subgridCard__text}>
            記事の説明文がここに入ります。
          </div>
          <div className={styles.subgridCard__meta}>2025-01-01</div>
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>subgridをネストして利用したニュースリストの例</h2>
      <div className={styles.newsList}>
        <div className={styles.newsList__item}>
          <div className={styles.newsList__meta}>
            <div className={styles.newsList__time}>2025年1月1日</div>
            <div className={styles.newsList__category}>お知らせ</div>
          </div>
          <div className={styles.newsList__title}>
            1つめのニュースのタイトル。
          </div>
        </div>
        <div className={styles.newsList__item}>
          <div className={styles.newsList__meta}>
            <div className={styles.newsList__time}>2025年5月15日</div>
            <div className={styles.newsList__category}>コラム</div>
          </div>
          <div className={styles.newsList__title}>
            2つめのコラム記事のタイトルがここに入ります。
          </div>
        </div>
        <div className={styles.newsList__item}>
          <div className={styles.newsList__meta}>
            <div className={styles.newsList__time}>2025年12月10日</div>
            <div className={styles.newsList__category}>IR</div>
          </div>
          <div className={styles.newsList__title}>
            3つめのIR記事のタイトルがここに入ります。
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
