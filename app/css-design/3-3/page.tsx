import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>カードにグラスモーフィズムを追加した例</h2>
      <div className={styles.glassCards}>
        <a className={styles.glassCard} href="">
          <div className={styles.glassCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="800"
              height="600"
            />
          </div>
          <div className={styles.glassCard__content}>
            <h3 className={styles.glassCard__title}>マーケティング</h3>
            <div className={styles.glassCard__text}>
              <div className={styles.glassCard__text__inner}>
                <p>
                  データ分析に基づいた多角的な戦略立案で、ビジネスの成果を確実に最大化します
                </p>
              </div>
            </div>
            <div className={styles.glassCard__footer}>
              <span>詳しく見る</span>
              <span className={styles.glassCard__arrow}>→</span>
            </div>
          </div>
        </a>
        <a className={styles.glassCard} href="">
          <div className={styles.glassCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="800"
              height="600"
            />
          </div>
          <div className={styles.glassCard__content}>
            <h3 className={styles.glassCard__title}>システム開発</h3>
            <div className={styles.glassCard__text}>
              <div className={styles.glassCard__text__inner}>
                <p>
                  最新の技術トレンドと柔軟な設計を組み合わせ、堅牢で拡張性の高いシステムを構築
                </p>
              </div>
            </div>
            <div className={styles.glassCard__footer}>
              <span>詳しく見る</span>
              <span className={styles.glassCard__arrow}>→</span>
            </div>
          </div>
        </a>
        <a className={styles.glassCard} href="">
          <div className={styles.glassCard__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="800"
              height="600"
            />
          </div>
          <div className={styles.glassCard__content}>
            <h3 className={styles.glassCard__title}>UX/UI デザイン</h3>
            <div className={styles.glassCard__text}>
              <div className={styles.glassCard__text__inner}>
                <p>
                  徹底したユーザー視点のアプローチにより、直感的で心に残る最高の体験を提供
                </p>
              </div>
            </div>
            <div className={styles.glassCard__footer}>
              <span>詳しく見る</span>
              <span className={styles.glassCard__arrow}>→</span>
            </div>
          </div>
        </a>
      </div>

      <div className="_spacer_"></div>
    </div>
  );
};

export default Page;
