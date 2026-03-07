import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <>
      <div className="_flow_">
        <h2>ブロークンレイアウトの例 01</h2>
        <div className={styles.section}>
          <div className={styles.broken01}>
            <div className={styles.broken01__content}>
              <h2>Section Title</h2>
              <p>
                ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような
                Liberroy, Foo の取り組み、我らのうち、Mulla Sunt
                の利点を提案したのなら
              </p>
            </div>
            <div className={styles.broken01__images}>
              <div className={clsx(styles.imgFrame, styles.broken01__img1)}>
                <img
                  className={styles.img}
                  src="https://placehold.jp/1200x800.png"
                  alt=""
                  width="1200"
                  height="800"
                />
              </div>
              <div className={clsx(styles.imgFrame, styles.broken01__img2)}>
                <img
                  className={styles.img}
                  src="https://placehold.jp/1200x800.png"
                  alt=""
                  width="1200"
                  height="800"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />
        <h2>ブロークンレイアウトの例 02</h2>
        <div className={styles.section}>
          <div className={styles.broken02}>
            <h2 className={styles.broken02__title}>Section Title</h2>
            <p className={styles.broken02__subtext}>
              ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。
            </p>
            <div className={clsx(styles.imgFrame, styles.broken02__img1)}>
              <img
                src="https://placehold.jp/1200x800.png"
                alt=""
                width="1200"
                height="800"
              />
            </div>
            <div className={clsx(styles.imgFrame, styles.broken02__img2)}>
              <img
                src="https://placehold.jp/1200x800.png"
                alt=""
                width="1200"
                height="800"
              />
            </div>
          </div>
        </div>

        <hr />
        <h2>ブロークンレイアウトの例 03</h2>
        <div className={styles.broken03}>
          <div className={clsx(styles.imgFrame, styles.broken03__img)}>
            <img
              src="https://placehold.jp/1200x800.png"
              alt=""
              width="1200"
              height="800"
            />
          </div>
          <h2 className={styles.broken03__title}>
            Section
            <br />
            Title
          </h2>
          <p className={styles.broken03__subtext}>
            ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。
          </p>
        </div>
        <hr />
      </div>

      <div className="_demo_ _flow_">
        <h2>画像回り込みレイアウト</h2>
        <div className={styles.shapeOutsideContent}>
          <div className={clsx(styles.imgFrame, styles.imgFrameCircle)}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="600"
              height="400"
              loading="lazy"
              alt=""
            />
          </div>
          <p>
            ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような
            Liberroy, Foo の取り組み、我らのうち、Mulla Sunt
            の利点を提案したのなら。つまり、彼らはあなたの悩みに一般的な魂を癒しています。困難な必要性に少ないもの、それがコンテンツの比較です。あなたが選択的な彼女の事実、無意味な含有、便利な阻止と甘さ、誰かがもっと腐敗した残り物。提供する時間の生活、それで発明者が賢明です。
          </p>
        </div>

        <div className={styles.shapeOutsideContent}>
          <div className={clsx(styles.imgFrame, styles.imgFramePolygon)}>
            <img
              src="https://placehold.jp/1200x800.png"
              width="600"
              height="400"
              loading="lazy"
              alt=""
            />
          </div>
          <p>
            ロレム・イプサムの座り雨、トマ好き学習だったエリット、しかし時と活力はそのような木々と楽しみ。ブラインド行うにはいくつかの重要な事柄が流れます。長年にわたり、私は学区と長寿であれば、そのような
            Liberroy, Foo の取り組み、我らのうち、Mulla Sunt
            の利点を提案したのなら。つまり、彼らはあなたの悩みに一般的な魂を癒しています。困難な必要性に少ないもの、それがコンテンツの比較です。あなたが選択的な彼女の事実、無意味な含有、便利な阻止と甘さ、誰かがもっと腐敗した残り物。提供する時間の生活、それで発明者が賢明です。
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
