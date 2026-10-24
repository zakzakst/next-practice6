"use client";

import styles from "./styles2.module.css";
import { createElement } from "react";

type Country = {
  id: string;
  name: string;
  text: string;
};

type CountryGroup = {
  name: string;
  countries: Country[];
};

const countryGroups: CountryGroup[] = [
  {
    name: "アジア",
    countries: [
      {
        id: "seoul",
        name: "ソウル",
        text: "K-POPとグルメの楽園",
      },
      {
        id: "hongkong",
        name: "香港",
        text: "ネオン輝くアジアの金融ハブ",
      },
      {
        id: "taipei",
        name: "台北",
        text: "熱気あふれるグルメと文化の街",
      },
      {
        id: "bangkok",
        name: "バンコク",
        text: "エキゾチックな寺院巡りが楽しい",
      },
    ],
  },
  {
    name: "中東",
    countries: [
      {
        id: "dubai",
        name: "ドバイ",
        text: "砂漠にそびえる近未来都市",
      },
      {
        id: "istanbul",
        name: "イスタンブール",
        text: "東西文化が交差する歴史の都",
      },
      {
        id: "cairo",
        name: "カイロ",
        text: "ピラミッドとナイルの古都",
      },
      {
        id: "riyadh",
        name: "リヤド",
        text: "伝統と経済発展が共存する中心地",
      },
    ],
  },
  {
    name: "ヨーロッパ",
    countries: [
      {
        id: "london",
        name: "ロンドン",
        text: "歴史と最新トレンドが交差する街",
      },
      {
        id: "paris",
        name: "パリ",
        text: "芸術とカフェ文化の街",
      },
      {
        id: "rome",
        name: "ローマ",
        text: "古代遺跡が残る永遠の都",
      },
      {
        id: "berlin",
        name: "ベルリン",
        text: "自由とアートが息づく都市",
      },
    ],
  },
  {
    name: "北米",
    countries: [
      {
        id: "newyork",
        name: "ニューヨーク",
        text: "世界が集まる眠らない街",
      },
      {
        id: "losangeles",
        name: "ロサンゼルス",
        text: "エンタメとビーチの夢の都市",
      },
      {
        id: "toronto",
        name: "トロント",
        text: "多文化が共存するカナダの中心地",
      },
      {
        id: "mexicocity",
        name: "メキシコシティ",
        text: "歴史とモダンが融合する大都市",
      },
    ],
  },
];

export const Parts = () => {
  return (
    <div>
      <select className={styles.citySelect}>
        {/* NOTE: reactだと「selectの中にbutton要素入れられない」、だったり「selectedcontentは存在しない」といったエラーが出た */}
        <button className={styles.citySelectButton}>
          <selectedcontent />
          {/* {createElement("selectedcontent")} */}
        </button>
        <div className="city-option-wrapper">
          {countryGroups.map((countryGroup) => (
            <optgroup className="city-option-group" label={countryGroup.name}>
              {countryGroup.countries.map((country) => (
                <option className="city-option" value={country.id}>
                  <span className={styles.cityText}>{country.name}</span>
                  <small className={styles.citySmall}>{country.text}</small>
                </option>
              ))}
            </optgroup>
          ))}
        </div>
      </select>
    </div>
  );
};
