import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>
        基本のカードデザイン(浮き上がる様な表現と矢印のマイクロインタラクション)
      </h2>
      <div className={styles.cards}>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>デジタルマーケティング</h3>
            <p className={styles.card__text}>
              データ分析に基づいた多角的な戦略立案で、ビジネスの成果を確実に最大化します
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>システム開発・アプリ開発</h3>
            <p className={styles.card__text}>
              最新の技術トレンドと柔軟な設計を組み合わせ、堅牢で拡張性の高いシステムを構築
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>UX/UI デザイン</h3>
            <p className={styles.card__text}>
              徹底したユーザー視点のアプローチにより、直感的で心に残る最高の体験を提供
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>メディアズームと色調変化を作成する</h2>
      <div className={clsx(styles.cards, styles.cardsZoom)}>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>デジタルマーケティング</h3>
            <p className={styles.card__text}>
              データ分析に基づいた多角的な戦略立案で、ビジネスの成果を確実に最大化します
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>システム開発・アプリ開発</h3>
            <p className={styles.card__text}>
              最新の技術トレンドと柔軟な設計を組み合わせ、堅牢で拡張性の高いシステムを構築
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>UX/UI デザイン</h3>
            <p className={styles.card__text}>
              徹底したユーザー視点のアプローチにより、直感的で心に残る最高の体験を提供
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="_spacer_"></div>
      <hr />

      <h2>ぼかし効果とオーバーレイテキスト</h2>
      <div className={clsx(styles.cards, styles.cardsZoom)}>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
            <div className={styles.card__media__overlayer}>
              <span>READ MORE</span>
            </div>
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>デジタルマーケティング</h3>
            <p className={styles.card__text}>
              データ分析に基づいた多角的な戦略立案で、ビジネスの成果を確実に最大化します
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
            <div className={styles.card__media__overlayer}>
              <span>READ MORE</span>
            </div>
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>システム開発・アプリ開発</h3>
            <p className={styles.card__text}>
              最新の技術トレンドと柔軟な設計を組み合わせ、堅牢で拡張性の高いシステムを構築
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.card__media}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="960"
              height="640"
              alt=""
            />
            <div className={styles.card__media__overlayer}>
              <span>READ MORE</span>
            </div>
          </div>
          <div className={styles.card__content}>
            <h3 className={styles.card__title}>UX/UI デザイン</h3>
            <p className={styles.card__text}>
              徹底したユーザー視点のアプローチにより、直感的で心に残る最高の体験を提供
            </p>
            <div className={styles.card__footer}>
              <a className={styles.card__link} href="#">
                詳しく見る <span className={styles.card__arrow}>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="_spacer_"></div>
    </div>
  );
};

export default Page;
