import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>要素を2列に並べるカラムレイアウトの実装</h2>

      <h3>grid</h3>
      <div className={styles.grid2cols}>
        <div className="_box_">Box - A</div>
        <div className="_box_">Box - B</div>
        <div className="_box_">Box - C</div>
        <div className="_box_">Box - D</div>
      </div>

      <h3>flex</h3>
      <div className={styles.flex2cols}>
        <div className="_box_">Box - A</div>
        <div className="_box_">Box - B</div>
        <div className="_box_">Box - C</div>
        <div className="_box_">Box - D</div>
      </div>

      <hr />

      <h2>カラム比率が2:1で2列に並ぶレイアウトの実装</h2>
      <h3>grid</h3>
      <div className={styles.grid2_1}>
        <div className="_box_">Box - A</div>
        <div className="_box_">Box - B</div>
        <div className="_box_">Box - C</div>
        <div className="_box_">Box - D</div>
      </div>

      <h3>flex</h3>
      <div className={styles.flex2_1}>
        <div className="_box_">Box - A</div>
        <div className="_box_">Box - B</div>
        <div className="_box_">Box - C</div>
        <div className="_box_">Box - D</div>
      </div>

      <hr />

      <h2>複数要素をセンター寄せする記述の例</h2>
      <h3>grid</h3>
      <div className={clsx(styles.gridCenter, "_box_")}>
        <div className="font-size--lg">Center</div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <h3>flex</h3>
      <div className={clsx(styles.flexCenter, "_box_")}>
        <div className="font-size--lg">Center</div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <hr />

      <h2>画像の上にカラーレイヤーとコンテンツを重ねて表示する</h2>
      <h3>grid</h3>
      <div className={clsx(styles.layeredBox, styles.layeredBoxGrid)}>
        <img
          src="https://placehold.jp/1200x800.png"
          alt=""
          width="1200"
          height="800"
        />
        <div className={styles.layeredBox__blacklayer}></div>
        <div className={styles.layeredBox__content}>Overlay Contents</div>
      </div>

      <h3>absolute</h3>
      <div className={clsx(styles.layeredBox, styles.layeredBoxAbsolute)}>
        <img
          src="https://placehold.jp/1200x800.png"
          alt=""
          width="1200"
          height="800"
        />
        <div className={styles.layeredBox__blacklayer}></div>
        <div className={styles.layeredBox__content}>Overlay Contents</div>
      </div>

      <hr />

      <h2>4列x4行のグリッドに要素を配置する</h2>
      <div className={styles.grid4x4}>
        <div className={clsx(styles.boxA, "_box_")}>A</div>
        <div className={clsx(styles.boxB, "_box_")}>B</div>
        <div className={clsx(styles.boxC, "_box_")}>C</div>
        <div className={clsx(styles.boxD, "_box_")}>D</div>
      </div>

      <hr />

      <h2>名前付きグリッドエリアを使ってみる</h2>
      <div className={styles.areaGrid}>
        <div className={clsx(styles.header, "_box_")}>
          <p>Header</p>
        </div>
        <div className={clsx(styles.main, "_box_")}>
          <p>Main</p>
        </div>
        <div className={clsx(styles.aside, "_box_")}>
          <p>Aside</p>
        </div>
        <div className={clsx(styles.footer, "_box_")}>
          <p>Footer</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
