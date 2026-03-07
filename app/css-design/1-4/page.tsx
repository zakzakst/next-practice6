import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>レイアウトを切り替えるコンテナクエリの例</h2>

      <div className={styles.container} style={{ maxWidth: "1000px" }}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaCard__icon}>📧</div>
          <div className={styles.ctaCard__content}>
            <div className={styles.ctaCard__title}>メルマガ登録</div>
            <p className={styles.ctaCard__text}>
              最新情報やお得な情報をメールでお届けします。
            </p>
          </div>
          <a href="###" className={styles.ctaCard__button}>
            登録する
          </a>
        </div>
      </div>

      <div className={styles.container} style={{ maxWidth: "300px" }}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaCard__icon}>📧</div>
          <div className={styles.ctaCard__content}>
            <div className={styles.ctaCard__title}>メルマガ登録</div>
            <p className={styles.ctaCard__text}>
              最新情報やお得な情報をメールでお届けします。
            </p>
          </div>
          <a href="###" className={styles.ctaCard__button}>
            登録する
          </a>
        </div>
      </div>

      <h2>コンテナクエリを利用したCTAバナー</h2>
      <div style={{ maxWidth: "1000px" }}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaBanner__content}>
            <div className={styles.ctaBanner__title}>Download</div>
            <p className={styles.ctaBanner__text}>資料請求はこちら →</p>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "300px" }}>
        <div className={styles.ctaBanner}>
          <div className={styles.ctaBanner__content}>
            <div className={styles.ctaBanner__title}>Download</div>
            <p className={styles.ctaBanner__text}>資料請求はこちら →</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
