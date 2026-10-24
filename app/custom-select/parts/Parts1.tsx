"use client";

import styles from "./styles1.module.css";

export const Parts = () => {
  return (
    <div>
      <select className={styles.customized}>
        <option value="">カスタマイズに</option>
        <option value="">必要なCSSが</option>
        <option value="">設定されているよ</option>
      </select>
      <select>
        <option value="">カスタマイズに</option>
        <option value="">必要なCSSが</option>
        <option value="">設定されていないよ</option>
      </select>
      <select className={styles.styled}>
        <option value="1">選択肢1</option>
        <option value="2">選択肢2</option>
        <option value="3">選択肢3</option>
      </select>
    </div>
  );
};
