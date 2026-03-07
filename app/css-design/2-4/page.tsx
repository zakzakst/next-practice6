import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className={clsx(styles.module, "_demo_ _flow_")}>
      <h2>1色から明るい色と暗い色を作成する例</h2>
      <div className="_demo_cluster_">
        <div className={clsx(styles.badge, styles.badgePrimaryLight)}>
          primary-light
        </div>
        <div className={clsx(styles.badge, styles.badgePrimary)}>primary</div>
        <div className={clsx(styles.badge, styles.badgePrimaryDark)}>
          primary-dark
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>ボタンのホバーエフェクトの例</h2>
      <div className={styles.buttons}>
        <button className={styles.btn}>保存する</button>
        <button className={clsx(styles.btn, styles.btnDanger)}>削除する</button>
        <button className={clsx(styles.btn, styles.btnCancel)}>
          キャンセル
        </button>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>通知ボックスのカラーバリエーション</h2>
      <div className={clsx(styles.colorBox, styles.colorBoxAlert)}>
        <div className={styles.colorBox__icon}></div>
        <div className={styles.colorBox__content}>
          <p>通知ボックス ( alert ) です。</p>
        </div>
      </div>
      <div className={clsx(styles.colorBox, styles.colorBoxCheck)}>
        <div className={styles.colorBox__icon}></div>
        <div className={styles.colorBox__content}>
          <p>通知ボックス ( check ) です。</p>
        </div>
      </div>
      <div className={clsx(styles.colorBox, styles.colorBoxHelp)}>
        <div className={styles.colorBox__icon}></div>
        <div className={styles.colorBox__content}>
          <p>通知ボックス ( help ) です。</p>
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>相対色構文で1色から明るい色と暗い色を作成する例</h2>
      <div className="_demo_cluster_">
        <div className={clsx(styles.badge, styles.badgeFromPrimaryLight)}>
          primary-light
        </div>
        <div className={clsx(styles.badge, styles.badgePrimary)}>primary</div>
        <div className={clsx(styles.badge, styles.badgeFromPrimaryDark)}>
          primary-dark
        </div>
      </div>
    </div>
  );
};

export default Page;
