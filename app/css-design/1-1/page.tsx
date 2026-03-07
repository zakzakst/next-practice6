import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>02 clamp()の基本構文</h2>
      <div>
        <h1 className={styles.clampH1}>Hellow World !</h1>
      </div>

      <hr />

      <h2>07 CTAセクションのHTML例</h2>
      <div className={styles.cta}>
        <div className={styles.cta__title}>📄 資料請求はこちら</div>
        <p className={styles.cta__text}>
          画面サイズに応じて自動で変化する流体タイポグラフィを体験してください。
        </p>
        <a href="#" className={styles.cta__button}>
          ダウンロード
        </a>
      </div>

      <hr />

      <h2>09 サイト全体に流体設計を取り入れる</h2>

      <div className={styles.flowContent}>
        <h1>見出し1のテキスト</h1>
        <p>
          ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。
        </p>
        <h2>見出し2のテキスト</h2>
        <p>
          ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。
        </p>
        <h3>見出し3のテキスト</h3>
        <p>
          ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような
          Liberroy, Foo の取り組み、我らのうち、Mulla Sunt
          の利点を提案したのなら。
        </p>
        <ul>
          <li>リストコンテンツ</li>
          <li>リストコンテンツ</li>
          <li>リストコンテンツ</li>
        </ul>
        <h4>見出し4のテキスト</h4>
        <p>
          ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。
        </p>
      </div>
    </div>
  );
};

export default Page;
