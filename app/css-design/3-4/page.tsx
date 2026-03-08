import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>details / summary 要素を使ったシンプルなアコーディオン</h2>
      <details>
        <summary>クリックして詳細を表示</summary>
        <p>ここに詳細な内容が入ります。</p>
      </details>

      <div className="_spacer_"></div>
      <hr />

      <h2>details / summary 要素を使ったアコーディオンの実装例</h2>
      <div className={styles.accordions}>
        <details className={styles.accordion}>
          <summary className={styles.accordion__title}>
            <span>Q1: サービスの利用方法は？</span>
          </summary>
          <div className={styles.accordion__content}>
            <p>アカウントを作成後、ログインしてご利用いただけます。</p>
          </div>
        </details>

        <details className={styles.accordion}>
          <summary className={styles.accordion__title}>
            <span>Q2: 料金プランについて教えてください</span>
          </summary>
          <div className={styles.accordion__content}>
            <p>
              無料プラン、スタンダードプラン、プレミアムプランの3種類があります。
            </p>
          </div>
        </details>

        <details className={styles.accordion}>
          <summary className={styles.accordion__title}>
            <span>Q3: 解約方法は？</span>
          </summary>
          <div className={styles.accordion__content}>
            <p>マイページのアカウント設定画面から、いつでも解約が可能です。</p>
          </div>
        </details>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>CSSだけで実装するアコーディオンの展開アニメーション</h2>
      <div className={styles.accordions}>
        <details className={clsx(styles.accordion, styles.accordionAnimation)}>
          <summary className={styles.accordion__title}>
            <span>Q1: サービスの利用方法は？</span>
          </summary>
          <div className={styles.accordion__content}>
            <p>アカウントを作成後、ログインしてご利用いただけます。</p>
          </div>
        </details>

        <details className={clsx(styles.accordion, styles.accordionAnimation)}>
          <summary className={styles.accordion__title}>
            <span>Q2: 料金プランについて教えてください</span>
          </summary>
          <div className={styles.accordion__content}>
            <p>
              無料プラン、スタンダードプラン、プレミアムプランの3種類があります。
            </p>
          </div>
        </details>

        <details className={clsx(styles.accordion, styles.accordionAnimation)}>
          <summary className={styles.accordion__title}>
            <span>Q3: 解約方法は？</span>
          </summary>
          <div className={styles.accordion__content}>
            <p>マイページのアカウント設定画面から、いつでも解約が可能です。</p>
          </div>
        </details>
      </div>

      <div className="_spacer_"></div>
    </div>
  );
};

export default Page;
