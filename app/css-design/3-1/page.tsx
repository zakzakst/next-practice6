import clsx from "clsx";
import styles from "./styles.module.css";

const Page = () => {
  return (
    <div className="_demo_ _flow_">
      <h2>基本となるシンプルなボタン</h2>
      <a href="#" className="button">
        ボタン
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>塗りつぶしボタンのアニメーションパターン</h2>
      <a href="#" className="button hoverReverse">
        ボタン - reverse
      </a>
      <a href="#" className="button hoverUp">
        ボタン - up
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>アウトラインボタン</h2>
      <a href="#" className="button buttonOutline">
        ボタン - outline
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>アウトラインボタンのアニメーションパターン</h2>
      <a href="#" className="button buttonOutline hoverSlide">
        ボタン - slide
      </a>
      <a href="#" className="button buttonOutline hoverInk">
        ボタン - ink
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>ホバーで沈み込む立体的なボタン</h2>
      <a href="#" className="button buttonPush">
        ボタン - push
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>ホバーで背景が移動するグラデーションボタン</h2>
      <a href="#" className="button buttonGrad">
        ボタン - grad
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>ホバー時にボーダーと背景が分離するボタン</h2>
      <a href="#" className="button buttonSplit">
        ボタン - split
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>ループアニメーションとホバーアニメーションを持つ、光るボタン</h2>
      <a href="#" className="button buttonShine">
        ボタン - shine
      </a>

      <div className="_spacer_"></div>
      <hr />

      <h2>ホバー時に立体的に回転する3Dボタン</h2>
      <a href="###" className="cubeButton">
        <span className="cubeButton__text">Button</span>
        <span className="cubeButton__text">Hovered</span>
      </a>

      <div className="_spacer_"></div>
    </div>
  );
};

export default Page;
