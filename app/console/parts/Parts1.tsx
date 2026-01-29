"use client";

import { useEffect } from "react";

export const Parts = () => {
  console.count("Function call count");

  useEffect(() => {
    console.log(
      "%cスタイルを設定",
      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
    );

    console.log(
      "%c複数の箇所%cに%cスタイル%cを設定",
      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
      "",
      "color:green;",
      "",
    );

    console.table(["Qiita", "blog1", "blog2"]);

    console.table({
      Date: new Date().getFullYear(),
      platform: "Qiita",
      post1: "blog1",
    });

    // consoleをグルーピングする
    console.group("ユーザー情報");
    console.log("Name: John Doe");
    console.warn("Warning: Incomplete user information");
    // console.error("Error: Unable to fetch user data");
    console.groupEnd();

    // consoleをグルーピングする（閉じた状態で色付き）
    console.groupCollapsed(
      "%cユーザー情報",
      "color:white; background-color:purple; padding:2px 4px; border-radius:4px;",
    );
    console.log("Name: John Doe");
    console.warn("Warning: Incomplete user information");
    console.groupEnd();

    const user = {
      name: "Alice",
      age: 25,
      address: {
        city: "Tokyo",
        country: "Japan",
      },
    };
    console.dir(user);

    // 時間の計測
    console.time("time");
    const qiita = function () {
      console.log("Qiita");
    };
    qiita();
    console.timeEnd("time");

    // 第一引数に渡された値がfalseの場合エラーメッセージを出力、trueの場合は何も表示しない
    let value = 10;
    console.assert(value > 0, "値は0より大きい必要があります");
    console.assert(value < 0, "値は0より小さい必要があります");

    // console.clear();

    console.trace("スタックトレースを表示");
  }, []);

  return <div>parts</div>;
};
