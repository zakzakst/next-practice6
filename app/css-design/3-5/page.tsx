import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>ブラウザデフォルトのフォームUI</h2>
      <form className="demo-form">
        <div className="field-title">ラジオボタン</div>
        <div className="radio-field">
          <label>
            <input type="radio" name="radio-group" checked />
            <span>選択肢 A</span>
          </label>
          <label>
            <input type="radio" name="radio-group" />
            <span>選択肢 B</span>
          </label>
        </div>

        <div className="field-title">チェックボックス</div>
        <div className="checkbox-field">
          <label>
            <input type="checkbox" />
            <span>利用規約に同意する</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>accent-colorで色をカスタマイズした例</h2>
      <form className="demo-form">
        <div className="field-title">ラジオボタン</div>
        <div className="radio-field">
          <label className="simple-radio">
            <input type="radio" name="radio-group" checked />
            <span>選択肢 A</span>
          </label>
          <label className="simple-radio">
            <input type="radio" name="radio-group" />
            <span>選択肢 B</span>
          </label>
        </div>

        <div className="field-title">チェックボックス</div>
        <div className="checkbox-field">
          <label className="simple-checkbox">
            <input type="checkbox" />
            <span>利用規約に同意する</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>inputを非表示にしたカスタマイズ</h2>
      <form className="demo-form">
        <div className="field-title">ラジオボタン</div>
        <div className="radio-field">
          <label className="custom-control radio-control">
            <input
              type="radio"
              name="radio-group"
              className="visually-hidden"
              checked
            />
            <span className="custom-indicator radio-indicator"></span>
            <span className="control-label">選択肢 A</span>
          </label>
          <label className="custom-control radio-control">
            <input
              type="radio"
              name="radio-group"
              className="visually-hidden"
            />
            <span className="custom-indicator radio-indicator"></span>
            <span className="control-label">選択肢 B</span>
          </label>
        </div>
        <div className="field-title">チェックボックス</div>
        <div className="checkbox-field">
          <label className="custom-control checkbox-control">
            <input type="checkbox" className="visually-hidden" />
            <span className="custom-indicator checkbox-indicator"></span>
            <span className="control-label">利用規約に同意する</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>トグルスイッチのUI</h2>
      <form className="demo-form">
        <div className="field-title">トグルスイッチ</div>
        <div className="toggle-field">
          <label className="toggle-switch">
            <input type="checkbox" className="visually-hidden" />
            <span className="toggle-track">
              <span className="toggle-thumb"></span>
            </span>
            <span className="control-label">設定を有効化</span>
          </label>

          <label className="toggle-switch">
            <input type="checkbox" className="visually-hidden" checked />
            <span className="toggle-track">
              <span className="toggle-thumb"></span>
            </span>
            <span className="control-label">通知を許可</span>
          </label>
        </div>
      </form>

      <div className="_spacer_"></div>
      <hr />

      <h2>カード型UIのラジオボタン</h2>
      <form className="demo-form-card-radio">
        <div className="field-title">プランを選択してください</div>
        <div className="radio-card-field">
          <label className="radio-card">
            <input
              type="radio"
              name="plan"
              className="visually-hidden"
              checked
            />
            <div className="radio-card__content">
              <div className="radio-card__header">
                <span className="radio-card__title">Starter</span>
              </div>
              <p className="radio-card__description">
                個人利用向けの基本的な機能が含まれています。
              </p>
              <div className="radio-card__price">
                ¥980 <span>(税込) / 月</span>
              </div>
            </div>
          </label>

          <label className="radio-card">
            <input type="radio" name="plan" className="visually-hidden" />
            <div className="radio-card__content">
              <div className="radio-card__header">
                <span className="radio-card__title">Pro</span>
              </div>
              <p className="radio-card__description">
                チームでの共同作業や高度な分析機能が利用可能です。
              </p>
              <div className="radio-card__price">
                ¥2,980 <span>(税込) / 月</span>
              </div>
            </div>
          </label>

          <label className="radio-card">
            <input type="radio" name="plan" className="visually-hidden" />
            <div className="radio-card__content">
              <div className="radio-card__header">
                <span className="radio-card__title">Enterprise</span>
              </div>
              <p className="radio-card__description">
                大規模組織向けのセキュリティとサポートを提供します。
              </p>
              <div className="radio-card__price">
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
