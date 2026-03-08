import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>ブラウザデフォルトのフォームUI</h2>
      <form className={styles.demoForm}>
        <div className={styles.fieldTitle}>ラジオボタン</div>
        <div className={styles.radioField}>
          <label>
            <input type="radio" name="radio-group" />
            <span>選択肢 A</span>
          </label>
          <label>
            <input type="radio" name="radio-group" />
            <span>選択肢 B</span>
          </label>
        </div>

        <div className={styles.fieldTitle}>チェックボックス</div>
        <div className={styles.checkboxField}>
          <label>
            <input type="checkbox" />
            <span>利用規約に同意する</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>accent-colorで色をカスタマイズした例</h2>
      <form className={styles.demoForm}>
        <div className={styles.fieldTitle}>ラジオボタン</div>
        <div className={styles.radioField}>
          <label className={styles.simpleRadio}>
            <input type="radio" name="radio-group" />
            <span>選択肢 A</span>
          </label>
          <label className={styles.simpleRadio}>
            <input type="radio" name="radio-group" />
            <span>選択肢 B</span>
          </label>
        </div>

        <div className={styles.fieldTitle}>チェックボックス</div>
        <div className={styles.checkboxField}>
          <label className={styles.simpleCheckbox}>
            <input type="checkbox" />
            <span>利用規約に同意する</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>inputを非表示にしたカスタマイズ</h2>
      <form className={styles.demoForm}>
        <div className={styles.fieldTitle}>ラジオボタン</div>
        <div className={styles.radioField}>
          <label className={styles.customControl}>
            <input
              type="radio"
              name="radio-group"
              className={styles.visuallyHidden}
            />
            <span
              className={clsx(styles.customIndicator, styles.radioIndicator)}
            ></span>
            <span>選択肢 A</span>
          </label>
          <label className={styles.customControl}>
            <input
              type="radio"
              name="radio-group"
              className={styles.visuallyHidden}
            />
            <span
              className={clsx(styles.customIndicator, styles.radioIndicator)}
            ></span>
            <span>選択肢 B</span>
          </label>
        </div>
        <div className={styles.fieldTitle}>チェックボックス</div>
        <div className={styles.checkboxField}>
          <label className={styles.customControl}>
            <input type="checkbox" className={styles.visuallyHidden} />
            <span
              className={clsx(styles.customIndicator, styles.checkboxIndicator)}
            ></span>
            <span>利用規約に同意する</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>トグルスイッチのUI</h2>
      <form className={styles.demoForm}>
        <div className={styles.fieldTitle}>トグルスイッチ</div>
        <div className={styles.toggleField}>
          <label className={styles.toggleSwitch}>
            <input type="checkbox" className={styles.visuallyHidden} />
            <span className={styles.toggleTrack}>
              <span className={styles.toggleThumb}></span>
            </span>
            <span>設定を有効化</span>
          </label>

          <label className={styles.toggleSwitch}>
            <input type="checkbox" className={styles.visuallyHidden} />
            <span className={styles.toggleTrack}>
              <span className={styles.toggleThumb}></span>
            </span>
            <span>通知を許可</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>カード型UIのラジオボタン</h2>
      <form className={styles.demoFormCardRadio}>
        <div className={styles.fieldTitle}>プランを選択してください</div>
        <div className={styles.radioCardField}>
          <label className={styles.radioCard}>
            <input type="radio" name="plan" className={styles.visuallyHidden} />
            <div className={styles.radioCard__content}>
              <div className={styles.radioCard__header}>
                <span className={styles.radioCard__title}>Starter</span>
              </div>
              <p className={styles.radioCard__description}>
                個人利用向けの基本的な機能が含まれています。
              </p>
              <div className={styles.radioCard__price}>
                ¥980 <span>(税込) / 月</span>
              </div>
            </div>
          </label>

          <label className={styles.radioCard}>
            <input type="radio" name="plan" className={styles.visuallyHidden} />
            <div className={styles.radioCard__content}>
              <div className={styles.radioCard__header}>
                <span className={styles.radioCard__title}>Pro</span>
              </div>
              <p className={styles.radioCard__description}>
                チームでの共同作業や高度な分析機能が利用可能です。
              </p>
              <div className={styles.radioCard__price}>
                ¥2,980 <span>(税込) / 月</span>
              </div>
            </div>
          </label>

          <label className={styles.radioCard}>
            <input type="radio" name="plan" className={styles.visuallyHidden} />
            <div className={styles.radioCard__content}>
              <div className={styles.radioCard__header}>
                <span className={styles.radioCard__title}>Enterprise</span>
              </div>
              <p className={styles.radioCard__description}>
                大規模組織向けのセキュリティとサポートを提供します。
              </p>
              <div className={styles.radioCard__price}>
                ¥9,900 <span>(税込) / 月</span>
              </div>
            </div>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
    </div>
  );
};

export default Page;
